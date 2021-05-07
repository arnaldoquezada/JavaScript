import { extend } from "expect";

//clases NO son levantadas. Pase lo que pase, la palabra clave de clase permanecerá donde se escribió y no se moverá durante la interpretación.
class Vehicle {
  constructor(manufacturer, model, color) {
    this.miles = 0;
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
  }
  //Metodo drive que asigna 10 a atributo miles de Vehiculo
  drive() {
    this.miles += 10;
    console.log(`you drive your ${ this.model } and it now has ${ this.miles} miles on it.`)
  }
  parentFunction(){
      return "This is coming from the parent";
  }
}
// Usando el constructor e instanciando la clase Vehiculo
const car = new Vehicle("BMW", "M5", "blue"); 
car.drive(); // Llamamos al metodo drive 
console.log(car.miles);

//Clase M5 hijo
class M5 extends Vehicle {
    constructor(color){
        super("BMW", "M5", color)
    }
    //funcion simple de la clase hijo
    childFunction(){
        //usando super, podemos llamar e metodo padre
        const message = super.parentFunction();
        console.log(message);
    }
    printSpecSummry(){
        console.log(`BMW M5 with a 4.4L V8 Twin Turbo engine packin ${this.hp} HP and 553 lb-ft TQ` 
        );
    }
}
const m5 = new M5("Blue");
m5.childFunction(); 