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
    }
    mostraDurataChiamate(): number {
        return this.minutiChiamata;
    }
    azzeraChiamate(): number {
        return this.minutiChiamata = 0;
    }
}
class Vodafone extends Smartphone {
    calling(minutes: number): any {
        if(this.credito >= minutes * this.tariffa) {
            this.minutiChiamata += minutes;
            this.credito -= minutes * this.tariffa;
        } else {
            console.log(`Gentile utente il tuo credito è insufficiente, attualmente hai ${this.credito} €, fai una ricarica.`)
        }
    }
    creditoResiduo(): any {
        let res = this.credito - this.minutiChiamata * this.tariffa;
        console.log(`Il tuo credito è ${res} €.`);
    }
    mostraDurataChiamate(): any {
        console.log(`Il totale dei minuti trascorsi in chiamta sono: ${this.minutiChiamata}`);
    }
    rest(): any {
       return this.credito = 0, this.minutiChiamata =0;
    }
}
let user1 = new Vodafone(0,0,0.2);
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
let btn = document.querySelector(".cres") as HTMLButtonElement;
btn.addEventListener('click', function show() {
    user1.creditoResiduo();
    let h1 = document.querySelector("h2") as HTMLHeadingElement;
    h1.innerText = `Il tuo credito residuo è di ${user1.credito} euro.`
})
