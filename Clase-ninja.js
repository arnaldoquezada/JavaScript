class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 0;
    this.speed = 3;
    this.strong = 3;
  }
  sayName(name) {
    this.name = name;
    console.log(`Registrando nombre del ninja...Es: ${this.name}`);
  }
  showStats() {
      console.log("-----------NINJA CARD--------------")
      console.log(`Nombre: ${this.name}`);
      console.log(`Su fuerza es: ${this.strong}`);
      console.log(`Su Velocidad es: ${this.speed}`);
      console.log(`Su Salud es: ${this.health}`);
      console.log("----------------------------------")

  }
  drinkSafe(addHealth){
      this.health +=addHealth;
      console.log("Se agrego 10 puntos de salud, quedando con: "+this.health + " Puntos");
  }
}
const ninja1 = new Ninja()//Constructor para inicializar el Ninja 1

ninja1.sayName("Arnaldo");
ninja1.showStats();
ninja1.drinkSafe(10);
