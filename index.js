//let firstName = 'Marg';
// let lastName = 'Ls';
// console.log(name);

// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);
//
// const interestRateTwo = 0.3;
// console.log(interestRateTwo);

let name = 'Marg';
let age = 222;
let isApproved = false;
let firstName = undefined;//puisqu'on a attribue la valeur undefined, la var est de type undefined
let lastNanme = null;//type object

let person = {
  name: 'Marg',
  age: 222
};

person.name = 'New';

let selection = 'New';
person[selection] = 'New';

let selectedColors = ['red', 'green'];
selectedColors[2] = 1;
console.log(selectedColors)

function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}

greet('People', 'of the world');
greet('You', 'bad bitch');

function square(number) {
  return number * number;
}

//let number = square(2);
//console.log(number);

console.log(square(2));
