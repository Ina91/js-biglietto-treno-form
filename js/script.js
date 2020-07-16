//Blocco biglietto inizialmente non visibile
document.getElementById('ticket-data').className = "display-hidden";

// comparsa biglietto al click genera
document.getElementById("genera").addEventListener("click",display);
function display(){
    var displayBlock = document.getElementById('ticket-data').className = "display-Block";
}

// scomparsa biglietto al click annulla
document.getElementById("annulla").addEventListener("click",display2);
function display2(){
    var displayHidden = document.getElementById('ticket-data').className = "display-hidden";

}


//nome passeggero
document.getElementById("genera").addEventListener("click",nameFunction);
function nameFunction() {
    var nome =document.getElementById('input-name').value;
    document.getElementById('name').innerHTML = nome;
}

// sconto
document.getElementById("genera").addEventListener("click",offertaFunction );
function offertaFunction() {
    var eta = document.getElementById('age-input').value;
    if (eta < 18){
        document.getElementById('offerta').innerHTML= 'Sconto Minorenne';
    }else if (eta>65) {
        document.getElementById('offerta').innerHTML= 'Sconto Silver';

    }else{
        document.getElementById('offerta').innerHTML= 'Tariffa Standart';

    }

}

// numeri  casuali carrozza da 1  a 10
document.getElementById("genera").addEventListener("click",carrozzaFunction );
function carrozzaFunction(carro){
    var carrozza = Math.floor(Math.random()*10)+1;
    document.getElementById('carrozza').innerHTML = carrozza;
}

 // numero codice-cp da 90000 e 100000 escluso
 document.getElementById("genera").addEventListener("click", codiceCpFunction);
 function codiceCpFunction(codice){
     var codiceCp = Math.floor(Math.random()*99999)+90000 ;
     document.getElementById('codice-cp').innerHTML = codiceCp;
 }

 // costo biglietto
 document.getElementById("genera").addEventListener("click", miaFunzione);
 function miaFunzione(distanza,eta,costo) {
     var distanza = document.getElementById('distance-input').value;
     var eta = document.getElementById('age-input').value;
     var costoKm = 0.21;
     var costo = distanza * costoKm;

     if (eta<18) {
         costo *= 0.8;
     }else if (eta>65) {
         costo *= 0.6;
     }
     document.getElementById('costo').innerHTML = costo.toPrecision(3) + '€';

 }


 
