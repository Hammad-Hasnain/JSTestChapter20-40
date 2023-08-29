
// 1)
/* Type the characters that are missing from this code.
var allLower = userInput.toLowerCase;
Note: Correct this statement by yourself. */
// ANS) ()
var userInput = 'HELLO WORLD!'
var allLower = userInput.toLowerCase();

// 2)
/*  Convert the string represented by x to lower-case and assign the 
result to the same variable. */
var x = 'HAmMAd'
x = x.toLowerCase();

// 3)
/* Convert the string represented by y to upper-case and assign the 
result to the same variable. */
var y = 'hammad'
y = y.toUpperCase();

// 4)
/* Convert the string represented by a variable to lower-case and 
assign the result to a second variable that hasn't been declared 
beforehand. */
var string1 = 'HELLO WORLD!'
var string1Lowered = string1.toLowerCase();


// 5)
/* Convert the string represented by an array element to lower-case 
and assign it to a variable that hasn't been declared beforehand. */
var cities = ['KARACHI', 'LAHORE', 'ISLAMABAD']
var citiesElementLowered = cities[1].toLowerCase();


// 6)
/* Display in an alert the upper-case version of the string 
represented by a variable. */
var string2 = 'hello world!'
var string2Uppered = string2.toUpperCase();


// 7)
/* var cityName = “kaRacHi”;
Convert the string represented by a cityName in Capitalisation is 
the writing of a word with its first letter in uppercase and the 
remaining letters in lowercase. */
var cityName = 'kaRacHi';
var cityNameCapitalised = cityName[0].toUpperCase() + cityName.slice(1).toLowerCase();


// ================ Chapter 22 - 25 (Strings) ====================

// 1)
/* "captain" has been assigned to variable “sameWords”. You want 
to slice "ap" out of it. */
var sameWords = "captain";
var apSliced = sameWords.slice(1, 3)



// 2)
/* The number of characters in the string will be assigned to the 
variable. */
var string3 = 'lorem ipsum';
var string3Length = string3.length;


// 3)
/* The string "elephant" has been assigned to the variable animal. 
Slice the four middle characters out of the string and assign it to 
the variable seg, which hasn't been declared beforehand. */
var animal = "elephant";
var seg = animal.slice(2, 6)



// 4)
/* Find the number of characters in the string represented by a 
variable and assign the number to a second variable. */
var string4 = "Hello World!"
var string4Length = string4.length;



// 5)
/* In a first statement measure how many characters there are in a 
string represented by a variable. In a second statement slice all 
but the first character and last 3 characters of the string and 
assign it to a second variable that hasn't been declared 
beforehand. */
var str3 = "Hello World!"
var Str3ln = str3.length;
var str3New = str3.slice(1, Str3ln - 3)


// 6)
/* var text = "To be or not to be.";
var indx = text.indexOf("be");
What is the value of indx? */
var text = "To be or not to be.";
var indx = text.indexOf("be");
// Ans) 3


// 7)
/* var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
What is the value of indx?
Note: Try the above both examples by yourself. */
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
// Ans) 16


// 8)
/* Find the index of the first character of the last instance of "go" in 
   the string represented by the variable text and assign the number 
   to the variable indx, which hasn't been declared beforehand.*/
var text = "To go or not to go.";
var indx = text.lastIndexOf('go');



// 9)
/* Code the first line of an if statement that tests whether a segment 
   with an index represented by indexNum exists in a string. */
var str2 = "Karachi is the city of light."
var indexNum = str2.indexOf('is')
if (indexNum >= 0 && indexNum < str2.length) { }


// 10)
/* In this string "abcde", what character is at index 2?
   (Use charAt) */
var string5 = "abcde";
var string5Index2 = string5.charAt(2)



// 11)
/*  Find the 10th character in the string represented by text and 
    assign it to the variable cha, which hasn't been declared 
    beforehand.*/
var text = 'lorem ipsum sit.';
var cha = text[9];



