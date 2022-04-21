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

let myVar = 55;
myVar = myVar + 1; //C'est la meme chose que ecrire:
myVar++; //increment of 1
myVar--; //decrement of 1

let a = 3;
a = a + 12; //c'est la meme chose que:
a += 12;
a = a - 2; //De meme:
a -= 2;
a = a * 5; //De meme:
a *= 5;
a = a / 2; //De meme:
a /= 2;

let txt = 'this is a "quote" inside a quote'
let txxt = "this is a \"quote\" inside a quote" //le backslash permet d'utiliser les memes quote pour la meme string

let txxxt = "First\n\t\Second\nThird"
console.log(txxxt)

let str = "I am First. ";
str += "I am Second. ";
let strr = "I am third."
str += strr;
console.log(str) //s'affiche sur une seule ligne

name = "Name";
let lastLetterOfName = name[name.length - 1];
console.log(lastLetterOfName) //juste -1 ca marche pas

function worldBlanks(myNoun, myAdjectiv, myVerb, myAdverbe) {
  let result = '';
  result += 'The ' + myAdjectiv + ' ' + myNoun + ' ' + myVerb + ' ' + myAdverbe;
  return result;
}

console.log(worldBlanks('dog', 'big', 'ran', 'quickly'));


let myArray = ['one', 'two'];
myArray.push('three');
myArray.push(['fourone', 'fourtwo'])
console.log(myArray);

let newArray = ['one', 'two'];
let removedItem = newArray.pop();
console.log(removedItem);
removedItem = newArray.shift();
console.log(removedItem);
newArray.unshift('ONE');
newArray.push('TWO');
console.log(newArray);

function simple() {
  console.log('Yo.');
}
simple();

function sum(a, b) {
  console.log(a + b);
}
sum(10, 22);
