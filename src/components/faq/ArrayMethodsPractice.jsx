import React from 'react'

// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length);

// // assignment-2
// let countVowelsConsonant = ["a", "b", "c", "d", "e", "i", "o", "u", "r"];
// let vowels = ["a", "e", "i", "o", "u"]; let vowelCount = 0;
// let consonantCount = 0; for (let char of countVowelsConsonant) {
//     if (vowels.includes(char)) { vowelCount++; }
//     else { consonantCount++; }
// }
// console.log("Number of vowels:", vowelCount);
// console.log("Number of consonants:", consonantCount);

// assignment-3
// let age = [22, 42, 45, 12, 13, 67, 70, 80, 30, 9, 23];

// let agesGreaterThan25 = age.filter(a => a > 25);
// let countGreaterThan25 = agesGreaterThan25.length;

// console.log("Ages greater than 25: ", agesGreaterThan25);
// console.log("Count of ages greater than 25: ", countGreaterThan25);

// let greatestAge = Math.max(...age);
// let smallestAge = Math.min(...age);

// console.log("Greatest age: ", greatestAge);
// console.log("Smallest age: ", smallestAge);

// let agesDivisibleBy5 = age.filter(a => a % 5 === 0);
// let countDivisibleBy5 = agesDivisibleBy5.length;

// console.log("Ages divisible by 5: ", agesDivisibleBy5);
// console.log("Count of ages divisible by 5: ", countDivisibleBy5);

// assignment-4
// let description = "Radial code in hisar";
// let wordDescription = description.split(' ').join('_');
// console.log(wordDescription);

// 1
let albums = [
    { artist: 'Frank Zappa', title: 'Apostrophe', year: 1974 },
    { artist: 'Roop Lal', title: 'One Size Fits All', year: 1975 }
];
console.log(albums)

let artistNames = albums.map(album => album.artist);
console.log("Artist Names:", artistNames);
let currentYear = new Date().getFullYear()
let age = albums.map((x) => x.age = currentYear - x.year);
console.log(age)

// 2
let fruits = ["Mango", "Banana", "Graphs", "Apple"];
let animals = ["Tiger", "Dog", "Lion", "Monkey"];
let arrayCombined = fruits.concat(animals);
console.log(arrayCombined);


//4 missing Number
let missingNumber = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 17, 20]
const missingNum = (missingNumber) => {
    const missing = []
    for (let i = 1; i <= 20; i++) {
        if (!missingNumber.includes(i)) {
            missing.push(i);
        }
    }
    return missing;
};
console.log(missingNum(missingNumber))

//5 reverse
let description = "radial code in hisar";
const capitalLetter = (description) => {
    const words = description.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
const reverseString = (str) => {
    return str.split("").reverse().join("");
}
const result = capitalLetter(description);
console.log(result);

const reversedResult = reverseString(result);
console.log(reversedResult);

//Assigment 3 
let add = [5, 6, 7, 3, 4, 6, 6]
let sum = 0
let square = 0
let cube = 0
for (let i = 0; i < add.length; i++) {
    sum += add[i]
}
console.log(sum)
//  square and cube of numbers
const squares = add.map(num => num * num);
const cubes = add.map(num => num * num * num);
console.log("Squares=", squares);
console.log("Cubes=", cubes);
// sum of square and cube
let sumOfSquares = 0;
let sumOfCubes = 0;
for (let i = 0; i < add.length; i++) {
    sumOfSquares += squares[i];
    sumOfCubes += cubes[i];
}
console.log("Sum of all squares:", sumOfSquares);
console.log("Sum of all cubes:", sumOfCubes);

// rondom number
let numberOne = 2
let numberTwo = 10
let randomNum = Math.floor(Math.random() * (numberTwo - numberOne) + numberOne);
console.log(randomNum)

// map
const array10 = [1, 4, 9, 16];
const map1 = array10.map((x) => x * 2);
console.log(map1);

// pop
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
console.log(plants);
plants.pop();
console.log(plants);

// push
const animalsPush = ['pigs', 'goats', 'sheep'];
const count = animalsPush.push('cows');
console.log(count);
console.log(animalsPush);
animalsPush.push('chickens', 'cats', 'dogs');
console.log(animalsPush);

// reduce
const array11 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array11.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);
console.log(sumWithInitial);

// filter method
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1;
}
console.log(array.filter(isPrime))

// 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers)

//
const names = ["johan", "james", "julion "  , "jam"]
const name = names.filter(name => name.length > 4)
console.log(name)

// 
const fruit = ["Apple", "Banana"];
console.log(fruit.length); 
console.log(fruit[0]); 

console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], (x) => x + x));

// at
const array1 = [5, 12, 8, 130, 44];
let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);

// concat
const array2 = ['a', 'b', 'c'];
const array3 = ['d', 'e', 'f'];
const arrayConcat = array2.concat(array3);

console.log(arrayConcat);

const letters = ["a", "b", "c"];
const numbersConcat = [1, 2, 3];

const alphaNumeric = letters.concat(numbersConcat);
console.log(alphaNumeric);

// copyWithin
const array5 = ['a', 'b', 'c', 'd', 'e'];
console.log(array5.copyWithin(0, 3, 4));
console.log(array5.copyWithin(1, 3));

// entries
const array6 = ['a', 'b', 'c'];
const iterator1 = array6.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);

