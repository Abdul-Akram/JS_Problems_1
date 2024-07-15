// Program 1
// Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz"


// for(let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log("fizzbuzz");
//     }
//     else if(i%3==0){
//         console.log("fizz");
//     }
//     else if(i%5==0){
//         console.log("buzz");
//     }
//     else{
//         console.log(i);
//     }
// }



// Program 2

// Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).

// let word = prompt();
// console.log(word)
// let front = 0;
// let back = word.length-1;
// let flag =1;
// while(front<=back){
//     if (word.charAt(front) != word.charAt(back)){
//         console.log("not a palindrome");
//         break;
//     } else {
//         flag=0
//     }
//     front++;
//     back--;
// }

// if(flag==0){
//     console.log("palindrome");
//     }

// Program 3

// Write a function that takes an array of numbers and returns the largest number.(Share the GitHub URL )

// function largest(arr,n){
//     let max = arr[0];
//     for(let i=1;i<n;i++){
//         if(arr[i]>max){
//             max = arr[i];
//             }
//     }
//     return max;
// }
// let array=[]
// let n = prompt("enter the number of elements");
// for(let i=0;i<n;i++){
//     array[i]=prompt("enter the element");
// }
// console.log(array);
// console.log(largest(array,n));

// Problem 4

// Write a function that takes a string and returns an object with each character as a key and its number of occurrences as the value.(Share the GitHub URL )

// let word = prompt("Enter a String");
// let obj = {};
// for (let i = 0; i < word.length; i++) {
//   if (obj[word.charAt(i)] == undefined) {
//     obj[word.charAt(i)] = 1;
//   } else {
//     obj[word.charAt(i)]++;
//   }
// }
// console.log(obj);

// Problem 5

// Write a function that takes a string and returns the longest word in the string.(Share the GitHub URL )

// let word = prompt("Enter the String");
// console.log(word)
// let splitted = word.split(" ");
// let max = 0;
// let max_word = "";
// for (let i of splitted) {
//   if (i.length > max) {
//     max = i.length;
//     max_word = i;
//   }
// }
// console.log(max_word);
  
// Problem 6
// Write a function that takes a number as input and returns its factorial.(Share the GitHub URL )

// let num = Number(prompt("Enter the Number: "));
// console.log(num);
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//   fact = fact * i;
// }
// console.log(fact);

// Problem 7
// Write a function that converts a temperature from Celsius to Fahrenheit.(Share the GitHub URL )

// let celsius = Number(prompt("Enter the Temperature in Celsius: "));
// let fahrenheit = (celsius * 9) / 5 + 32;
// console.log("Celsius:",celsius);
// console.log(fahrenheit);


// Problem 8

// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

function missingNumber(arr){
  let n=arr.length;
  let sum=(n*(n+1))/2;
  let sum1=0;
  for(let i of arr){
      sum1+=i;
      }
  return sum-sum1;
}
console.log("Input:[0,1,2,4,5,6,7,8]")
console.log(missingNumber([0,1,2,4,5,6,7,8]))