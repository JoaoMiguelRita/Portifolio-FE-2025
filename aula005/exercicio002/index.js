const listSeries = [];

let count = 'S';


while (count.toUpperCase() === 'S') {
    let name = prompt("Qual o nome do série?");
    let quantity = parseInt(prompt("Qual a quantidade de episódios?:"));
    let duration = parseInt(prompt("Qual sua duração de cada episódio?(Em minutos)"));

    listSeries.push({
        name: name,
        quantity: quantity,
        duration: duration
    });    

    count = prompt("Deseja cadastrar mais series (S/N)");     
}

for(let serie of listSeries){
    let tDuration = serie.quantity*serie.duration;

    console.log(`Você precisará de ${tDuration} minutos para assistir completamente o filme ${serie.name} que possui ${serie.quantity} episódios.`);
}