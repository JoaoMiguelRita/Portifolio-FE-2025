listaHerois = [
    {
        "nome": 'Homem de Ferro',
        "alter_ego": 'Tony Stark',
        "first_appearance" : 'Marvel Comics',
        "poder": 'Armadura',
        "id": 1
    },
    {
        "nome": 'Capitão América',
        "alter_ego": 'Steve Rogers',
        "first_appearance" : 'Marvel Comics',
        "poder": 'Escudo',
        "id": 2
    },    
    {
        "nome": 'Homem Aranha',
        "alter_ego": 'Peter Parker',
        "first_appearance" : 'Marvel Comics',
        "poder": 'Teia',
        "id": 3
    },
    {
        "nome": "Superman",
        "alter_ego": "Clark Kent",
        "first_appearance": "DC Comics",
        "poder": "Super força",
        "id": 4
    },
    {
        "nome": 'Homem Formiga',
        "alter_ego": 'Scott Lang',
        "first_appearance" : 'Marvel Comics',
        "poder": 'Enorme',
        "id": 5
    },
    {
        "nome": "Batman",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "DC Comics",
        "poder": "Justiça",
        "id": 6
    }
]

const nomeHeroi = listaHerois.map(function(heroi){
    return heroi.alter_ego;
});
console.log(nomeHeroi);

const primeiraAparicao = listaHerois.reduce(function(acumulador, heroi){
    if (heroi.first_appearance === 'Marvel Comics'){
        totalCaracteres = acumulador + heroi.first_appearance.length;
    }
    return totalCaracteres;
}, 0);
console.log(primeiraAparicao);

const heroisDc = listaHerois.filter(function(heroi){
    return heroi.first_appearance === 'DC Comics';
})
console.log(heroisDc);

const superhero = listaHerois.sort(function(a, b){
    if (a.nome.length < b.nome.length){
        return -1;
    }
    if (a.nome.length > b.nome.length){
        return 1;
    }
    return 0;
}, 0);
console.log(superhero);