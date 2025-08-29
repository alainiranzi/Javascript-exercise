// Section 1: Update demo paragraph
document.getElementById("btn1").onclick = function() {
  document.getElementById("demo").innerHTML = 
    "The gates are opened if you want to work with us! &#128513;";
};

// Section 2: Show number of employees and header
document.getElementById("demo2").innerHTML =
  "<h3>This is the number of the last employees with their salaries for each</h3>" +
  (5 + 4);

// Section 3: Simple sum example
let a = 530;
let b = 2000;
let c = a + b;
document.getElementById("demo1").innerHTML = "They are in $= "  + c;


// section 4: It's a way of merging and listing different things

const pi = 28 ;
let person = "Alain Iranzi";
let answer = 'Yes I am!';

document.getElementById("demo4").innerHTML = pi + "<br>" + person + "<br>" + answer;

// section 5: listing co-workers, adding and changing names

// Create an Array:
const workers = ["Sabo" , "Keza" ,  "Gulain"];

// Change an element:
workers[0] = "Kelvine";

// Add an element:
workers.push("Alain");

// Display the Array:
document.getElementById("demo5").innerHTML = workers; 
