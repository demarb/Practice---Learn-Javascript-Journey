// Console

console.log('Hello World');
console.error('This is an error!');
console.warn('This is a warning');

// Declaring Variables : var (not really used because of global scope)
// Preferred: let (can vary) and const (can't vary)
// Use const unless you plan to reassign 

let num = 30;
console.log(num);

const num1 = 31;
// num1 = 32; //Uncaught Type Error
console.log(num1);

// Data Types : 1.Primitive Datatypes; string, numbers, boolean, null, undefined
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined; //let y would also be undefined

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x); //returns object; bogus, its wrong
console.log(typeof y);

//Strings
//using name and 

//older concatenation
console.log("My name is "+ name + " and I am " + age);
//newer concatenation (use backticks `` and $ curly braces ${} ) : template strings or template literals
const hello = console.log(`My name is ${name} and I am ${age}`);
console.log(hello);

//Strings properties and methods
//Properties dont have parenthesis, whilst methods do

const s = "Hello World";
const s1 = 'technology, computers, it, code'

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.split(''));
console.log(s1.split(', '));

/*
Arrays - variables that hold multiple values
1. Array constructor
2. Square brackers
 */

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true]
console.log(fruits);
console.log(fruits[1]);

fruits[5] = 'grapes';
console.log(fruits);
fruits.push('mangoes'); // Add to end of array
console.log(fruits);
fruits.unshift('strawberries'); //Add t to beginning of array
console.log(fruits);
fruits.pop();// remove last item from array
console.log(fruits);
console.log(Array.isArray(fruits)); //check if variable is an array
console.log(fruits.indexOf('oranges'));//Find index of array item

//Object literals : key value pairs

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: { //object within object
        street: '50 main street',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);

//Destructuring: We can also pull variables out of objects making them stand alone variables
const { firstName, lastName, address: { city } } = person;
console.log(firstName)
console.log(city);

//We can also ad new properties to obejects
person.email = 'john@gmail.com';
console.log(person);

//Arrays of Objects
const todos = [
    {
        id:1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id:2,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id:3,
        text: "Dentist appointment",
        isCompleted: false
    }

];

console.log(todos);
console.log(todos[1].text);

//Convert Array of Objects to JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


//For Loop
for(let i = 0; i<=10; i++) {
    console.log(`For LoopNumber: ${i}`);
}

//While Loop
let i=0;
while(i<10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

//Looping through arrays
for(let i = 0; i<=todos.length; i++) {
    console.log(todos[i]);
} //Not the prefferred way in JS

//Looping through arrays - for of
for(let todo of  todos){
    console.log(todo.text);
}

//Looping through arrays - High order array methods (suggested array iteration)
    //forEach - just loops
    //map - allow us to create new array from an array
    //filter - allow us to create a new array based on a condition

todos.forEach(function(todo) {
    //parameters of function()- 1st: the variable for each item in array
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    //parameters of function()- 1st: the variable for each item in array
    return todo.text;
});
console.log(todoText); //A new array with array items todo.text.

const todoCompleted = todos.filter(function(todo) {
    //parameters of function()- 1st: the variable for each item in array
    return todo.isCompleted===true;
});
console.log(todoCompleted); //A new array where arrayitems objects from our original Array is added where isCompleted is true.


//We can also therefore chain other high order array methods to others
///Below we return the todos filtered by isCompleted but only their text rather than the entire object
const todoCompletedText = todos.filter(function(todo) {
    //parameters of function()- 1st: the variable for each item in array
    return todo.isCompleted===true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompletedText);

// Conditionals: if, ternarym switch
const a = 4;
const b  = 10;

//Double equals ignore the data type
if (b==10){
    console.log('x is 10');
}else{
    console.log('x is NOT 10');
}

if (b=='10'){
    console.log('x is 10');
}else{
    console.log('x is NOT 10');
}

// Triple equals look out for data type
if (b===10){
    console.log('x is 10');
}else{
    console.log('x is NOT 10');
}

if (b==='10'){
    console.log('x is 10');
}else{
    console.log('x is NOT 10');
}

if (a===10){
    console.log('a is 10');
}else if (a>10){
    console.log('a is greater than 10');
}else{
    console.log('a is less than 10');
}

//Multiple conditionals
if (a>5 || b>8){
    console.log('a is more than 5 or y is more than 8');
}

//Ternary operator - shorthand if statement
const c = 10;
const color = x > 10 ? 'red' : 'blue';
//          if x>10,color=red, else color =blue
console.log(color);

//Switch statement
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red NOR blue');
        break;
}

// -------------------MORE ADVANCED BEGINNER TOPICS COVERED

//Functions
    //We can set default values for parameters which can be overwritten with passed values
function addNums(num1=1, num2=2){
    return num1 + num2;
}

console.log(addNums()); //3
console.log(addNums(5,4)); //9

//We can also do arrow functions introduced in ES6/ES2015
// const addTwoNums = (num1=1, num2=2) =>{
//     return num1 + num2;
// } 
//We could rewrite as one line because the function only does few things

const addTwoNums = (num1=1, num2=2) => num1 + num2;

console.log(addTwoNums()); //3
console.log(addTwoNums(5,4)); //9
console.log(typeof addTwoNums);

todos.forEach((todo) => console.log(todo));

// Time Stamp 59:20