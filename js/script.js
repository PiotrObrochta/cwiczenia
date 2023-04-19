// ćwiczenie 1.
const array1 = [2, 5];
const array2 = [3, 7];

const mergeArrays = [
    ...array1,
    ...array2,
];

console.log(mergeArrays);

// ---------------------------------------------------

// ćwiczenie 6.

const numbers = [2, 4, 7, 8];

const oddIndex = numbers.findIndex(number => number % 2 !== 0);

console.log(oddIndex);

// -----------------------------------------------------

// ćwiczenie 7

const fruits = ["banan", "marakuja"];
const hasStrawberry = (fruits) => fruits.includes("truskawka");
console.log(hasStrawberry(fruits));