// 12)
/* Find the last character in the string represented by str and 
   assign it to x, which hasn't been declared beforehand. */
var str = 'hello world!';
var x = str.charAt(str.length - 1)

// 13)
/* Find the the 5th character in a string represented by input 
and assign it to cha, which hasn't been declared beforehand. */
var input = 'Where are you?';
var cha = input[4];



// 14)
/* Code the first line of an if statement that tests whether the 
3rd character of a string represented by a variable is a particular 
character. */
if (input[2] === 'e') { }



// 15)
/* Code a for loop that cycles through all the characters of a 
string represented by a variable and assigns each character to an 
element of an array that has been declared beforehand.
In the string represented by reply replace the first instance of "no" 
with "yes" and assign the revised string to revisedReply, which hasn't 
been declared beforehand. */
var string6 = 'KARACHI';
var arr1 = [];
for (var i = 0; i < string6.length; i++) {
   arr1.push(string6[i])
}
var reply = 'no! i dont'
var revisedReply = reply.replace('no', 'yes')


// 16)
/* In a string represented by str replace the first instance of "1" 
with "one" and assign the revised string to newStr, which hasn't 
been declared beforehand. */
var str = ' There is only 1 member.'
var revisedStr = str.replace('1', 'one')

// 17)
/* If you want all instances replaced, enter 3 characters that
need to appear in this statement.
var y = x.replace("a", "z"); */
var x = 'aaa';
var y = x.replaceAll('a', 'z')



// ====================  Chapter 26 (Rounding Numbers) ====================


// 1)
/* Form a statement that rounds a number to the nearest integer. */
var num1 = 12.45893;
var roundedNum1 = Math.round(num1)
// alert(roundedNum1)

// 2)
/* Round up a number represented by origNum and assign it to
roundNum, which hasn't been declared beforehand. */
var origNum = 1.434;
var roundNum = Math.ceil(origNum);
// alert(roundNum)


// 3)
/* Round down a number represented by origNum and assign it to
   roundNum, which hasn't been declared beforehand. */
var roundNum = Math.floor(origNum)

// 4)
/*  Round a number represented by a variable and assign the result 
    to a second variable that hasn't been declared beforehand. */
var num2 = 2.45635;
var roundNum2 = Math.round(num2)


// 5)
/* Round .5 to 0 and assign it to a variable that hasn't been declared 
   beforehand. */
var num3 = .5;
var downNum3 = Math.floor(num3)


// ====================  Chapter 27 (Random Numbers)  ====================

// 1)
/* Convert a random number generated by JavaScript to a number in 
   the range 1 to 50 */
var randomNum = Math.random() * 100 / 2;

// 2)
/* Generate a random number and assign it to a variable that hasn't 
   been declared beforehand. */
var randomNum1 = Math.random()

// 3)
/* You have to create a dice in JavaScript with the use of pseudorandom number. */
var dice = Math.random() * 6;
var diceReady = Math.ceil(dice);

//4)
/*  You have to create a toss (head/tail) in JavaScript with the use of 
    pseudo-random number. */
var toss = Math.random()
var tossReady = Math.round(toss)
if (tossReady === 0) {
   alert("Head")
}
else {
   alert("Tail")
}


// ==================== Chapter 28, 29 (Converting Strings)  ====================
// 1)
/* How do you convert a string to an integer in JavaScript? */
// Ans) using parseInt() function
var strNum1 = "123.001232";
var strNum1Converted = parseInt(strNum1)
// console.log(strNum1Converted)
// console.log(typeof(strNum1Converted))

// 2)
/* Write a JavaScript function to convert the string "123" to an 
   integer. */
var intNum = parseInt("123")

// 3)
/* How can you convert a string containing a decimal number to a 
   floating-point number in JavaScript? */
var floatNum = parseFloat("123.4567")

// 4)
/* How can you check if a string can be successfully converted to an 
   integer or decimal in JavaScript before performing the 
   conversion? */
// Ans) using typeOf() function 


