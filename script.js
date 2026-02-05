let domande = [
  "quanto fa 5 + 3?",
  "capitale italiana?",
  "JS è un linguaggio?"
];

domande= [0,1,2]
domande.sort() //ordinamento vettore 


let risposte = [
  ["8", "7", "6", "9"],
  ["Roma", "Napoli", "Sanfre", "Bra"],
  ["Si", "No", "Forse", "Chiedo a Teodolinda"]
];

let indice = 0;
let x
let radios=document.getElementsByTagName("risposta")
let soluzioni = [0,0,3]
let _domanda = document.getElementById("Domanda");
let _risposte = document.getElementsByTagName("span");
radios = document.querySelector('input[type="radio"]') //prende il primo 
/*radios = document.querySelectorAll("p") li prende tutti */

caricaDomanda()
function caricaDomanda() {
    
    _domanda.textContent = domande[indice];
    for (let j = 0; j < 4; j++) {
        _risposte[j].textContent = risposte[indice][j];
        //radios[i].checked = false chiedere 
    }
    
}
function confermaDomanda() {
    let cont 
    let scelta= -1
    for(let i = 0;i<radios.length;i++){
       if(radios[i].checked){
            scelta=i
       }
    }
    if(scelta == -1)
    {
        alert("seleziona una risposta")
    }else
    {
        if(scelta==correte[indice]){
            alert("RIsposta corretta")
            cont++
        }
        else{
            alert("Risposta errata")
        }
    }
    indice++
    if(indice<domande.length){
        caricaDomanda()
    }
    else{
        alert("fine Domande ")
    }
    
        
    
}
