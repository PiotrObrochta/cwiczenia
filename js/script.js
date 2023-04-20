// ćwiczenie 1.
const array1 = [2, 5];
const array2 = [3, 7];

const mergeArrays = [
    ...array1,
    ...array2,
];

console.log(mergeArrays);
// ---------------------------------------------------

// ćwiczenie 2

const names = [2, "delfin", null];
const exceptFirst = (names) => names.slice(1);

console.log(exceptFirst(names));
// ---------------------------------------------------

// ćwiczenie 3

const parameters = [1, 3, undefined, true];

const last2Parameters = (parameters) => parameters.slice(2)
console.log(last2Parameters(parameters))

// ---------------------------------------------------

// ćwiczenie 4.

const kawa = ["rum", "kawa", "sangria"];
const indexOf = () => kawa.indexOf("kawa")
console.log(indexOf(kawa));

// --------------------------------------------------------

// ćwiczenie 6.

const numbers = [2, 4, 7, 8];

const oddIndex = numbers.findIndex(number => number % 2 !== 0);

console.log(oddIndex);

// -----------------------------------------------------

// ćwiczenie 7

const fruits = ["banan", "marakuja"];
const hasStrawberry = (fruits) => fruits.includes("truskawka");
console.log(hasStrawberry(fruits));