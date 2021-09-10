// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bikesStore = [];
let liteBikes = [];
//test

for (let i = 0; i < 10; i++) {
    const bike = {
        nome: "Bike " + i,
        peso: Math.floor(Math.random() * (10 - 2) + 2)
    }
    bikesStore.push(bike);
}

let liteBike = bikesStore[0];

bikesStore.forEach((bike) => {
    // if (bike["peso"] < liteBike["peso"]) liteBike = bike;
    if(liteBikes.length <= 0) liteBikes.push(bike);
    else if(bike["peso"] == liteBikes[0]["peso"]) liteBikes.push(bike);
    else if (bike["peso"] < liteBikes[0]["peso"]) {
        liteBikes = [];
        liteBikes.push(bike);
    } 
});

let dLog = "Le bici più leggere dello store sono:";
liteBikes.forEach((bike) => {
    const {nome} = bike;
    dLog += ` ${nome},`;
});

console.log(bikesStore);
console.log(liteBikes);
console.log(dLog.slice(0,-1));

