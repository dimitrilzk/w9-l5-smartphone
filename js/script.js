"use strict";
class Smartphone {
    constructor(credito, minutiChiamata, tariffa) {
        this.credito = 0;
        this.minutiChiamata = 0;
        this.tariffa = 0;
        this.credito = credito;
        this.minutiChiamata = minutiChiamata;
        this.tariffa = tariffa;
    }
    ricarica(soldi) {
        return this.credito += soldi;
    }
    durataChiamata(minuti) {
        return this.minutiChiamata += minuti;
    }
    creditoResiduo() {
        let res = this.credito - this.minutiChiamata * this.tariffa;
    }
    mostraDurataChiamate() {
        return this.minutiChiamata;
    }
    azzeraChiamate() {
        return this.minutiChiamata = 0;
    }
}
class Vodafone extends Smartphone {
    calling(minutes) {
        if (this.credito >= minutes * this.tariffa) {
            this.minutiChiamata += minutes;
            this.credito -= minutes * this.tariffa;
        }
        else {
            console.log(`Gentile utente il tuo credito è insufficiente, attualmente hai ${this.credito} €, fai una ricarica.`);
        }
    }
    creditoResiduo() {
        let res = this.credito - this.minutiChiamata * this.tariffa;
        console.log(`Il tuo credito è ${res} €.`);
    }
    mostraDurataChiamate() {
        console.log(`Il totale dei minuti trascorsi in chiamta sono: ${this.minutiChiamata}`);
    }
    rest() {
        return this.credito = 0, this.minutiChiamata = 0;
    }
}
let user1 = new Vodafone(0, 0, 0.2);
// user1.ricarica(5);
// user1.creditoResiduo();
// user1.calling(5);
// user1.calling(13);
// user1.calling(7);
// user1.mostraDurataChiamate();
// user1.azzeraChiamate();
// user1.calling(1);
// user1.rest();
// user1.ricarica(10);
// user1.calling(22);
// console.log(user1)
let btnCredito = document.querySelector(".cres");
btnCredito.addEventListener('click', function showCr() {
    let display = document.querySelector("h2");
    display.innerText = `Il tuo credito residuo è di ${user1.credito} euro.`;
});
let btnRic5 = document.querySelector(".ric5");
btnRic5.addEventListener('click', function ric5euro() {
    user1.ricarica(5);
    let display = document.querySelector("h2");
    display.innerText = `La tua ricarica è stata effetuata, il credito totale è di ${user1.credito} euro.`;
});
let btnRic10 = document.querySelector(".ric10");
btnRic10.addEventListener('click', function ric10euro() {
    user1.ricarica(10);
    let display = document.querySelector("h2");
    display.innerText = `La tua ricarica è stata effetuata, il credito totale è di ${user1.credito} euro.`;
});
let btnRic20 = document.querySelector(".ric20");
btnRic20.addEventListener('click', function ric20euro() {
    user1.ricarica(20);
    let display = document.querySelector("h2");
    display.innerText = `La tua ricarica è stata effetuata, il credito totale è di ${user1.credito} euro.`;
});
