// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bikesStore = [];

for (let i = 0; i < 10; i++) {
    const bike = {
        nome: "Bike " + i,
        peso: Math.floor(Math.random() * (10 - 2) + 2)
    }
    bikesStore.push(bike);
}

let liteBike = bikesStore[0];

bikesStore.forEach((bike) => {
    if (bike["peso"] < liteBike["peso"]) liteBike = bike;
});

const { nome } = liteBike;

console.log(bikesStore);
console.log(`La ${nome} è la bici più leggera dello store`);

