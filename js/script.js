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
user1.ricarica(5);
user1.creditoResiduo();
user1.calling(5);
user1.calling(13);
user1.calling(7);
user1.mostraDurataChiamate();
user1.azzeraChiamate();
user1.calling(1);
user1.rest();
user1.ricarica(10);
user1.calling(22);
console.log(user1);
// class Wind extends Smartphone{
// }
// let user2 = new Samsung(0,0,0.2);
// user2.ricarica(20);
// user2.durataChiamata(5)
// console.log(user2)
