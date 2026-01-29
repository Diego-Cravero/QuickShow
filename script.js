let domanda  = ["quanto fa 5 + 3?", "capitale italiana?","JS è un programma intpretato"]

let risposte = [["6", "7" , "8" , "9 "],
                ["Roma","napoli","Sanfre","Bra"],
                ["Si","No","Forse","Chiedo a Teodolinda"]] 


let _domanda = document.getElementById("Domanda")
_domanda.textContent=domanda

let _risposte = document.getElementsByTagName("span")

for(let i=0 ; i<4;i++){
    _risposte[i].textContent  = risposte[i]
}