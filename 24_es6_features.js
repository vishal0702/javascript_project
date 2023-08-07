// console.log("New Features of ES6");

// //1- Arrow function-
// const square = (x) => x * x;
// console.log(square(5)); //25

// let array = [10, 20, 30];
// array.forEach((e) => console.log(e)); //10 20 30

// //2- Multiline String
// let str = `Hi!
// I'm Vishal Srivastava.
// How are you?
// `;
// console.log(str);

// // Hi!
// // I'm Vishal Srivastava.
// // How are you?

// //3- Default Parameters
// const sum1 = (x, y) => x + y;
// console.log(sum1()); //NaN
// console.log(sum1(2, 3)); //5

// const sum2 = (x = 1, y = 2) => x + y; //default values of x & y
// console.log(sum2()); //3
// console.log(sum2(2, 3)); //5

// //4- Template literals
// let x = 12;
// let y = 45;

// let str1 = `Value of x: ${x}
// Value of y: ${y}`;
// console.log(str1);
// // Value of x: 12
// // Value of y: 45

// //5- Destructuring assignment:
// //Array Destructuring
// let myArr1 = [22, 55];
// let [a1, b1] = myArr1;
// console.log(a1); //22
// console.log(b1); //55

// let myArr2 = [11, 22, 33, 44, 55];
// let [a2, b2, ...c] = myArr2;
// console.log(a2); //11
// console.log(b2); //22
// console.log(c); //[ 33, 44, 55 ]

// //Object Destructuring
// let obj = {
//   city: "Ayodhya",
//   state: "Uttar Pradesh",
// };

// let { city, state } = obj;
// console.log(city); //Ayodhya
// console.log(state); //Uttar Pradesh

// //6- Enhanced Object Literals
// let name = "Ram",
//   country = "India";

// let student = {
//   name,
//   country,
// };
// console.log(student); //{ name: 'Ram', country: 'India' }

// function createObject(p, q, r) {
//   return { p, q, r };
// }
// console.log(createObject(1, 2, 3)); //{ p: 1, q: 2, r: 3 }

//7- Promise in JS
let prom = new Promise((resolve, reject) => {
  // "Producing Code" (May take some time)
  let flag = true;

  setTimeout(() => {
    if (flag) {
      resolve();
    } else {
      reject();
    }
  }, 3000);
});

prom
  .then(() => {
    console.log("Promise is resolved");
  })
  .catch(() => {
    console.log("Promise is rejected");
  });

console.log("First line after Promise");
console.log("Second line after Promise");
console.log("Third line after Promise");
console.log("Fourth line after Promise");

//Output
// First line after Promise
// Second line after Promise
// Third line after Promise
// Fourth line after Promise
// Promise is resolved


//8- Template for Creating Object: Class
class Student{
    constructor(firstName, lastName, city){
        this.firstName=firstName;
        this.lastName=lastName;
        this.city=city;
    }

    display(){
        console.log(`${this.firstName} ${this.lastName} lives in ${this.city}.`);
    }
}

let student1 = new Student("Vishal", "Srivastava","Ayodhya");
student1.display(); //Vishal Srivastava lives in Ayodhya.
