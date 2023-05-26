const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].pets.length > 0) {
        console.log(`${usuarios[i].nome} tem ${usuarios[i].pets.length} pets`)
    
} else {
    console.log(`${usuarios[i].nome} não tem pets`)
}
}

