//Problema 1: Output: Testa ->Mercedes
//Problema 2: Output: Elon ->Elon
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(employee['name']);
// console.log(otherName);

//Problema 3: OutPut: 12345
{
  const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
    let password = '';
    person.password = '12345';
    const { password: hashedPassword } = person;  
    //Predict the output
    console.log(password);
    console.log(`Resultado: ${hashedPassword}`);  
}

////Problema 4: OutPut:false ->true
console.log("Problema 4:")
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;//2
const [,,,second] = numbers;//5
const [,,,,,,,,third] = numbers;//2
//Predict the output
console.log(first == second);//2 == 5 =>False
console.log(first == third);//2==2 =true


////Problema 5: OutPut: value->[1, 5, 1, 8, 3, 3]-> 1 ->5
console.log("Problema 5:")
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

const flecha = (num)=>num*num;

console.log(flecha(4));