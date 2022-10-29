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
    reset(): any {
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
// user1.reset();
// user1.ricarica(10);
// user1.calling(22);
// console.log(user1)
let btnCredito = document.querySelector(".cres") as HTMLButtonElement;
btnCredito.addEventListener('click', function showCr() {
    let display = document.querySelector("h2") as HTMLHeadingElement;
    display.innerText = `Il tuo credito residuo è di ${user1.credito} euro.`
})
let btnRic5 = document.querySelector(".ric5") as HTMLButtonElement;
btnRic5.addEventListener('click', function ric5euro(){
    user1.ricarica(5);
    let display = document.querySelector("h2") as HTMLHeadingElement;
    display.innerText = `La tua ricarica è stata effetuata, il credito totale è di ${user1.credito} euro.`
})

let btnRic10 = document.querySelector(".ric10") as HTMLButtonElement;
btnRic10.addEventListener('click', function ric10euro(){
    user1.ricarica(10);
    let display = document.querySelector("h2") as HTMLHeadingElement;
    display.innerText = `La tua ricarica è stata effetuata, il credito totale è di ${user1.credito} euro.`
})
let btnRic20 = document.querySelector(".ric20") as HTMLButtonElement;
btnRic20.addEventListener('click', function ric20euro(){
    user1.ricarica(20);
    let display = document.querySelector("h2") as HTMLHeadingElement;
    display.innerText = `La tua ricarica è stata effetuata, il credito totale è di ${user1.credito} euro.`
})
let tarif = document.querySelector(".tarif") as HTMLButtonElement;
tarif.addEventListener('click', function tarif(){
    let display = document.querySelector("h2") as HTMLHeadingElement;
    display.innerText = `La tua tariffa attuale è di ${user1.tariffa} centesimi al minuto.`
})

