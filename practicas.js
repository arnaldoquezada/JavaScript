// // GIVEN
// {
//     // console.log(example);
//     // var example = "I'm the example!";
// //AFTER HOISTING BY THE INTERPRETER
// // var example;
// // console.log(example); // logs undefined
// // example = "I'm the example!";   
// }
// // 1.- Ejemplo 1
// var example = "I'm the example!";  
// console.log(example);
 

// // 2.- Ejemplo 2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// // 3.-Ejercicio 3 //Output: only okay
// var brendan = 'super cool';
// function print(){
//     let brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(print());

// 4.- Ejercicio 3 // Output: food - error var food no inicializada - half-chicken
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
//1. Chicken
//2.- Half-chicken

//5.- Ejercicio 5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
//1.error

//6.- console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
//1.- rock
//2.-r&b
//3.- disco

//7. Ejercicio 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
//1.- san jose
//2.-seattle
//3.-burbank
//4.- san jose

//8. Ejercicio 8
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
//1.-{ name: 'Chicago', students: 65, hiring: true }
const marcas =['Honda','Subaru','Mazda','Chevrolet'];
const car = {
    name:'Honda',
    model: 'CR-V',
    price: 12000000
}
const price = 2000
const {price:hashgedPrice}=car;

const { model } = car;
const[,,,ultima] = marcas
console.log(ultima);