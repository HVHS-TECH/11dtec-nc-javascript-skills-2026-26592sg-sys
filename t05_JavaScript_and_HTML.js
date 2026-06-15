 /*/****************************
Name of task: Task 05 - JavaScript and HTML
****************************/
console.log("Running task 05...")
console.log("Hello")

// Variables
var name = "Shan"
var age = 17;
var pocketMoney = 20;
var currentYear = 2026; 
var country = "Philippines"; 
var myNumber = 27;
var mySecNumber = 10;
var myThirdNumber = 13;
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<p>Hi" + name + "</p">;
OUTPUT.innerHTML += "<p>As of" + currentYear + "you are" + age + "</p>";
OUTPUT.innerHTML += "<p>You were born in" + country + "</p>";
OUTPUT.innerHTML += "<p>In 10 years you will be" + myNumber + "years old" + "</p>";
OUTPUT.innerHTML += "<p>You have" + pocketMoney + "</p>"; 
OUTPUT.innerHTML += "<p>You spend half of your money, now you have" + mySecNumber + "</p>";
OUTPUT.innerHTML += "<p>Then you get $3, now you have" + myThirdNumber + "</p>";    

/****************************
Main code:
****************************/

/****************************
Functions:
****************************/ 