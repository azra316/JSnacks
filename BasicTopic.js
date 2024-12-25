//# Basic Syntax and Structure
//# Variables
// 1.Declare three variables: name, age, and isStudent. Assign your name, age, and whether you are a student (true/false) to these variables.
let name = "azra";
let age = 21;
let isStudent = true;
//2. Change the value of a let variable and print both the initial and changed values. What happens when you try the same with const?
console.log(`My name is ${name} and my age is ${age}`);
age = 95;
console.log(`now the age is ${age}`);
const frnd = "Hiba Khan";
// frnd = "someoneElse";TypeError: Assignment to constant variable.
console.log(frnd);

//#Data Types
// 3. Create a variable myString and assign it any string value. Use typeof to log the data type.
let myString = "paper have more patience than people";
console.log(typeof myString);
//4. Declare an array with 5 numbers. Write code to access and print the third element.
let NumArray = [12, 16, 30, 2003, 15, 2005];
console.log(NumArray[3]);
//5. Create an object representing a car with properties make, model, and year. Log the model property.
let car = {
  make: "volkswagen group",
  model: "Audi",
  year: "2024",
};
console.log(car.model);
// 6. Write code that checks if a variable is undefined and logs a message if it is.
let MYJOb;
console.log(typeof MYJOb);
// 7. Create a variable score and initialize it as null. Log the type of score.
let score = null;
console.log(typeof score);

//#Comments
//8. Write both a single-line and multi-line comment in your code.
/* I'm single line comment
 these are the warm up exercises 
 its help to solve complex problems
 by solving these we will have motivation menation our streak */

