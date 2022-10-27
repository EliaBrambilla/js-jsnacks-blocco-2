// Inserisci un numero, se è pari stampa il numero, 
// se è dispari stampa il numero successivo.


let inputNumber = parseInt(prompt(`Inserisci un numero`));

let risultato = document.getElementById(`result`);

if (isNaN(inputNumber)) {

    alert(`Ricarica la pagina e inserisci un numero, solo un nuemro, nient'altro che un numero`);

} else {

    if ((inputNumber % 2) !==0 ) {

        let numeroPlus = inputNumber + 1;

        console.log(numeroPlus);
        risultato.innerHTML = `il numero da te inserito era ${inputNumber} ma è stato incrementato di uno per renderlo pari, eccolo: ${numeroPlus}`;

    } else {

        console.log(inputNumber);
        risultato.innerHTML = `${inputNumber} è pari`;        

    }

}