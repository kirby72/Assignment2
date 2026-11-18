/*
Title: Assignment 2-Purina Dog Age Calculator

Program Element List (10 Most Complex Concepts / Syntax used): let variable declaration, const variable declaration, conditionals,
string interpolation, .isNaN, 

Teammates Kyle (Github Repo Owner, Leader ig), Shreya (CSS Queen), Nikki (Busy Bee) (Author, Role)

Version: 4

Date: November 18th, 2026

 
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

person = prompt("What is your name?", "Awesome Sauce");
//maybe add a variable that asks what they're looking for? If it's anything other than dog calculator, we tell them we cant help them

console.log(`Hello ${person}! Did you know that the idea that multiplying a dog's age by 7 will give you their human age is a myth? This age converter will give you your dog's TRUE age in human years. You bring the dog's age, we'll bring the human age.`);


//Explanation (Rules, Instructions, Controls, Navigate, Manage User Expectations) Part 3 UI/UX

console.log("We'll use your dogs current age and weight to determine their human age! Bigger dogs will age faster, so we'll need to know their weight.");


//User Input Part 4 UI/UX
dogName = prompt("What is your dog's name?", "Good Dog");
dogWeightKg = prompt("To start, please enter your dog's weight in kilograms"); 
dogAge = prompt("Please tell us your dog's current age");
//don't forget to check if they added units


//Reiterate User Input Part 4.5 UI/UX

if (dogWeightKg > 0 && dogWeightKg <= 9){
	sizeCategory = "small";
	yearMultiplier = 4;
} else if (dogWeightKg > 9 && dogWeightKg <= 23) {
	sizeCategory = "medium";
	yearMultiplier = 5;
} else if (dogWeightKg > 23 && dogWeightKg <= 45) {
	sizeCategory = "large";
	yearMultiplier = 6;
} else if (dogWeightKg > 45 && dogWeightKg <= 120) {
	sizeCategory = "giant";
	yearMultiplier = 7.5;
} else {
	console.log("That is not a valid weight. Please try again.");
}

if (dogAge < 0 || dogAge > 30 || dogAge.isNaN){
	console.log("That age doesn't seem right... try entering a valid age.");
}

console.log(`Cool! You said ${dogName} is ${dogWeightKg} kg, so your dog falls into the ${sizeCategory} category. You also said they are ${dogAge} years old.`);

//Save Load Options (Main) Part 5

if (dogAge <=1){
	humanAgeofDog = dogAge * yearOneAge;
} else if (dogAge <= 2) {
	humanAgeofDog = yearOneAge + ((dogAge - 1) * yearTwoAge);
} else {
	humanAgeofDog = yearOneAge + yearTwoAge + ((dogAge - 2) * yearMultiplier);
}


//Output Part 6 

console.log(`Your dog is ${humanAgeofDog} years old in human years.`);


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

We should add some extra things to make our program stand out, maybe nutritional facts or trying to sell them something??-busy bee


Test Code: 
if (dogAge >= 2) {
	dogAge -=2 dogAge;
}


 */
 
 