// 5)
/* How can you convert a number to a string in JavaScript? */
var num4 = 123;
var num4Str = num4.toString()

// 6)
/* Write a JavaScript function to convert the number 42 to a string. */
var num5 = 42;
var num5Str = num5.toString();


// 7)
/* Can you convert a string representing a decimal number (e.g.,
   "3.14") to an integer in JavaScript? If so, how? */
var strNum2 = parseInt("3.14");



// ==================== Chapter 30 (Controlling the length of decimals)  ====================

// 1)
/* Code a statement that rounds a number represented by num to 4
   places, converts it to a string, and assigns it to newNum, which
   hasn't been declared beforehand. */
var num = 2.789643;
var roundedNum = num.toFixed(4);
// console.log(roundedNum)


// 2)
/* In a single statement round a number represented by a variable to
   2 places, convert it to a string, convert it back to a number, and
   assign it to the same variable. */
var num7 = 2.2343589345;
var roundedNum7 = num7.toFixed(2)




// 3)
/* Code the first line of an if statement that tests whether the
   number represented by num, rounded to 2 digits and converted
   to a string, has more than 4 characters in it. */
var number = 2.5893485;
var num = number.toFixed(2)
if (num.length > 4) { }




// 4)
/* Assign a number with many decimal places to a variable.
   Code an alert that displays the number rounded to 2 decimal
   places and converted to a string. */
var num6 = 2.67834357434;
var num6Cnvrtd = num6.toFixed(2);
alert(num6Cnvrtd)




// ==================== Chapter 31 - 34 (Date & Time) ====================
// 1) 
/* Code a statement that creates a new Date object and assigns it to 
   dObj, which hasn't been declared beforehand. */
var dObj = new Date();


// 2)
/* Code a statement that creates a new Date object, converts it to a
   string, and assigns the string to dStr, which hasn't been declared
   beforehand. */
var date1 = new Date();
var dStr = date1.toString();



// 3)
/* Code a statement that extracts the day of the week from a Date 
   object represented by d and assigns it to day, which hasn't been 
   declared beforehand. */
var date2 = new Date();
var dayD2 = date2.getDay();



// 4)
/* The day has been extracted from the Date object and assigned to 
   d. The names of the days of the week have been assigned to the 
   array dayNames. Alert the current day with array index. */
var date3 = new Date();
var d = date3.getDay();
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
alert(dayNames[d] + '  ' + d);



// 5)
/* Extract all parts of the Date and Time and assign it to the variable 
which has not been declared beforehand. */
var date4 = new Date();
var dayD4 = date4.getDay()
var dateD4 = date4.getDate()
var monthD4 = date4.getMonth()
var yearD4 = date4.getFullYear()
var hoursD4 = date4.getHours()
var minutesD4 = date4.getMinutes()
var secondsD4 = date4.getSeconds()
var millisecondsD4 = date4.getMilliseconds()





// 6)
/* Code a statement that creates a Date object for the last day of the
   last month of 2020 and assigns it to later, which hasn't been
   declared beforehand. */
var later = new Date("Dec 31, 2020");
// console.log(later);






// 7)
/* Create a Date object for the second day of the second month of
1992 and assign it to a variable that hasn't been declared
beforehand. */
var date6 = new Date("February 2, 1992");




// 8)
/* Code a single statement that displays in an alert the milliseconds
   that elapsed between the reference date and the beginning of
   1980. */

alert(new Date("January 1,1980").getTime());



// 9)
/* How do you change the year of a date in JavaScript? */
var date8 = new Date()
date8.setFullYear(2000)





// 10)
/* Write a JavaScript function to change the month of a given
date to January. */
function date1() {
   var monthDate = prompt("Enter month number", "(0-11)")
   var d1 = new Date()
   d1.setMonth(monthDate)
   console.log(d1)
}
date1()





// 11)
/* What is the method to change the day of the week for a
specific date in JavaScript? */
// AMS) .setDate() method
var date9 = new Date()
date9.setDate(1)


