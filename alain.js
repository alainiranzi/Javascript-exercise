// Section 1: Update demo paragraph
document.getElementById("btn1").onclick = function() {
  document.getElementById("demo").innerHTML = 
    "The gates are opened if you want to work with us! &#128513;";
};

// Section 2: Show number of employees and header
document.getElementById("demo2").innerHTML = + (5 + 4);

// Section 3: Simple sum example
let a = 530;
let b = 2000;
let c = a + b;
document.getElementById("demo1").innerHTML = " $= "  + c;


// section 4: It's a way of merging and listing different things

const pi = 28 ;
let person = "Alain Iranzi";
let answer = 'Yes I am!';

document.getElementById("demo4").innerHTML = pi + "<br>" + person + "<br>" + answer;

// section 5: listing co-workers, adding and changing names

// Create an Array:
const workers = ["Sabo","Keza"  , "Gulain"];

// Change an element:
workers[0] = "Kelvine";

// Add an element:
workers.push("Alain");

// Display the Array:
document.getElementById("demo5").innerHTML = workers; 


// name and age are parameters<br>
function greet(name, age) {
  return "The elder is " + name + " who is " + age + " years old.";
}

document.getElementById("giant").innerHTML = greet("Alain", 28);


// Create an Object:
const man = {firstName:"Sabo", lastName:"Livine", age:19, eyeColor:"blue"};

// Display Data from the Object:
document.getElementById("object").innerHTML =
man.firstName + " is " + man.age + " years old." + " Her eyes are " + man.eyeColor;


// myFunction computes the product of a and b
myFunction = (a, b) => a * b;

let result = myFunction(4, 5);
document.getElementById("now").innerHTML = "The average is: " + result;

// ==========================
// 1. Variables
let name = "Alain";
let age = 28;
let isStudent = true;

// ==========================
// 2. Functions
function greet(name, isStudent) {
    return "Greetings " + name + "! if it's  " + isStudent + " that you are a student.";
}

// Show greet in HTML directly
document.getElementById("greto").innerHTML = greet("Alain", "true");

// Function that returns a value
function addNumbers(a, b) {
    return a + b;
}

let sum = addNumbers(5, 10);
console.log("Sum: " + sum);

// ==========================
// 3. Object
let greto = {
    name: "Alain",
    age: 28,
    job: "Developer",

    // Method without parameters
    greet: function() {
        return "Hello " + this.name + "! You are a " + this.job;
    },

    // Method with parameters that returns value
    addNumbers: function(a, b) {
        return a + b;
    }
};

// Access properties
console.log(greto.name);  // Alain
console.log(greto.job);   // Developer

// Event listeners to show object outputs in HTML
const output = document.getElementById("output");

document.getElementById("greetBtn").addEventListener("click", function() {
    output.innerHTML = greto.greet();
});

document.getElementById("sumBtn").addEventListener("click", function() {
    let total = greto.addNumbers(5, 10);
    output.innerHTML = "Total: " + total;
});

// Call methods in console
console.log(greto.greet());            // Hello Alain! You are a Developer
let total = greto.addNumbers(5, 10);
console.log("Total: " + total);
