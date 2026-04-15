console.log('Script game.js carregado com sucesso!');

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Ajustar o tamanho do canvas para ocupar a tela inteira
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Carregar o sprite
const sprite = new Image();
sprite.src = 'sprite_sheet.png'; // Substitua pelo caminho correto do sprite

// Adicionar eventos para verificar se o sprite foi carregado corretamente
sprite.onerror = () => {
    console.error('Erro ao carregar o sprite. Verifique o caminho do arquivo sprite_sheet.png.');
};

// Configurações do personagem
const player = {
    x: 100,
    y: canvas.height - 150,
    width: 72, // Largura de um frame do sprite
    height: 72, // Altura de um frame do sprite
    frameX: 0,
    frameY: 0,
    speed: 5,
    moving: false
};

// Configurações do sprite sheet
const SPRITE_WIDTH = 72; // Largura de cada frame
const SPRITE_HEIGHT = 72; // Altura de cada frame
const SPRITE_COLUMNS = 8; // Número de colunas no sprite sheet
const SPRITE_ROWS = 5; // Número de linhas no sprite sheet

// Mapear animações para linhas do sprite sheet
const animations = {
    idle: 0, // Primeira linha
    walk: 1, // Segunda linha
    run: 2,  // Terceira linha
    jump: 3, // Quarta linha
    fall: 4  // Quinta linha
};

// Configurações do jogo
const keys = {};
const frameLimit = 6; // Controla a velocidade da animação
let frameCount = 0;

// Eventos de teclado
document.addEventListener('keydown', (e) => {
    keys[e.key] = true;
    player.moving = true;
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
    player.moving = false;
});

// Função para desenhar o personagem
function drawSprite(img, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight) {
    ctx.drawImage(img, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
}

// Atualizar posição e animação do personagem
function updatePlayer() {
    if (keys['ArrowRight']) {
        player.x += player.speed;
        player.frameY = animations.walk; // Linha do sprite para movimento à direita
    } else if (keys['ArrowLeft']) {
        player.x -= player.speed;
        player.frameY = animations.walk; // Linha do sprite para movimento à esquerda
    } else {
        player.frameY = animations.idle; // Linha do sprite parado
    }

    // Limitar o personagem dentro do canvas
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;

    // Atualizar o frame da animação
    if (player.moving) {
        frameCount++;
        if (frameCount >= frameLimit) {
            player.frameX = (player.frameX + 1) % SPRITE_COLUMNS; // Alternar entre os frames
            frameCount = 0;
        }
    } else {
        player.frameX = 0;
    }
}

// Adicionar um log para confirmar o carregamento do sprite
sprite.onload = () => {
    console.log('Sprite carregado com sucesso!');
    gameLoop();
};

// Adicionar um fundo temporário
function drawBackground() {
    ctx.fillStyle = '#87CEEB'; // Cor azul clara para o céu
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Simplificar o loop do jogo para teste
function gameLoop() {
    drawBackground(); // Desenhar o fundo

    // Testar se o sprite está sendo desenhado
    drawSprite(
        sprite,
        player.frameX * SPRITE_WIDTH,
        player.frameY * SPRITE_HEIGHT,
        SPRITE_WIDTH,
        SPRITE_HEIGHT,
        player.x,
        player.y,
        player.width,
        player.height
    );

    requestAnimationFrame(gameLoop);
}

// Iniciar o jogo quando o sprite for carregado
sprite.onload = () => {
    console.log('Sprite carregado com sucesso!');
    gameLoop();
};

// Adicionar evento para verificar se o canvas está configurado corretamente
if (!canvas) {
    console.error('Canvas não encontrado. Verifique se o elemento <canvas> está presente no HTML com o id "gameCanvas".');
}