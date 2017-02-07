
// Example

// The purpose of this first exercise is just to show how 
// assertions work and how the homework should be carried out. 
// We'll do it together in class.

// Part EXAMPLE

// Write a function called addOne() that returns the input number, plus one. 

var addOne = function(num) {
	return num + 1
}

// Part 1

// Fix the following code so doubleNum(2) wil equal 4. 

var doubleNum = function(num) {
	return num * 2
}
console.log('Part 1')
console.log(doubleNum(2))

/**
 * PART 2
 *
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 */
var sum = function(number1,number2) {
	return number1 + number2
}
console.log('Part 2')
console.log(sum(10,20))

 // PART 2.5

// modify your sum() function so that it will return null
// if either of the inputs is not a number.


var sum = function(number1,number2) {
	if (typeof number1 === 'number' && typeof number2 === 'number'){
        return number1 + number2
    }
    else 
    {
        return null
    }
}

console.log('Part 2.5')   
console.log(sum('b','a'))

// Now, modify your sum function again, so that it 
// will return null if any of the inputs is negative.
// To avoid repeating yourself, use your isNegative 
// function inside your sum funciton ***

var sum = function(number1,number2) {
    if(number1 < 0 || number2 < 0){
        return null
    }
    else {
        return number1 + number2
    }
}    


console.log('return null if eitherinput isNegative')
console.log(sum(9, -9))


// PART 3

// Write a function called average that takes two numbers
// as inputs and returns the average of the two. To avoid
// repeating yourself, use your sum function inside 
// of your average function.

var average = function(number1, number2){
	sum()
	return sum(number1, number2)/2
}

console.log('average result Part 3')
console.log(average(20, 10))

// Part 4

// Write a function called isNegative that will tell 
// whether a number is negative or not.

var isNegative = function(number){
    if(number < 0){
        return true
    }
       else{ 
       	return false 
       	}
}

console.log('sum Part 4')
console.log(isNegative(8))



// Part 5

// Write a function that will find the minimum of four 
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither).

var minimum = function (number1, number2, number3, number4){
    if(number1 < number2 && number1 < number3 && number1 < number4){
        return number1
    }
    else if(number2 < number1 && number2 < number3 && number2 < number4){
        return number2
    }
    else if(number3 < number1 && number3 < number2 && number3 < number4){
         return number3
    }
    else if(number4 < number1 || number4 < number2 || number4 < number3){
         return number4
    }
}

console.log('Part 5 can I do this better, to much code')    
console.log(minimum(-9, -87, -3 , 1))


// Part 6

// Using logical operators, write a function that will
// return true if either input is a string, but not 
// both or neither. 


var justOneString = function(value) {
    if (typeof value === 'string' && typeof value === 'string'){
        return true
    }
    else{
        return false
    }
}
console.log('Part 6')
console.log(justOneString('meatlessmonday'))

// HARD MODE

// Part 7

// Write a function called doTwice that takes as input a 
// function and invokes that function twice. 

var doSo = function() {
    console.log('hello world')
}

var doTwice = function (input){
    input()
    input()
    console.log('solecito')
}

console.log("Part 7")
console.log(doTwice(doSo))


// For testing purposes, I've included some functions that
// modify global variables, although that's not a good
// pattern for production code.




 // should print 'hello world' to the console twice. 


// Part 8

// Write a function called conditionallyInvoke that takes a function
// as input. It should invoke that input function only if 
// the value of a certain global variable, called ORACLE, is 
// "YES." Otherwise, it will does nothing.


var helloWorld = function(){
	console.log('hello world')
}


var ORACLE = 'YES'

var doSo = function() {
    console.log('hello world')
}

var conditionallyInvoke = function (input){
    if(ORACLE === 'YES'){
        input()
    }
    else {
    return null
    }
}

conditionallyInvoke(doSo)



//var ORACLE = 'NO' do nothing


//var ORACLE = 'YES' log hello world



// EPIC MODE

// For parts 9 through 11, your only instructions are to make the tests pass.

// Part 9

var factory = function() {

}


// Part 10

var factory2 = function() {
	// you want more?
}
	
// Part 11

var factory3 = function(stuff) {
	// This can't be healthy...	
}

