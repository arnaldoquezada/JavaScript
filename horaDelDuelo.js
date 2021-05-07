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
    constructor(name, cost, text, stat, mag){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }
    seeCard(){
        console.log("--------------------CARTA EFECTO------------------------");
        console.log(`Nombre: ${this.name}, Costo: ${this.cost}`);
        console.log(`Texto: ${this.text}, Stat: ${this.stat}, Magnitud: ${this.mag} `);
        console.log("---------------------------------------------------");
    }      
}
//Creamos las cartas
//Cartas de Unidad:
const ninjaCintaRoja = new UnitCard("Ninja Cinturón Rojo",3,3,4);
const ninjaCintaNegra = new UnitCard("Ninja Cinturón Negro",3,5,4);
//Cartas de Efectos
const efecto1 = new EffectCard("Algoritmo Difícil",2,"Aumenta la resistencia del objetivo en 3","Resistencia",3);
const efecto2 = new EffectCard("Rechazo de promesa no manejado",1,"Reduce la resistencia del objetivo en 2","Resistencia",-2);
const efecto3 = new EffectCard("Algoritmo Difícil",2,"Aumenta el poder del objetivo en 2","Poder",+2);

// ninja1.seeCard();
// ninja2.seeCard();
// efecto1.seeCard();
// efecto2.seeCard();
// efecto3.seeCard();

//Turno 1: El Jugador 1 convoca a Ninja Cinturon Rojo