// 12)
/* Write a JavaScript function to change the minutes of a given
time to a specific value. (Value by prompt) */
function minute() {
   var date = new Date()
   var userMin = prompt("Enter minutes (0-59)")
   date.setMinutes(userMin)
}
minute()


// 13)
/* Write a JavaScript function to add a specific number of
hours to a given time. */
function setHour() {
   var hour = +prompt("Enter hours to be set")
   var date13 = new Date()
   date13.setHours(hour)
   console.log(date13)
}
setHour()







// 14)
/* You have to create a age calculator in JavaScript. */


function ageCalculator() {
   var inp = prompt("Enter your date of birth i.e(January 1,2000)")
   var dateObj = new Date().getTime()
   var userDob = new Date(inp).getTime()
   var calculation = Math.floor((dateObj - userDob) / (1000 * 60 * 60 * 24) / 365)
   alert(calculation)
}
ageCalculator()









// ==================== Chapter 35 - 37 (Functions)  ====================
// 1)
/* Code the first line of a function displayAlert. */
function displayAlert() { }



// 2)
/* Code a function named askName that prompts the user to "Enter
name" and assigns the answer to userName, which hasn't been
declared beforehand. */
function askName() {
   var userName = prompt("Enter name");
   return userName;
}
var askNameInvoke = askName();
// console.log(askNameInvoke)



// 3)
/* Code a function that calls 2 other functions. */

function fun1() {
   prompt("Enter your name")  // function1
   alert("Hello World!")      // function2
}
// fun1()




// 4)
/* Code a function that displays a prompt, "Enter name" and then
displays the name in an alert. Call the function. */
function funName() {
   alert(prompt("Enter Name"))
}
funName()




// 5)
/* Code the first line of a function named concat that has 3
parameters, the first three letters of the alphabet. Call that takes
a variable, a string, and a number as arguments. */
var varArg1 = "Hello!"
function concat(a, b, c) { }
concat(varArg1, " World ", 768)


// 6)
/* Code a function that has 2 parameters. Concatenate them and
assign the result to a variable that hasn't been declared
beforehand. */
function fun2(x, y) {
   var z = x + y;
   return z;
}
var fun2Invoke = fun2("Hello ", "World!")
console.log(fun2Invoke)




// 7)
/* Code a function that has three parameters. Multiply them and
assign them to a variable that hasn't been declared yet. */
function fun3(i, j, k) {
   var prod = i * j * k;
   return prod;
}
var fun3Invoke = fun3(2, 4, 10)
console.log(fun3Invoke)




// 8)
/* Write a JavaScript function that takes an array of numbers as
input and returns the average of those numbers. */
function fun4() {
   var arr = []
   var sum = 0;
   var avg;
   // alert(a)
   for (var i = 0; i < 5; i++) {
      arr[i] = +prompt("Enter number " + i)
      sum = sum + arr[i]
   }
   avg = sum / arr.length;
   alert(avg)
}
// var r = [1, 2, 3, 4, 5, 6]
fun4()




// 9)
/* Write a JavaScript function that takes two parameters and returns
their sum. */
function sum(n1, n2) {
   var sum = n1 + n2;
   return sum;
}
var n1 = +prompt("enter number 1")
var n2 = +prompt("enter number 2")
var sumInvoke = sum(n1, n2)
// console.log(sumInvoke)




// 10)
/* Write a JavaScript function that takes an array of numbers as
input and returns the average of those numbers. */
function fun8(numbers) {
   var sum = 0;
   var avg;
   for (var i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
   }
   avg = sum / numbers.length;
   return avg;
}
var fun8Array = [2, 4, 6, 8, 10]
var fun8Invoke = fun8(fun8Array)





// 11)
/* You have to capture the returned value from a function and
store it in a variable? */
function fun7() {
   return "Returned value1";
}
var fun7Invoke = fun7()
alert(fun7Invoke)





