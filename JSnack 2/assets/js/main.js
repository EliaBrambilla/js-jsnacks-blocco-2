// Generatore di “nomi cognomi” casuali: 
// il Grande Gatsby ha  una lista di nomi e una lista di cognomi, 
// e da queste vuole generare una falsa lista di invitati con nome e cognome.

let NameList = ["Emanuele", "Peppe", "Gianpiero", "Francesco", "Pdor", "Giorgiovanni", "Rino"];
let SurnameList = ["Freni", "Kmer", "Enoteca", "Brazorf", "Lucciola", "De Rosa", "Fantoni"];

let listaFalsa = [];
let listaFalsaStamp = document.getElementById(`result`);

console.log(NameList);
console.log(SurnameList);

for ( let i = 0; i < 7; i++) {

    let NamesRandom = Math.floor(Math.random() * NameList.length);
    let SurnamesRandom = Math.floor(Math.random() * SurnameList.length);

    let nomeFesta = NameList[NamesRandom];
    let cognomeFesta = SurnameList[SurnamesRandom];

    let invitatoFesta = `${nomeFesta} ${cognomeFesta}`;

    console.log(invitatoFesta);
    
    listaFalsa.push(invitatoFesta);
    // listaFalsa[i] = invitatoFesta;

    console.log(listaFalsa);

}

listaFalsaStamp.innerHTML = `questa è la lista: ${listaFalsa}`;