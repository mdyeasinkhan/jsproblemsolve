//1. Write a program to find the maximum numbers between two numbers. 
var ourcollegeAge = 100;
var ourschooleAge = 78;

if(ourcollegeAge > ourschooleAge){
    console.log("Our college is elder!");
}else{
    console.log("Our schoole is younger!");
}

//2. Write a program to identify whether the number is even or odd?

var number = 98;
var result = number % 4;
console.log("The number is jor: "+result);

var bejorNumber = 87;
var bejorResult = bejorNumber % 10;
console.log("The number is bejor: "+ bejorResult);

// 3. Write a program to check whether a number is divisible by 10 or not.

var ourfirstPoint = 10;
if(ourfirstPoint % 10 == 0){
    console.log("divisible by 10");
}else{
    console.log("divisible not by 10");
}

// 4. Write a program which takes two numbers as input and find out the additions, subtraction, multiplication and division of those two numbers.

var calculateOne = 44;
var calculateTwo = 34;
var totalCalculate = calculateOne + calculateTwo;
console.log(totalCalculate);


// 5. Write a JavaScript program to determine whether a given year is a leap year
var year = 2015;
var leapYear = year % 4;
if(leapYear == 0){
    console.log("This is Leap Year");
}else{
    console.log("This is not Leap Year");
}