//# Operators
//# Arithmetic Operators
//9. Write a function that takes two numbers as arguments and returns their sum, difference, product, and quotient.
function Mymath(a, b) {
  sum = a + b;
  Diff = a - b;
  product = a * b;
  quotient = a % b;
  return {
    sum,
    Diff,
    product,
    quotient,
  };
}
let result = Mymath(8, 20);
console.log(result);
//10. Use the modulus operator to determine if a given number is odd or even.
function CheckEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}
CheckEvenOdd(89);
//# Comparison Operators
//11. Compare two variables, a and b, and log whether a is greater than, less than, or equal to b.
function CompareValues(num1, num2) {
  try {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Both arguments must be numbers");
    } else {
      if (num1 > num2) {
        console.log(`${num1} greater than ${num2}`);
      } else if (num1 < num2) {
        console.log(`${num1} is less than ${num2}`);
      } else {
        console.log(`${num1} and ${num2} are equal`);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}
CompareValues(56, 9);
CompareValues("45", 0);
//12. Check if a string variable str is equal to the string "JavaScript" using both == and ===. Explain the difference.
let str = "JavaScript";
// equality operator use Type Coercion
if (str == "Javascript") {
  console.log(`using == strings are equal`);
} else {
  console.log(`using == strings are not equal`);
}
// strict equality operator don't use type coercion check both the valve and dataType
if (str === "javaScript") {
  console.log(`using === strings are equal`);
} else {
  console.log(`using === strings are equal`);
}
//# Logical Operators
//13. Write a condition using logical operators that checks if a number is between 10 and 50 (inclusive).
let FindNum = (num) => {
  if (num > 10 && num < 50) {
    console.log(`${num} is between 10 and 50`);
  } else {
    console.log(`your ${num} isn't between 10 and 50`);
  }
};
FindNum(89);
FindNum(11);
//14. Write a condition that checks if a variable is either a string or a number.
let MyVariable = "I'mAzra";
if (typeof MyVariable === "number" || typeof MyVariable === "string") {
  console.log(`your ${MyVariable} type is`, typeof MyVariable);
}

//# Assignment Operators
//15. Assign the result of adding 10 to a variable x using the += operator.
let x = 10;
console.log(x);
x += 11;
console.log(x);
//# Control Structures
//# If-Else Statements
// 16. Write an if-else statement that checks if a number is positive, negative, or zero and logs a corresponding message.
let CheckNumber = (num) => {
  if (typeof num === "number") {
    if (num > 0) {
      console.log(`${num} is positive`);
    } else if (num < 0) {
      console.log(`${num} is negative`);
    } else {
      console.log(`${num} is zero`);
    }
  } else {
    console.log(`enter the datatype of number`);
  }
};
CheckNumber(10);
CheckNumber("22");
//17. Write a function that takes two numbers and returns the larger one using an if-else statement.
let CheckLargerNumber = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
let printLargerNumber = CheckLargerNumber(23, 89);
console.log(printLargerNumber);

//# Switch Statements
//18. Create a switch statement that checks a variable dayOfWeek (number from 1 to 7) and logs the corresponding day of the week (e.g., 1 = "Monday").
let CheckDays = (num) => {
  if (typeof num === "number") {
    switch (num) {
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      case 3:
        console.log("Wednesday");
        break;
      case 4:
        console.log("Thursday");
        break;
      case 5:
        console.log("Friday");
        break;
      case 6:
        console.log("Saturday");
        break;
      case 7:
        console.log("Sunday");
        break;
      default:
        console.log(`Enter Valid Day`);
    }
  } else {
    console.log(`enter the number dataType`);
  }
};
CheckDays(7);
CheckDays(1);
CheckDays(0);
CheckDays("1");
// 19. Use a switch statement to categorize a grade variable (A, B, C, D, F) and log a message like "Excellent", "Good", etc.
let checkGrade = (grade) => {
  if (typeof grade === "string") {
    switch (grade) {
      case "A":
        return "Excellent";
      case "B":
        return "Good";
      case "C":
        return "average";
      case "D":
        return "Below";
      case "E":
        return "Bad";
      case "F":
        return "fail";
      default:
        return "Enter valid grade";
    }
  } else {
    console.log("enter string data type");
  }
};
let getGrade = checkGrade("A");
console.log(getGrade);
//# 4. Loops
//For Loop
//20. Write a for loop that prints the numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//21. Create an array of five names and use a for loop to print each name.
let namesOfArray = ["Azra", "daisy", "sunflower", "Hiba", "Khan", "Ashrafi"];
for (let i = 0; i < namesOfArray.length; i++) {
  console.log(namesOfArray[i]);
}
//# While Loop
//22. Write a while loop that logs numbers from 10 down to 1.
let StartNum = 10;
while (StartNum >= 1) {
  console.log(StartNum);
  StartNum--;
}
// 23. Write a while loop that stops when a variable x reaches a value greater than 50, starting at 1 and doubling x with each iteration.
let primaryNum = 1;
while (primaryNum <= 50) {
  primaryNum = primaryNum + 2;
  console.log(primaryNum);
  primaryNum++;
}

//# Do-While Loop
//24. Write a do-while loop that prints numbers from 1 to 5.
let IncrementalNumber = 1;
do {
  console.log(IncrementalNumber);
  IncrementalNumber++;
} while (IncrementalNumber <= 5);
//25. Write a do-while loop that generates random numbers between 1 and 10 until it generates a 7.
// let randomNumber;
// do {
//   let randomNumber = Math.floor(Math.random() * 10) + 1;
//   console.log(randomNumber);
// } while (randomNumber !== 7);
//# For-In Loop
//26. Write a for-in loop to iterate over an object containing information about a book (title, author, year) and log each property and value.
let MyBOOk = {
  title: "The Diary of a Young Girl",
  autor: "Anne Frank",
  Genre: "Autobiography",
};
for (BookProperty in MyBOOk) {
  console.log(`${BookProperty} , ${MyBOOk[BookProperty]} `);
}
//27. Create an object with three properties and use a for-in loop to log all keys.
let MyJournal = {
  yearofJornal: 2024,
  JournalName: "Daisy",
  Objective: "Mindfullness",
};
for (JournalProperties in MyJournal) {
  console.log(JournalProperties);
}
//# For-Of Loop
//28. Write a for-of loop to iterate over an array of colors (red, blue, green) and log each color.
let Colors = ["red", "green", "yellow", "white"];
for (values of Colors) {
  console.log(values);
}
//29. Write a for-of loop that iterates over a string and logs each character.
let SomethingAboutMe = "ImNotAnAntiSocialIAmJustSelectivelySocial";
for (values of SomethingAboutMe) {
  console.log(`${values}`);
}
//Bonus:
// 30. Write a loop that calculates the sum of all numbers from 1 to 100.
let Submission = 0;
for (let i = 1; i <= 100; i++) {
  Submission = Submission + i;
}
console.log(Submission);

/*   *****Another 30 question Marathon on Basic JS*****  */
//# Control Structures
//1.Write an if-else statement to check if a person is eligible to vote (age 18 or above).
const CheckVoteElegebility = (age) => {
  if (age < 18) {
    console.log("You are under Age");
  } else {
    console.log("caste yor vote");
  }
};
CheckVoteElegebility(8);
CheckVoteElegebility(21);
//2.Write an if-else-if structure to check whether a number is positive, negative, or zero.
let CheckNum = (num) => {
  if (num < 0) {
    console.log(`Your number ${num} is negative`);
  } else if (num === 0) {
    console.log(`Your number ${num} is zero`);
  } else {
    console.log(`Your number ${num} is positive`);
  }
};
CheckNum(7);
CheckNum(-2);
CheckNum(0);
//3.Use a switch statement to determine the grade based on a percentage (A, B, C, D, F).
let CheckGRADE = (grade) => {
  if (typeof grade === "number") {
    switch (grade) {
      case grade > 90:
        console.log("Grade A");
        break;
      case grade > 80:
        console.log("Grade B");
        break;
      case grade > 70:
        console.log("Grade C");
        break;
      case grade > 60:
        console.log("Grade D");
        break;
      case grade > 50:
        console.log("Grade F");
        break;
        deafult: console.log("Failed");
    }
  } else {
    console.log("Enter the correct percentage");
  }
};
CheckGRADE(90);
CheckGRADE(70);
CheckGRADE(40);
CheckGRADE(92);
CheckGRADE("a");
//4.Write a function that takes a day number (1-7) as input and returns the name of the day (Sunday-Saturday).
let GetDays =(day)=>{
  if(typeof day === 'number'){
    switch(day){
      case 1:
        console.log(`monday`);
        break;
      case 2:
        console.log(`tuesday`);
        break;
      case 3:
        console.log(`wednesday`);
        break;
      case 4:
        console.log(`thursday`);
        break;
      case 5:
        console.log(`friday`);
        break;
      case 6:
        console.log(`saturday`);
        break;
      case 7:
        console.log('sunday');
      break;
      default:
        console.log("enter the correct day");
    }
  }else{
    console.log("Enter the days in number from 1-7");
  }
}
GetDays(9);
GetDays('q');
GetDays(2);
//5.Use a nested if-else statement to determine whether a number is between 10 and 50 and is even or odd.

//6.Write a function that takes a number and returns "even" if the number is even, "odd" if it's odd, and "zero" if it's 0.
//7. Write a switch case to categorize a given fruit (e.g., "apple", "banana", "orange") and return a message for each.
//8.Implement an if-else statement that checks if a character is a vowel or consonant.
//9.Write an if-else statement that checks whether a year is a leap year or not.
//10.Write a program that takes a number as input and outputs whether the number is divisible by both 3 and 5 or not.
//# Loops
//11. Write a for loop that prints numbers from 1 to 20.
//12. Write a for loop that prints the multiplication table for 5.
//13. Use a while loop to print numbers from 10 down to 1.
//14. Write a for loop that calculates and prints the factorial of a number.
//15. Write a while loop that sums the numbers from 1 to 100.
//16. Implement a do-while loop that asks the user to guess a number between 1 and 10 until they guess correctly.
//17. Use a for-in loop to iterate over an object representing a student (name, age, grade) and print each property.
//18. Write a for-of loop that iterates over an array of city names and logs each city.
//19. Write a loop that prints the Fibonacci sequence up to the 10th number.
//20. Write a nested loop that prints a pattern of stars in a 5x5 grid.
//# Type Conversion & Coercion
//21. Write code that converts a number stored as a string ("123") to a number using Number().
//22. Write a function that converts a boolean value to a string ("true" or "false").
//23.Use parseInt() to convert a string like "50px" to the number 50.
//24.Write a program that converts a floating-point number (e.g., 3.14) to an integer.
//25.Write a function that takes a number and converts it to a string, and then checks the type before and after conversion.
//26.Write a function that takes a boolean and coerces it into a number using the unary plus (+) operator.
//27.Write a program that checks whether an empty string coerces to false in an if condition.
//28.Create a program that converts the string "true" to the boolean true using Boolean().
//# Operators
//29.Write a program that uses the arithmetic operators (+, -, *, /, %) to perform basic calculations.
//30.Write a function that takes two numbers and compares them using the >= operator. Return true if the first number is greater than or equal to the second, otherwise false.
