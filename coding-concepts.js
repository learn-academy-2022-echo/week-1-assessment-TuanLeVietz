// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: .lenght is a property that returns the number of characters in the string. Space is also a charater.


// --------------------2) What will this log?

 const greeting = "Hello World!"
 console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: greeting[4] identifies the 4th index of the string which is "o" since index starts at 0.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: The index property locates the position of the string in the array.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: undefined 
// b) Verify and explain: .toUpperCase converts strings in the array to uppercase letters. In this case it is undefined because toUpperCase does not work on arrays. 



// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: The typeof operator indentifies the type of data of the constants lenght, which in this case is "number" because the length of dataType is 3. 