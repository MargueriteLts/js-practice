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


let myGlobal = 10;

function f1() {
  oopsGlobal = 5; //apparement, vu qu'on a pas mis var (ou let) devant la variable, ca en fait une variable globale dans le projet et on peut la reutiliser
}

function f2 () {
   let output = '';
   if (myGlobal != 'undefined') {
     output += 'My global is ' + myGlobal;
   }
   if (oopsGlobal != 'undefined') {
     output += 'OopsGlobal is: ' + oopsGlobal;
   }
   console.log(output);
 }

f1();
f2();

let outwear = 'sweater';
function outfit() {
  let outwear = 'tshirt';
  return outwear;
}
console.log(outwear);
console.log(outfit());

function plusthree(num) {
  return num + 3;
}
console.log(plusthree(7));

let result = 0;
function operation(num) {
  return num + 5;
}
result = operation(5);
console.log(result)

function next(arr, item) {
  arr.push(item);
  return arr.shift();
}
let myArrayy = [1,2,3,4,5];
console.log(next(myArrayy, 6));
console.log(JSON.stringify(myArrayy));

function trueOrFalse(write) {
  if (write) {
    return 'Yes, true';
  }
  return 'No, false';
}
console.log(trueOrFalse(true));

function testEqual(val) {
  if (val == 12) {
    return 'Equal';
  }
  return 'Not Equal';
}
console.log(testEqual(13));

// 3 == 3 et 3 == '3' compare les valeurs et ca sera egal (string devient number)
// mais 3 === '3' va comparer les types, et donc ca ne sera pas egal
// de meme pour !==

function comparison(val) {
  if (val <= 20 && val >= 10) { //&& = and
    return 'Ok';
  }
  return 'Not Ok';
}
console.log(comparison(15));

function position(val) {
  if (val < 10 || val > 20) { //   || = OR !!!!
    return 'Outside';
  }
  return 'Inside';
}
console.log(position(15));


// si c'est possible d'utiliser plusieurs if, pourquoi utiliser else if et else...???

//comme dans python, l'ORDRE est IMPORTANT -> on commence par la "plus petite comparaison"

let names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Train More!:p'];

function golf(par, strokes) {
  if (strokes == 1) {
    return names[0]
  } else if (strokes <= par - 2) {
    return names[1]
  } else if (strokes == par - 1) {
    return names[2]
  } else if (strokes == par) {
    return names[3]
  } else if (strokes == par + 1) {
    return names[4]
  } else if (strokes == par + 2) {
    return names[5]
  } else if (strokes >= par + 3) {
    return names[6]
  } else
    return names[7]
}
console.log(golf(3, 8));
