interface ISmartphone {
    ricarica(): number;
    durataChiamate(): number;
    creditoResiduo(): number;
    mostraDurataChiamate(): number;
    azzeraChiamte(): number;
}
abstract class Smartphone {
    credito: number = 0;
    minutiChiamata: number = 0;
    constructor(credito: number, minutiChiamata: number) {
        this.credito = credito;
        this.minutiChiamata = minutiChiamata;
    }
    ricarica(): number {
       return this.credito += 20;
    }
    durataChiamate(): number {
        return this.minutiChiamata += 3;
    }
    creditoResiduo(): number {
        return this.credito;
    }
    mostraDurataChiamate(): number {
        return this.minutiChiamata;
    }
    azzeraChiamate(): number {
        return this.minutiChiamata = 0;
    }

}