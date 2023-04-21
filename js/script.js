// ćwiczenie 1.
const array1 = [2, 5]
const array2 = [3, 7]

const mergeArray = (array1, array2) => [array1, array2];

console.log(mergeArray(array1, array2));

// ------------------------------------------------------------------

// ćwiczenie 2.

const names = [2, "delfin", null];

const exceptFirst = (names) => names.slice(1);

console.log(exceptFirst(names));

// ------------------------------------------------------------------

// ćwiczenie 3.

const parameters = [1, 3, undefined, true];

const last2Parameters = (parameters) => parameters.slice(2);

console.log(last2Parameters(parameters));

// ------------------------------------------------------------------

// ćwiczenie 4.


const drinks = ["rum", "kawa", "sangria"];

const indexOf = (drink, drinks) => drinks.indexOf(drink);

console.log(indexOf("kawa", drinks));

// ------------------------------------------------------------------

// ćwiczenie 5.

const tasks = [
    { content: "" },
    { content: "kupić balony w kształcie psów" },
]

const findNonEmptyTask = (tasks) => tasks.find(({ content }) => content !== "");

console.log(findNonEmptyTask(tasks));

// ------------------------------------------------------------------

// ćwiczenie 6.

const numbers = [2, 4, 7, 8];

const oddIndex = numbers.findIndex(number => number % 2 !== 0);

console.log(oddIndex);

// ------------------------------------------------------------------

// ćwiczenie 7.

const fruits = ["banan", "marakuja"];

const hasStrawberry = (fruits) => fruits.includes("truskawka");

console.log(hasStrawberry(fruits));


// ------------------------------------------------------------------

// ćwiczenie 8.

const people = ([
    { name: "Melodia", age: 15 },
    { name: "Kosmo", age: 18 },
]);

const someAdult = (people) => people.some(({ age }) => age >= 18);

console.log(someAdult(people));

// ------------------------------------------------------------------

// ćwiczenie 9.

const strings1 = ["", "Żelazko", 45];
const strings2 = ["", "Żelazko"];

const onlyString1 = (strings1) => strings1.every((string) => typeof string === "string");

console.log(onlyString1(strings1));

const onlyString2 = (strings2) => strings2.every((string) => typeof string === "string");

console.log(onlyString2(strings2));

// ------------------------------------------------------------------

// ćwiczenie 10.

const carBrands = ["Peugeot", "BMW", "Audi"];
const premiumBrands = ["BMW", "Audi"];


const filterPremium = (carBrands) => carBrands.filter((premium) => premiumBrands.includes(premium));

console.log(filterPremium(carBrands));

// ------------------------------------------------------------------

// ćwiczenie 11.

const cars = [
    { car: "BMW X5", color: "black" },
    { car: "Peugeot 3008", color: "white" },
];

const getColor = (cars) => cars.map(car => car.color);

console.log(getColor(cars));

// ------------------------------------------------------------------

// ćwiczenie 12.

const peoples = [
    { name: "Kacper", age: 28 },
    { name: "Paweł", age: 25 },
];

const sortPeople = (peoples) => peoples.sort((a,b) => a.age - b.age);
console.log(sortPeople(peoples));





