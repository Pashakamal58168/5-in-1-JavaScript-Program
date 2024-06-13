// Checking Night time
const currentTime = new Date().getHours();
if (!(currentTime>= 18 || currentTime<=6)){
    console.log("its notnight time.");
}
else{
    console.log("its night time.");
}
// Checking Odd and Even Num
const num = parseInt(prompt("Enter a Num"));
if (num % 2 === 0){
    console.log(num + "is even.");
}
else {
    console.log(num + "is Odd.");
}
// Checking Weekend and Weekday
const currentDate =  new Date ();
const currentDay = currentDate.getDay();

if(currentDate === 0 || currentDay === 6){
    console.log("Its the Weekend!");
}
else{
    console.log("its a weekday.");
}
// AgeProgram
let age = prompt( " Enter Your Age")
if( age>18 )
    alert("You can Vote")
else  alert("you can not vote")
console.log(age);
// Login

let userInput = prompt("Enter username:");
let passInput = +prompt("Enter password:");

if (userInput==="mustafa" || passInput ===1234) {
    alert("Login successful!");
} else {
    alert("Incorrect username or password. Please try again.");
}