// fill
const array7 = [1, 2, 3, 4];
console.log(array7.fill(0, 2, 4));
console.log(array7.fill(5, 1));
console.log(array7.fill(6));

// find
const array8 = [5, 12, 8, 130, 44];
const found = array8.find((element) => element > 10);
console.log(found);

// findIndex
const array9 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array9.findIndex(isLargeNumber));

// find last elements when condition true

{
    const array1 = [5, 12, 8, 130, 44];
    const found = array1.findLast((element) => element > 10);
    console.log("element greater then from 10 from last is :", found)
}
console.log("")

// find index when condition true
{
    const array1 = [5, 12, 8, 130, 44];
    const isLargeNumber = (element) => element > 13;
    console.log("found index :", array1.findIndex(isLargeNumber));
}
console.log("")

// find last index when condition true
{
    const array1 = [5, 12, 8, 130, 44];
    const isLargeNumber = (element) => element > 13;
    console.log("found last index :", array1.findLastIndex(isLargeNumber));
}
console.log("")

// slice method

{
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    console.log(animals.slice(2));
    console.log(animals.slice(2, 4));
    console.log(animals.slice(1, 5));
}
console.log("")

// every methods

{
    const array = [1, 2, 3, 4, 5];
    const even = (element) => element % 2 === 0;
    console.log("is every element remainder 0 :", array.every(even));
}
console.log("")

// some methods
{
    const array = [1, 2, 3, 4, 5];
    const even = (element) => element % 2 === 0;
    console.log("is some element remainder 0 :", array.some(even));
}
console.log("")

// sort element by alphabetically
{
    const months = ['March', 'Jan', 'Feb', 'Dec'];
    months.sort();
    console.log("sorting by alphabetically :", months);
}
console.log("")

// element seprated by comma and return a single string
{
    const array1 = [1, 'a', "ritu", "seema"];
    const localeString = array1.toLocaleString();
    console.log("single string is :", localeString);
}
console.log("")

// element reverse order
{
    const array = ["k", "a", "p", "e", "e", "d"]
    console.log("reversed array and convert localeString :", array.toReversed().toLocaleString())
}
console.log("")

// splice method
{
    const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb', "july", "august");
    console.log("add items from index 1 :", months);
}
console.log("")

// replace the element
{
    const arr = [1, 2, 3, 4, 5];
    console.log("replaced value of array :", arr.with(2, 6));
}
console.log("")

// array from
{
    console.log(Array.from('foo'));
    console.log(Array.from([1, 2, 3], (x) => x + x));
}
console.log("")

// array is
{
    console.log(Array.isArray([1, 3, 5]));
    console.log(Array.isArray('[]'));
    console.log(Array.isArray(new Array(5)));
    console.log(Array.isArray(new Int16Array([15, 33])));
}
console.log("")

// array of
{
    console.log(Array.of('foo', 2, 'bar', true));
    console.log(Array.of());
}
console.log("")


// copywithin
{
    const array1 = ['a', 'b', 'c', 'd', 'e'];
    console.log(array1.copyWithin(0, 3, 4));
    console.log(array1.copyWithin(1, 3));
}
console.log("")

// enteries
{
    const array1 = ['a', 'b', 'c'];
    const iterator1 = array1.entries();
    console.log(iterator1.next().value);
}
console.log("")

// flat 
{
    const arr1 = [0, 1, 2, [3, 4]];
    console.log(arr1.flat());
    const arr2 = [0, 1, [2, [3, [4, 5]]]];
    console.log(arr2.flat(2));
}
console.log("")

// flat map
{
    const arr1 = [1, 2, 1];
    const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));
    console.log(result);
}
console.log("")

// join
{
    const elements = ['name', 'surname', 'email'];
    console.log("joined element :", elements.join());
}
console.log("")

// keys
{
    const array1 = ['a', 'b', 'c'];
    const iterator = array1.keys();
    for (const key of iterator) {
        console.log(key);
    }
}
console.log("")

// reduce 
{
    const array1 = [1, 2, 3, 4];
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );

    console.log(sumWithInitial);
}
console.log("")

// reduce right
{
    const array1 = [
        [0, 1],
        [2, 3],
        [4, 5],
    ];
    const result = array1.reduceRight((accumulator, currentValue) =>
        accumulator.concat(currentValue),
    );

    console.log(result);
}
console.log("")

// shift
{
    const array1 = [1, 2, 3, 4, 6,];
    const firstElement = array1.shift();
    console.log(array1);
    console.log("remove first element :", firstElement);
}
console.log("")

// unshift
{
    const array1 = [1, 2, 3, 4, 6,];
    const firstElement = array1.unshift(7);
    console.log(array1);
}
console.log("")

// tostring
{
    const array1 = [1, 2, 'a', '1a'];
    console.log("converted into string :", array1.toString());
}
console.log("")

// values
{
    const array1 = ['a', 'b', 'c'];
    const iterator = array1.values();
    for (const value of iterator) {
        console.log(value);
    }
}
console.log("")

// symbol.iterator
{
    const array1 = ['a', 'b', 'c'];
    const iterator1 = array1[Symbol.iterator]();
    for (const value of iterator1) {
        console.log(value);
    }
}


const ArrayMethodsPractice = () => {
  return (
    <div>ArrayMethodsPractice</div>
  )
}

export default ArrayMethodsPractice