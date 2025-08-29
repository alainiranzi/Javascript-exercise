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
let a = 530, b = 2000, c = a + b;
document.getElementById("demo1").innerHTML = c;

// Section 4: Another interactive function for buttons
document.getElementById("btn2").onclick = function() {
  document.getElementById("demo3").innerHTML = "Hello Dolly!";
  document.getElementById("demo4").innerHTML = "How are you?";
};
