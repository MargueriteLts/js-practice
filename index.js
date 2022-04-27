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

function switchCase(val) {
  let answer= ''; //default if nothing from the cases is passed
  switch(val) {
    case 1: //ici: si val === 1
      answer = 'alpha';
      break;
    case 2:
      answer = 'beta';
      break;
    case 3:
      answer = 'gama';
      break;
    default: //??? a quoi sert le default si on peut mettre un msg au debut ???
      answer = 'other';
      break;
  }
  return answer;
}
console.log(switchCase(3));

function switchCase2(val) {
  let answer = '';
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = 'first';
      break;
    case 4:
    case 5:
    case 6:
      answer = 'second';
      break;
  }
  return answer;
}
console.log(switchCase2(4));

function isLess(a, b) {
  return a < b; //pas besoin d'utiliser if else etc pour avoir une reponse true or false car tous les comparison operators return a boolean true or false answer !
}

let count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  let holdbet = 'hold'
  if (count > 0) {
    holdbet = 'bet';
  }
  return count + ' ' + holdbet;
}
cc(2); cc('K'); cc(10); cc('A'); //Je comprends pas commment tout ca est pris en compte dans la console.log final....???
console.log(cc(4));

let myDog = { //OBJECT
  'name': 'Bob',
  'Legs': 6,
  'friends': ['Everything!'], // proprety is an array
  'the tail': 1
};
let nameVal = myDog.name;
let tailVal = myDog['the tail'];//brackets if the proprety has a space in it

let testObj = {
  16 : 'Montana',
  19 : 'Unitas'
};
let playerNumber = 16;
let player = testObj[playerNumber]; //player = Montana
console.log(player);
//testObj.29 = 'Team'; Not possible to add a property as number with dot notation

function phineticLookup(val) {
  let result = '';
  let lookup = {
    'alpha': 'Adams',
    'bravo': 'Boston'
  };
  result = lookup[val];
  return result;
}

let myObj = {
  gift: 'pony', //pourquoi la on a pas mis de guillemets pour la property...????
  pet: 'kitter'
};
function checkObj(prop) {
  if (myObj.hasOwnProperty(prop)) {
    return myObj[prop]
  } else {
    return 'Not Found'
  }
}
console.log(checkObj('smthg'));

//on peut mettre des obj {:}; dans un array var = [];
//on peut avoir des nested objects

let myStorage = {
  'car': {
    'inside': {
      'glove box': 'maps',
      'box': 'gloves'
    }, //!!!attention a ne pas oublier virgule
      'outside': {
      'trunk': 'jack'
    }
  }
};
let gloveBoxContent = myStorage.car.inside['glove box'];
console.log(gloveBoxContent);

let myPlants = [
  {
    type: 'flowers',
    list: [
      'rose',
      'tulip',
      'dandelion'
    ]
  },
  {
    type: 'trees',
    list: [
      'fir',
      'pine',
      'birch'
    ]
  }
];
console.log(myPlants[1].list[1]);

let collection = {
  '1': {
    'album': 'nameofthealbum1',
    'artist': 'nameofartist1',
    'tracks': [
      'track1',
      'track2'
    ]
  },
  '2': {
    'album': 'nameofthealbum2',
    'artist': 'nameofartist2'
  }
};
function updateCollection(id, prop, value) {
  if (value === '') {
    delete collection[id][prop];
  } else if (prop === 'tracks') {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}
updateCollection(2, 'tracks', 'track1');
console.log(updateCollection(1, 'tracks', 'track3'));

let myArrayyy = [];
let i = 0;
while(i < 5) {
  myArrayyy.push(i);
  i++;
}
console.log(myArrayyy);

let thisArray = [];
for (let i = 5; i < 11; i++) {
  thisArray.push(i);
}
console.log(thisArray);

let myArr = [2, 3, 4, 5, 6];
let total = 0
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);

