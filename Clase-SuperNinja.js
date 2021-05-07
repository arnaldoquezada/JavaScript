class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 0;
    this.speed = 0;
    this.strong = 0;
  }
  sayName(name) {
    this.name = name;
    console.log(`Registrando nombre del ninja...Es: ${this.name}`);
  }
  showStats() {
      console.log("-----------NINJA CARD--------------")
      console.log(`Nombre: ${this.name}`);
      console.log(`Fuerza: ${this.strong}`);
      console.log(`Velocidad: ${this.speed}`);
      console.log(`Salud: ${this.health}`);
      console.log("----------------------------------")

  }
  drinkSafe(){
      this.health +=10;
      console.log("Se agrego 10 puntos de salud, quedando con: "+this.health + " Puntos");
  }
}
const ninja1 = new Ninja()//Constructor para inicializar el Ninja 1

// ninja1.sayName("Arnaldo");
// ninja1.showStats();
// ninja1.drinkSafe(10);

class Sensei extends Ninja{
  constructor(name){   
      super(name)
      super.health = 200;
      super.speed = 10;
      super.strong = 10;
      this.sabiduria = 10;
       
      
  }
  speakWisdow(){
    super.drinkSafe();
    console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
  }
  showStats(){
    const message = super.showStats()
    console.log(message);
  }
}
const superSensei = new Sensei("Master Sprinter")
// superSensei.drinkSafe(500);
superSensei.speakWisdow();
