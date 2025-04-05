tAges = [];

for(i=0; i<6; i++){
    let agePerson = prompt("Informe sua idade.");

    tAges.push({age: agePerson});
}

console.log("Idades: ");
for(age of tAges){
    console.log(`${age.age} anos.`);
}