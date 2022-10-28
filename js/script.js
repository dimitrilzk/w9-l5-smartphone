"use strict";
class Smartphone {
    constructor(credito, minutiChiamata) {
        this.credito = 0;
        this.minutiChiamata = 0;
        this.credito = credito;
        this.minutiChiamata = minutiChiamata;
    }
    ricarica() {
        return this.credito += 20;
    }
    durataChiamate() {
        return this.minutiChiamata += 3;
    }
    creditoResiduo() {
        return this.credito;
    }
    mostraDurataChiamate() {
        return this.minutiChiamata;
    }
    azzeraChiamate() {
        return this.minutiChiamata = 0;
    }
}
