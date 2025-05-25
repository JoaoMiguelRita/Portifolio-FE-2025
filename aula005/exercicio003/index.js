const candidatos = ["Daenerys", "Jon Snow", "Cersei", "Stannis"];
const votos = [5, 8, 8, 4];

let maxVotos = 0;
let vencedores = [];

for (let i = 0; i <= votos.length; i++) {
    if (votos[i] > maxVotos) {
        maxVotos = votos[i];
        vencedores.length = 0;
        vencedores.push({name: candidatos[i]});
    } else if (votos[i] == maxVotos) {
        vencedores.push({name: candidatos[i]});
    }
}

if (vencedores.length === 1) {
    console.log(`O dono do Trono de Ferro é ${vencedores.name}!`);
} else {
    console.log("Há um empate entre: ");
    for(vencedor of vencedores){
        console.log(`${vencedor.name}`);
    }
}
