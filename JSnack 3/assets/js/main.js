// Crea un array di numeri interi e fai la somma di tutti 
// gli elementi che sono in posizione dispari

let arrayNum = [];
let sum = 0;

for (let i = 0; i < 6; i++) {
    
    arrayNum[i] = parseInt(prompt("inserisci un numero"));

    console.log("numero inserito: " + arrayNum);

    if ( i % 2 !=0 ) {

        sum += arrayNum[i];
    
    }

}

console.log("Somma totale: " + sum);