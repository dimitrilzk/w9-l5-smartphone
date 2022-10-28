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
        //console.log(`Il tuo credito è ${res}`);
    }
    mostraDurataChiamate() {
        return this.minutiChiamata;
    }
    azzeraChiamate() {
        return this.minutiChiamata = 0;
    }
}
class Vodafone extends Smartphone {
    ricarica(soldi) {
        console.log(this.credito += soldi);
    }
    calling(minutes) {
        if (this.credito >= minutes * 0.2) {
            this.minutiChiamata += minutes;
            this.credito -= minutes * 0.2;
        }
        else {
            console.log(`Gentile utente il tuo credito è insufficiente, attualmente hai ${this.credito}, fai una ricarica.`);
        }
    }
}
let user1 = new Vodafone(0, 0, 0.2);
// user1.credito += 25;
// user1.durataChiamata(8);
// user1.creditoResiduo();
user1.ricarica(50);
user1.calling(5);
console.log(user1);
// class Wind extends Smartphone{
// }
// let user2 = new Samsung(0,0,0.2);
// user2.ricarica(20);
// user2.durataChiamata(5)
// console.log(user2)
