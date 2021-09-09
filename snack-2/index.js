// Creare un array di oggetti di squadre di calcio.Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre1 = [
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Juve',
        punti: 0,
        falli: 0
    }
]

const squadre2 = [];

console.log("Array Squadre 1");
console.log(squadre1);

squadre1.forEach((squadra) => {
    squadra["punti"] = Math.floor(Math.random() * (10 - 1) + 1);
    squadra["falli"] = Math.floor(Math.random() * (10 - 1) + 1);
    const { nome, falli } = squadra;
    squadre2.push({ nome, falli });
});

console.log("Array Squadre 2");
console.log(squadre2);
