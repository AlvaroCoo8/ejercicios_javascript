const text1 = "Welcome to the aplication!";
const text2 = "This is an informational message.";
const text3 = "This is a warning. Be cautius.";
const text4 = "Error! Something went wrog.";

console.log("%c" + text1, "font-size: 18px; font-weight: bold");
console.log("%c" + text2, "font-size: 16px");
console.warn("%c" + text3, "font-size: 16px");
console.error("%c" + text4, "font-size: 16px");

let name1 = "John";
let age1 = 30;
let city1 = "New York";

let person1 = [name1, age1, city1];

let name2 = "Jane";
let age2 = 25;
let city2 = "San Francisco";

let person2 = [name2, age2, city2];

let name3 = "Bob";
let age3 = 40;
let city3 = "Chicago";

let person3 = [name3, age3, city3];

let table = [person1, person2, person3];

console.table(table);
