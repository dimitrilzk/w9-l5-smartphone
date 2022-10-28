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
    tariffa: number = 0;
    constructor(credito: number, minutiChiamata: number, tariffa: number) {
        this.credito = credito;
        this.minutiChiamata = minutiChiamata;
        this.tariffa = tariffa;
    }
    ricarica(soldi:number): number {
       return this.credito += soldi;
    }
    durataChiamata(minuti:number): number {
        return this.minutiChiamata += minuti;
    }
    creditoResiduo(): any {
        let res = this.credito - this.minutiChiamata * this.tariffa;
        //console.log(`Il tuo credito è ${res}`);
    }
    mostraDurataChiamate(): number {
        return this.minutiChiamata;
    }
    azzeraChiamate(): number {
        return this.minutiChiamata = 0;
    }
}
class Vodafone extends Smartphone {
    ricarica(soldi:number): any {
        console.log(this.credito += soldi);
     }
    calling(minutes: number): any {
        if(this.credito >= minutes *0.2) {
            this.minutiChiamata += minutes;
            this.credito -= minutes *0.2;
        } else {
            console.log(`Gentile utente il tuo credito è insufficiente, attualmente hai ${this.credito}, fai una ricarica.`)
        }
    }

}
let user1 = new Vodafone(0,0,0.2);
// user1.credito += 25;
// user1.durataChiamata(8);
// user1.creditoResiduo();
user1.ricarica(50)
user1.calling(5);
console.log(user1)




// class Wind extends Smartphone{

// }
// let user2 = new Samsung(0,0,0.2);
// user2.ricarica(20);
// user2.durataChiamata(5)
// console.log(user2)
