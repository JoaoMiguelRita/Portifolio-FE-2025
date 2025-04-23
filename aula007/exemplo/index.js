const vetorJogador = [
{
    "nome": 'Saka',
    "numero": 7,   
    "atuando": true
},
{
    "nome": 'Marrtinelli',
    "numero": 11,   
    "atuando": true
},
{
    "nome": 'Cech',
    "numero": 1,
    "atuando": false
},
{
    "nome": 'Terry Henry',
    "numero": 14,
    "atuando": false
},
{
    "nome": 'Ozil',
    "numero": 11,
    "atuando": false
}
];

const listaNome =  vetorJogador.map(function(jogador) {
    return jogador.nome;
});

const jogador7 = vetorJogador.find(function(jogador) {
    return jogador.numero === 7;
});

const jogadores11 = vetorJogador.filter(function(jogador) {
    return jogador.numero === 11;
});

const soma = vetorJogador.reduce((total, jogador) => {
    return total + jogador.numero;
}, 0);

console.log(soma);