// 12)
/* Write a function which tells letter counts of (word). */
function charCount(str) {
   return str.length;
}
var userText = prompt("Enter text");
charCount(userText)




var word1 = "Helllo";
var word1lowered = word1.toLowerCase();
var letters = [];
for (var i = 0; i < word1.length; i++) {
   for (var j = i + 1; j < word1.length; j++) {
      // console.log("i = " + i + " j = " + j)
      // console.log(word1[i])
      if (word1lowered[i] === word1lowered[j]) {
         console.log(word1lowered[i] + '===' + word1lowered[j])
         letters.push(word1lowered[j]).length
      }
      else {

      }
   }
   // console.log()
}
console.log(letters)








var a = "hello";
// var b = "hello";
var counts = [];
var cutting = [];
var matched = a.match(/l/gi)
// console.log(matched)
for (var i = 0; i < a.length; i++) {
   counts.push(a[i])
}
console.log(counts)

// for (var i = 0; i < a.length; i++) {

//    if (a[i] === counts[i]) {

//    }
// }






// 13)
/* Write a function to set (year) in date object. */
function setYear(year) {
   var date7 = new Date();
   date7.setYear(year)
   alert(date7)
}
setYear(2003);



// 14)
/* Write a function which tells the age of a person who Born on
(dateOfBirth) */
function ageCalculator() {
   var inp = prompt("Enter your date of birth i.e(January 1,2000)")
   var dateObj = new Date().getTime()
   var userDob = new Date(inp).getTime()
   var calculation = Math.floor((dateObj - userDob) / (1000 * 60 * 60 * 24) / 365)
   alert(calculation)
}
ageCalculator()




// 15)
/* Write a function which tells the presense of (word) in an
array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
result should be in true or false */
var word = prompt("Enter name ");
var array2 = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima']
var flag1 = false;
function fun5(a) {
   for (var i = 0; i < array2.length; i++) {
      if (a === array2[i]) {
         flag1 = true;
      }
   }
   if (a) {
      return true;
   }
   else {
      return false;
   }
}
var fun5Invoke = fun5(word);
alert(fun5Invoke)





// 16)
/* Write a function which repeat (letter) 10 times.
Hint: "abcde" str.repeat(10) */
var txt1 = "abcde";
var txtRpt = txt1.repeat(10);
alert(txtRpt)




// 17)
/* write a function which reverse array = ['a','b','c','d','e']
Hint: arr.reverse() */
var array = ['a', 'b', 'c', 'd', 'e'];
array.reverse();
alert(array)






// ====================  Chapter 38 (Local vs. Global Variables) ====================


// 1)
/* Write a JavaScript function that demonstrates the usage of a local
variable. */
function funLclvar() {
   var localVar = "Local variable";
   alert(localVar)    // accessable
}
alert(localVar)  // not accessable
funLclvar()




// 2)
/* How can you access a global variable inside a function in
JavaScript? */
// Ans) Using vairable name. e.g.
var globalVar = "Global variable";
function funGblVar() {
   alert(globalVar)
}
funGblVar()






// ====================  Chapter 39, 40 (Switch Statements) ====================

// 1)
/* Write a JavaScript switch statement that checks the value of a
variable and performs different actions based on different cases. */

var alphabet = prompt("Enter alphabet to find wheter it is vowel or consonant");
switch (alphabet) {
   case "a": alert("vowel")
      break;
   case "e": alert("vowel")
      break;
   case "i": alert("vowel")
      break;
   case "o": alert("vowel")
      break;
   case "u": alert("vowel")
      break;
   default: alert("consonant")
}



// 2)
/*  Write a JavaScript switch statement that check whether cityName
given by user check the cityName if match alert the user and
break the statement, if not default message will be shown to user. */

var cityName = prompt("Enter your city name")
switch (cityName) {
   case "karachi": alert("City is exist")
      break;
   case "lahore": alert("City is exist")
      break;
   case "islamabad": alert("City is exist")
      break;
   default: alert("City doesn't exist")
}






// ====================   END   ====================