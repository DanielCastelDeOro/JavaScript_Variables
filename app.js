console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
let firstName = "Daniel";
let lastName = "Castel De Oro";
var age = 35;

// Exercise 2
let fullName = firstName + " " + lastName;
console.log(fullName);

let fullNametemp = `${firstName} ${lastName}`;
// Exercise 3
let city = `Highlands Ranch`;
let passtime = `Being with family`;

let myStory = `Hell my name is ${fullName}, I'm ${age}, and I love ${passtime}.`;
console.log(myStory);

for (let i = 0; i < age.length; i++) {
  
  console.log(i);
}

if (age < 3) {
  console.log("hello");
}
else{
  console.log("no");
}
