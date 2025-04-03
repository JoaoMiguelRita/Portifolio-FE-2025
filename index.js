const clubs = [
    {name: "Criciúma", city: "Criciúma"},    
    {name: "Grêmio", city: "Porto Alegre"},
    {name: "Santos", city: "Santos"}
];

const matchs = [
    {house: "Criciúma", visit: "Grêmio"},
    {house: "Grêmio", visit: "Santos"},
    {house: "Santos", visit: "Criciúma"},
]

/*
for(let i=0;i<3;i++){

    let name = prompt("Digite o nome do clube");
    let city = prompt("Digite o nome da cidade");

    clubs.push({
        name, city
    });
}
*/

for(let match of matchs){
    match.golHouse = Math.floor(Math.random() * 6);
    match.golsVisit = Math.floor(Math.random() * 6);
}

function showMatchs(){
    for(let match of matchs){
        console.log(`${match.house}  ${match.golHouse} X ${match.golsVisit} ${match.visit}`);
    }
}

showMatchs();