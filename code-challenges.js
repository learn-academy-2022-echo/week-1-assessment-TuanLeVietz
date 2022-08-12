// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code: We're gonna create new constant randomNum and assign it a random number. Using conditional statements if num is strictly equal to temp3 then it's gonna output "212 is a boiling point", if num less than temp3 then it's gonna output "42 is below boiling point", and if temp2 is greater than temp3 the output is gonna be "350 is above boiling point".

const temp1 = 42
const temp2 = 350
const temp3 = 212

const randomNum = (num) => {
if (num < temp3){
    return  `${temp1} is below boiling point`
} else if (num === temp3){
    return `${temp3} is at boiling point`
} else if (num > temp3)
    return `${temp2} is above boiling point`
    }
console.log(randomNum(212))
// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code: Assign a constant named numbs thats going to combine myNumbers1 and myNumbers2 using the .concat method. After that we log numbs and use the .lenght method to return how many numbers there are in the new array.

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]
const numbs = myNumbers1.concat(myNumbers2)
console.log(numbs.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code: In order to reverse the string we have to split each letter by using the .split method to split each individual character, reverse the order of the characters with .reverse() and then join them together using .join()

const currentCohort = "Echo 2022"
console.log(currentCohort.split("").reverse().join(""));

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code: Using loops, the count of the loop will start at index 0 until 6, and after each loop it will output the string "odd" or "even" depending on the remainder of the modulo. If the remainder is 0 then its "even" and if the remained is not 0 then it will output "odd"

const myArray = [13, 34, 5, 10, 27, 42]
 for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
    console.log('even')
 } else {
    console.log('odd')
    } 
}
// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code: Using conditional statements, if the condition of number1 < number2 is met then it subtracts the smaller number from the larger number. Then we repeat for number1 > number2 with else if, and in this case the number2 is gonna subsctract from number1 since number1 is the larger number. 
// We do the same for set two. 

// Set one:
const number1 = 58
const number2 = 100

if (number1 < number2) {
    console.log(number2 - number1)
} else if (number1 > number2)
    console.log(number1 - number2)

// Set two:
const number3 = 27
const number4 = 24
if (number3 > number4) {
    console.log(number3 - number4)
} else if (number3 < number4)
console.log(number4 - number3)