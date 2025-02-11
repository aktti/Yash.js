// Q.1 Write A For-Loop In Which Number Prints With 2 To 13?  3 Marks

// for(let i = 2; i < 13; i++){
//     console.log(i);  
// }

// Q.2 Write A Variable And Create A function on This Variable  5 Marks
// And For-Loop Also And returns the value?

// const a = function(a){
//     for(let a = 5; a < 9; a++){
//         console.log(a);   
//     }
//     return a;
// }
// a();


// Q.3 Write A Number 40 And 60 Swap This numbers ? 1 Marks

// let a = 40;
// let b = 60;

// console.log(`before swap a= ${a}`);
// console.log(`before swap a= ${b}`);

// [b, a] = [a, b];

// console.log(`after swap a= ${a}`);
// console.log(`after swap a= ${b}`);


// const a = 80;
// let b;

// switch (a) {
//     case 10:
//         b = 'Ten';
//         break;
//     case 20:
//         b = 'Twenty';
//         break;
//     case 30:
//         b = 'Thirty';
//         break;
//     case 40:
//         b = 'Fourty';
//         break;
//     case 50:
//         b = 'Fivety';
//         break;
//     case 60:
//         b = 'Sixty';
//         break;
//     case 70:
//         b = 'Seventy';
//         break;
//     case 80:
//         b = 'Eighty';
//          break;
//     default:
//         b = 'Not found';
// }

// console.log(b);  


// Practice Questions 

// Q.1 Write A Function Of Sum In Which 10 And 90 Values Multiply Each Other?  2 Marks
 
// function Sum(a, b) {
//     return a * b;
// }

// let result = Sum(10, 90);
// console.log(result);    2 



// Q.2 Write A For-Loop In Which Loop Started With 3 To 19 ? 1 Marks


// for(let i = 3; i < 19 ; i++){
//     console.log(i);    1
// }

// Q.3 Write A Variable (A) In Which A Value Create a Function And Loop Also ? 3 Marks

// const a = function(a){
//     for(let a = 5; a < 14; a++){
//         console.log(a);
//     }
//     return a;
// }
// a();
// 3  


// Q.4 Write A (B) Variable In Which Only Function (B) Hello Is Called ?  2 Marks
 
// const b = function(b){
// console.log("Hello World");
// return b   2

// }

// b();

// Q.5 Create A Class Of Persons In Which FirstName,LastName and Age Also ? 3 Marks 

// const Persons = {
//     FirstName: "Sanidhya",
//     LastName: "Dwivedi",
//     age: 19
// }
// console.log(Persons);       3

// 11



// const fruits = [
//     {name:"apples", quantity:300},
//     {name:"bananas", quantity:500},
//     {name:"oranges", quantity:200},
//     {name:"kiwi", quantity:150}
//   ];


//   function myCallback({ quantity }) {
//     return quantity > 200 ? "ok" : "low";
//   }

//   const result = Object.groupBy(fruits, myCallback);

//   let text ="These fruits are Ok: \n";
// for (let [x,y] of result.ok.entries()) {
//   text += y.name + " " + y.quantity + "\n";
// }

// text += "\nThese fruits are low: \n";
// for (let [x,y] of result.low.entries()) {
//   text += y.name + " " + y.quantity + "\n";
// }
// console.log(text);

// var numSubarrayProductLessThanK = function(nums, k) {
//     if (k <= 1) {
//         return 0;
//     }

//     let ans = 0, left = 0, curr = 1;
    
//     for (let right = 0; right < nums.length; right++) {
//         curr *= nums[right];
//         while (curr >= k) {
//             curr /= nums[left];
//             left++;
//         }
        
//         ans += right - left + 1;
//     }
    
//     return ans;
// };

// Example usage
// const nums = [10, 5, 2, 6];
// const k = 100;
// console.log(numSubarrayProductLessThanK(nums, k)); // Output: 8

// const myNumbers =  [4, 1, -20, -7, 5, 9, -6];

// const posNumbers =  removeNeg(myNumbers , (x)=> x >= 0);

// console.log(posNumbers);

// function removeNeg(numbers,callback){
//     const myArray = [];
//     for(const x of numbers){
//         if(callback(x)){
//             myArray.push(x);
//         }
//     }
//     return myArray;
// }


// function myDisplayer(some){
// console.log(some);
// }

// let myPromise = new Promise(function(myResolve,myReject){
//     let x = 0;

//     if(x==0) {
//     myResolve("OK");
//     }else{
//      myReject("Error");
//     }
// });

// myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
// )


// function Person(First,Last,Age,Eye){
// this.FirstName = First;
// this.lastName = Last;
// this.age = Age;
// this.eyeColor = Eye;
// }

// const myFather = new Person("Ravi", "Dwivedi",   50, "blue");
// const myMother = new Person("Shuchi", "Dwivedi", 48, "green");

// console.log("My father is " + myFather.age + ". My mother is " + myMother.age + ".");

// const time = new Date().getHours();
// let greeting;
// if (time < 10){
//  greeting = "Good Morning";   
// }else if(time < 20){
//     greeting = "Good Afternoon";
// }else if(time < 30){
//     greeting = "Good Day";
// }else if(time < 40){
//     greeting = 'Good Evening';
// }else{
//     greeting = "Good Night";
// }

// console.log(greeting);


// const cars = ["BMW", "Ford", "XUV700", "Thar"];
// let result = "";  
// let len = cars.length;
// for (let i = 0; i < len; i++) {
//   result += cars[i] + "\n"; 
// }
// console.log(result);


// const myNumbers = [45,4,9,16,25];
// let txt = "";
// myNumbers.forEach(myFunction);
// console.log(txt);


// function myFunction(value,index,array){
//     txt += value + "\n"
// }


// let Name = "W3Schools";

// Destructuring
// let [a1, a2, a3, a4, a5,a6,a7,a8] = Name;

// console.log(a1,a2,a3,a4,a5,a6,a7,a8);


// let length = 16;
// let weight = 7.5;

// // Strings:
// let color = "Yellow";
// let lastName = "Johnson";

// // Booleans
// let x = true;
// let y = false;

// // Object:
// const person = {firstName:"Sanidhya", lastName:"Dwivedi"};

// // Array object:
// const cars = ["Saab", "Volvo", "BMW"];

// // Date object:
// const date = new Date("2025-02-10");

// console.log(person);

const car = {type:"Fiat", model:"500", color:"white"};

car.color = "red";

// Add a property:
car.owner = "Sanidhya";

console.log("Car owner is " + car.owner);



