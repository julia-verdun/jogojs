/* Calcular o valor total do carrinho
Mostrar o item mais caro (considerando preço unitário)
Retornar quantos itens diferentes existem
Retornar o total de itens (somando quantidades)
*/



/*
const carrinho = [
    { nome: "Mouse", preco: 50, quantidade: 2 },
    { nome: "Teclado", preco: 100, quantidade: 1 },
    { nome: "Monitor", preco: 800, quantidade: 1 }
];
function analisarCarrinho(carrinho) {
    let total = 0;
    let itemMaisCaro = carrinho[0];
    let totalItens = 0;

    for (let i = 0; i < carrinho.length; i++) {
        const item = carrinho[i];

        total += item.preco * item.quantidade;
        totalItens += item.quantidade;

        if (item.preco > itemMaisCaro.preco) {
            itemMaisCaro = item;
        }
    }

    return {
        total: total,
        itemMaisCaro: itemMaisCaro.nome,
        quantidadeItens: carrinho.length,
        totalItens: totalItens
    };
}

console.log(analisarCarrinho(carrinho));


*/

/*
const alunos = [
    { nome: "Ana", nota: 7 },
    { nome: "Carlos", nota: 5 },
    { nome: "João", nota: 9 },
    { nome: "Marina", nota: 6 }
];

function analisarNotas(alunos) {
    let maior = alunos[0];
    let menor = alunos[0];
    let soma = 0;
    let aprovados = 0;

    for (let i = 0; i < alunos.length; i++) {
        const aluno = alunos[i];

        soma += aluno.nota;

        if (aluno.nota > maior.nota) {
            maior = aluno;
        }

        if (aluno.nota < menor.nota) {
            menor = aluno;
        }

        if (aluno.nota >= 6) {
            aprovados++;
        }
    }

    return {
        mediaNotas: soma / alunos.length,
        alunoComMaiorNota: maior.nome,
        alunoComMenorNota: menor.nome,
        aprovados: aprovados
    };
}

console.log(analisarNotas(alunos));

*/

/*

function analisarEstoque(produtos) {
    let maisCaro = produtos[0];
    let maisBarato = produtos[0];
    let total = 0;
    let semEstoque = 0;

    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];

        total += produto.preco * produto.estoque;

        if (produto.preco > maisCaro.preco) {
            maisCaro = produto;
        }

        if (produto.preco < maisBarato.preco) {
            maisBarato = produto;
        }

        if (produto.estoque === 0) {
            semEstoque++;
        }
    }

    return {
        valorTotalEstoque: total,
        produtoMaisCaro: maisCaro.nome,
        produtoMaisBarato: maisBarato.nome,
        produtosSemEstoque: semEstoque
    };
}

console.log(analisarEstoque(produtos));

*/


const usuarios = [
    { nome: "Gabriel", idade: 19, ativo: true },
    { nome: "Ana", idade: 25, ativo: false },
    { nome: "Carlos", idade: 30, ativo: true },
    { nome: "Marina", idade: 22, ativo: true }
];

function AnalisarUsuarios(usuarios) {
    let ativos = 0;
    let inativos = 0;

    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];

        if (usuario.ativo === true) {
            ativos++;
        } else {
            inativos++;
        }

        if(ativos){
            const idade = usuario.idade;

        }

    }

    const users = ativos + inativos;


    return {
        idade,
        ativos,
        inativos,
        users
    };
}

console.log(AnalisarUsuarios(usuarios));