function multiplyAll(arr) {
  product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
console.log(multiplyAll([[1,2], [3,4], [5,6]]));

let thisArrayy = [];
let z = 10;
do {
  thisArrayy.push(z);
  z++;
} while (z < 5) //Le loop se produit au moins une fois car le while est apres
console.log(i, thisArrayy);

let contacts = [
  {
    firstName: 'Akira', //??? je comprends pas si pour le nom des property il faut des guilemets ou passsss
    lastName: 'Laine'
  },
  {
    firstName: 'Luffy',
    lastName: 'Monkey D.'
  },
  {
    firstName: 'Harry',
    lastName: 'Potter'
  }
];
function lookUpProfil(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (name === contacts[i].firstName) {
      return contacts[i][prop] || 'There is no such property :('
    }
  }
  return 'There is no such name :('
}
console.log(lookUpProfil('Akira', 'hello'));

//random rounded number (bc just math.random donne un chiffre entre 0 et 1 non-compris et math.floor round ce number)
function randomWholeNb() {
  return Math.floor(Math.random() * 10);//on va avoir un chiffre entre 0 et 9 compris
}
console.log(randomWholeNb());

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; //I understand the equation but I couldnt have thought about it myself....
}
console.log(randomRange(5, 15)); //??? il m'affiche 15 parfois, c'est normal...??

function convertToInteger(str) {
  //return parseInt(str);//transforme la string en numb
  return parseInt(str, 2)//parce que en base 2
}
//convertToInteger('56');
convertToInteger('101100');

function checkEqual(a, b) {
  return a === b ? true : false; //eventhough pour un tel resultat on peut juste ecrire: return a === b; et on aura true or false
}
checkEqual(1, 2);

function checkSign(num) {
  return num > 0 ? 'positiv' : num < 0 ? 'negativ' : 'zero'
}
console.log(checkSign(10));

//ecrire 'use strict'; en haut du code ou de la fonction pour catcher des erreurs

function checkScope() {
  "use struct";
  let i = 'function scope'; //si on avait mis var a la place de let, la variable aurait eu le nom block scope partout
  if (true) {
    let i = 'block scope';//si let etait ecris que la, le deuxieme console.log n'aurait pas marche
    console.log('Block scope i is: ', i);
  }
  console.log('function scope i is: ', i);
  return i;
}
checkScope();

//variable with const keyword cannot be reassigned
//pour differencier ce type de variable, on l'ecrit en CAPITALES

const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  //s = [2, 5, 7]; -> pas possible de changer directement le contenu de l'array, mais on peut changer ses elements un par un:
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
console.log(s);

//if we dont want an object to move/change: use Object.freeze(name_of_objectvariable);

//Anonymuos function
var magic = function() {
  return new Date();
};
//We can write it in shorter way:
var magic = () => {
  return new Date(); //as we return only one value here, we can write it even shorter:
};
var magic = () => new Date();

let myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [2, 4]));

let increment = (function() {
  return function increment(number, value = 1) {
    return number + value;
  };
})(); // ??? je comprends pas bien la syntaxe ici :(((
console.log(increment(5, 2));
console.log(increment(5));

const summ = (function() {
  //return function sum(x, y, z) { // a la place de cette ligne on ecrit ...args dans sum:
  return function summ(...args) {
    //const args = [x, y, z];
    return args.reduce((a, b) => a +b, 0);
  };
}) ();
console.log(summ(1, 2, 3, 4));// avec les modifs qu'on a faites, on peut passer autant de valeur dans summ et ils seront mis dans l'array args

let arr1 = ['jan', 'feb', 'mar'];
let arr2;
(function() {
  //arr2 = arr1; //this is making our two arrays equal, but if we just want arr2 to equal arr1 and stay like that even if we change arr2:
  arr2 = [...arr1]; //-> we are making a copy of the content of arr1 into arr2
  arr1[0] = 'potato'
})();
console.log(arr2);
console.log(arr1);

//DESTRUCTURING assign element of element to own variable
let localForecast = {
  today: { min:72, max:83},
  tomorrow: { min:73, max:84}
};
function getMaxOfTomorrow(forecast) {
  'use strict';
  let { tomorrow : { max : maxOfTomorrow}} = forecast;
  return maxOfTomorrow;
}
console.log(getMaxOfTomorrow(localForecast));

let [y, x] = [1, 2, 3, 4];
console.log(y, x);
let [k, l, , m] = [1, 2, 3, 4]; //virgule vide pour choisir quel element on assign a la variable
console.log(k, l, m);
