/*
Title: Assignment 2-Purina Dog Age Calculator

Program Element List (10 Most Complex Concepts / Syntax used): let variable declaration, const variable declaration,

Teammates Kyle (Github Repo Owner, Leader ig), Shreya (CSS Queen), Nikki (Busy Bee) (Author, Role)

Version:1

Date: November 12th, 2026

 
 */


// Beginning of Program 

// variable declaration

let dogWeightKg;
let dogAge;
let humanAgeofDog;
let person;
let sizeCategory; //tell the user what sizeCategory their dog is in
let yearMultiplier;
let dogName;
const yearOneAge = 15;
const yearTwoAge = 9;


//Title Screen (Ascii Art) Part 1 UI/UX 

console.log(`██▀██ ██ ██ ██▀██ ▀██▀ ███▄██ ██▀██      ██▀█▄ ██▀██ ██▀██       ██▀██ ██▀██  ██▀██      ██▀██ ██▀██ ███▄██ ██ ██ ██▀██ ██▀██ ▀██▀ ██▀██ ██▀██
██▄█▀ ██ ██ ██▄█▀  ██  ██ ▀██ ██▄██      ██ ██ ██ ██ ██ ▀▀       ██▄██ ██ ▀▀  ██▄        ██    ██ ██ ██ ▀██ ██ ██ ██▄   ██▄█▀  ██  ██▄   ██▄█▀
█▓░   █▓░█▓ █▓░█▓  █▓░ █▓░ █▓ █▓░█▓      █▓░█▓ █▓░█▓ █▓░██▀      █▓░█▓ █▓░██▀ █▓░▄▄      █▓░▄▄ █▓░█▓ █▓░ █▓ █▓░█▓ █▓░▄▄ █▓░█▓  █▓░ █▓░▄▄ █▓░█▓
▀▀    ▀▀▀▀▀ ▀▀ ▀▀ ▀▀▀▀ ▀▀  ▀▀ ▀▀ ▀▀      ▀▀▀▀  ▀▀▀▀▀ ▀▀▀▀▀       ▀▀ ▀▀ ▀▀▀▀▀  ▀▀▀▀▀      ▀▀▀▀▀ ▀▀▀▀▀ ▀▀  ▀▀  ▀▀▀  ▀▀▀▀▀ ▀▀ ▀▀  ▀▀  ▀▀▀▀▀ ▀▀ ▀▀`)

//Introduction (Summary) Part 2 UI/UX 

alert("Welcome to the Purina Dog Age to Human Age calculator.");

person = prompt("What is your name?, Awesome Sauce");
//maybe add a variable that asks what they're looking for? If it's anything other than dog calculator, we tell them we cant help them

console.log(`Hello ${person}! Did you know that the idea that multiplying a dog's age by 7 will give you their human age is a myth? This age converter will give you your dog's TRUE age in human years. You bring the dog's age, we'll bring the human age.`);


//Explanation (Rules, Instructions, Controls, Navigate, Manage User Expectations) Part 3 UI/UX

console.log("We'll use your dogs current age and weight to determine their human age! Bigger dogs will age faster, so we'll need to know their weight.");


//User Input Part 4 UI/UX
dogName = prompt("What is your dog's name?, Good Dog");
dogWeightKg = prompt("To start, please enter your dog's weight in kilograms); 
dogAge = prompt("Please tell us your dog's current age");
//don't forget to check if they added units


//Reiterate User Input Part 4.5 UI/UX

if (dogWeightKg <= 9){
	sizeCategory = "small";
	yearMultiplier = 4;
} else if (dogWeightKg <= 23 {
	sizeCategory = "medium";
	yearMultiplier = 5;
} else if (dogWeightKg <= 45 {
	sizeCategory = "large";
	yearMultiplier = 6;
}

console.log(`Cool! You said ${dogName} is ${dogWeightKg}, so your dog falls into the ${sizeCategory} category.`);

//Save Load Options (Main) Part 5

//Output Part 6 

//add advice for the dog
//comment on how old the dog is

//Thank you message Part 7

alert('Welcome To Purina');
prompt('What Information are you Looking for Today???', "dog food");
			
		

		
alert("Thank You For Visiting Purina For All Your Pets Needs");
console.log("Thank You For Visiting Purina For All Your Pets Needs");


//Ending of Program

 
/*
 Notes:


Test Code: 
if (dogAge >= 2) {
	dogAge -=2 dogAge;
}


 */
 
 
