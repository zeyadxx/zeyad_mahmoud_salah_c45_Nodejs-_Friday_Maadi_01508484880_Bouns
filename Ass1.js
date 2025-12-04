//1. Convert the string "123" to a number and add 7.
// let str ="123"
// console.log(Number(str)+10);



//2. Check if the given variable is falsy and return "Invalid" if it is
// let check=0;
// if(check===0||check==null||check==NaN){
//     console.log("Invalid");
// }else  console.log("Valid");



//3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue

// for(let i=0;i<=10;i++){
//     if(i%2===0){
//         continue;
//     }
//     console.log(i);
// }



//4. Create an array of numbers and return only the even numbers using filter method.

//const arr=[1,2,3,4,5,6,7,8,9,10]
// console.log(arr.filter((num)=>num%2===0));


// 5. Use the spread operator to merge two arrays, then return the merged array. 

// const arr1=[1,2,3]
// const arr2=[4,5,6]
// const margeArrs =[...arr1,...arr2]
// console.log(margeArrs);



//6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). 

// let day=7
// switch(day){
//     case 1 : console.log("Sunday");
//     break;
//     case 2 : console.log("Monday");
//     break;
//     case 3 : console.log("Tuesday");
//     break;
//     case 4 : console.log("Wednesday");
//     break;
//     case 5 : console.log("Thursday");
//     break;
//     case 6 : console.log("Friday");
//     break;
//     default: console.log("Saturday");

// }


//7. Create an array of strings and return their lengths using map method 

// const arr=["a", "ab", "abc"]
// arr.map((str)=>console.log(str.length));


//8. Write a function that checks if a number is divisible by 3 and 5

// function checker(num){
//     if(num%3===0&&num%15===0)
//         console.log("Divisible by both");
//     else
//         console.log("Not Divisible by both");
// }
// checker(30)



//9. Write a function using arrow syntax to return the square of a number

// const square =(num)=>  num**2
// console.log(square(5));


//10.Write a function that destructures an object to extract values and returns a formatted string

// function desObj({name,age}){
//     return (`${name} is ${age} years old`);
// }
// const obj={
//     name:"zeyad"
//     age:25,
// }
// console.log(desObj(obj));


//11.Write a function that accepts multiple parameters (two or more) and returns their sum

// function sum(...args){
// return  args.reduce((total,num)=>total+num,0)
// }
// console.log(sum(1,2,3,4));

//other way

//  function sum(...args){
//    let total =0
//    args.map((num)=>total+=num)
//     return total
// }
// console.log(sum(1,2,3,4,5));


//12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message

// function waitSuccess(){
// 	return new Promise((resolve) => {
// 		setTimeout(()=>{
// 			resolve("Success")
// 		},3000)
// 	})
// }
// waitSuccess().then((message)=>{
// 	console.log(message);
// })


//13. Write a function to find the largest number in an array.

// function largeNum(...nums){
// 	let temp=0;
//     nums.forEach((num)=>{
// 		if(num>=temp){
// 		temp=num}
// 	})
// 	return temp;
// };
// console.log(largeNum(1,5,9,3,15,2,4,20))


//14. Write a function that takes an object and returns an array containing only its keys
// function keysObj(obj){
// return Object.keys(obj);
// }
// console.log(keysObj({ name: "John", age: 30}));

//15. Write a function that splits a string into an array of words based on spaces. Input: "The quick brown fox"

// function splitStr(str){
// 	console.log(str.split(" "));
// }
// splitStr("The quick brown fox")



/*
1. What is the difference between forEach and for...of? When would you use each?

forEach
forEach is an array method that executes a callback function for each element in the array.
It cannot be  using break or continue.
It does not work  with async/await because it doesn’t wait for promises.

for...of
for...of is a loop that works on any iterable, such as arrays, strings, maps, and sets.
You can use break, continue, and return inside it.
It supports async/await,


2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. 
Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope during the compilation phase.
Function declarations are fully hoisted (you can call them before they appear).
var declarations are hoisted but initialized with undefined.
let and const are hoisted but not initialized, which leads to the TDZ.

the TDZ is the period between the start of the scope and the point where the variable is declared in the code.
During this zone, accessing a let or const variable causes a ReferenceError, even though the variable is technically hoisted

3. What are the main differences between == and ===?

== 
Compares values only.
Performs type coercion converts the two values to the same

=== (Strict Equality)

Compares value AND type.
No type coercion happens.
Safer and recommended.


4. Explain how try-catch works and why it is important in async operations.
try-catch is used to handle errors.
The code inside try runs normally
If any error happens, immediately jumps to the catch block.
The code in catch receives the error and allows you to handle it without crashing the program.

5. What’s the difference between type conversion and coercion? Provide examples of each. 

Type Conversion (Explic it Conversion)   
This is when the developer manually converts a value from one type to another.
Number("123");    // explicit conversion → 123
String(50);       // "50"
Boolean(1);       // true

Type Coercion (Implicit Conversion)

This happens automatically by JavaScript when it needs values to be the same type for an operation
You don’t write code to convert

"5" + 3      // "53"  (3 is coerced to string)
"5" - 2      // 3    (string is coerced to number)
true == 1    // true (boolean coerced to number)
*/
