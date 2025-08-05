let herois = [
    { nome: "Homem Aranha", xp: 10000 },
    { nome: "Viúva Negra", xp: 8000 },
    { nome: "Superman", xp: 15000 },
];

for (let heroi of herois) {
    let nivel;

    if (heroi.xp < 8000) {
        nivel = "Força média";
    } else if (heroi.xp <= 9000) {
        nivel = "Forte";
    } else if (heroi.xp <= 11000) {
        nivel = "Super Forte";
    } else {
        nivel = "Mega Forte";
    }

    console.log(`O herói de nome ${heroi.nome} está no nível de ${nivel}.`);
}

