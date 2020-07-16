// numeri  casuali carrozza da 1  a 10
 var carrozza = Math.floor(Math.random()*10)+1;
 document.getElementById('carrozza').innerHTML = carrozza;

 // numero codice-cp da 90000 e 100000 escluso
 var codiceCp = Math.floor(Math.random()*99999)+90000 ;
 document.getElementById('codice-cp').innerHTML = codiceCp;

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
