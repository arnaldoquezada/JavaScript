class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}
class UnitCard extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
        
    }
    seeCard(){
        console.log("--------------------CARTA UNIDAD-------------------------");
        console.log(`Nombre: ${this.name}, Costo: ${this.cost}`);
        console.log (`Poder: ${this.power}, Resistencia: ${this.res}`);
        console.log("---------------------------------------------------");
    }    
    
}
class EffectCard extends UnitCard {
    constructor(name, cost){
        super(name, cost);       
    }
    seeCard(){
        console.log("--------------------CARTA EFECTO------------------------");
        console.log(`Nombre: ${this.name}, Costo: ${this.cost}`);
        console.log("---------------------------------------------------");
    }
    playAlgoritmoDificil(card){
        if(card instanceof UnitCard){
            card.res+=3;
            console.log("Se jugo: Algoritmo Difícil - aumentar la resistencia del objetivo en 3");
            console.log(`Carta ${card.name} aumenta resistencia en +3, quedando con ${card.res}`);

        }else {
            throw new Error("Objetivo debe ser una carta Unidad!!!");
        }
    }
    playRechazoPromesa(card) {
        if(card instanceof UnitCard){
            card.res-=2;
            console.log("Se jugo: Rechazo de promesa - reduce la resistencia del objetivo en -2");
            console.log("Carta"+card.name + "reduce la resistencia del objetivo en -2" + card.res);
    
        }else {
            console.log("Objetivo debe ser una carta Unidad!!!");
        }  
    }
    playPromocionEnPareja(card) {
        if(card instanceof UnitCard){
            card.power+=2;
            console.log("Se jugo: Programación en pareja - aumentar el poder del objetivo en 2");
            console.log("Carta "+card.name + " aumenta el poder del objetivo en 2, quedando con " + card.power);
    
        }else {
            console.log("Objetivo debe ser una carta Unidad!!!");
        }  
    }
}
const attack = (Atacante, Atacado)=>{
    if(Atacante && Atacado instanceof UnitCard){
        Atacado.res = Atacante.res-Atacante.power;
        console.log(`Ataque de ${Atacante.name}, hacia ${Atacado.name}, Resistencia de Atacado quedo en: ${Atacado.res}`);
    }else {
        console.log("Objetivo debe ser una carta Unidad!!!");
    }  
}


console.log("TURNO 1 INICIO")
const ninjaCintaRoja = new UnitCard("Ninja Cinturón Rojo",3,3,4);
const Cartaefecto = new EffectCard("Algoritmo Difícil",2);
Cartaefecto.playAlgoritmoDificil(ninjaCintaRoja);
const Cartaefecto2 = new EffectCard("Rechazo de promesa no manejado",1);
console.log("TURNO 1 FIN")

console.log("TURNO 2 INICIO")
const ninjaCintaNegra = new UnitCard("Ninja Cinturón Negro",3,5,4);
Cartaefecto2.playRechazoPromesa(ninjaCintaNegra)
console.log("TURNO 2 FIN")

console.log("TURNO 3 INICIO")
const efecto3 = new EffectCard("Algoritmo Difícil",2);
efecto3.playPromocionEnPareja(ninjaCintaNegra);
attack(ninjaCintaRoja, ninjaCintaNegra)
console.log("TURNO 3 FIN")

