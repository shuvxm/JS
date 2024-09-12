//todo: General/ Named function

// function without parameter & without return value

// function demo(){
//     console.log("I'm in function")
// }

// demo()
// demo()

// function err(){
//     console.error('Invalid options')
// }
// err()

// function wrn(){
//     console.warn('Get ready')
// }
// wrn()

// function with parameter & without return value
// function num(x){
//     console.log(x)
// }

// num(100)

// function fun(msz){
//     console.log(msz)
// }
// fun(200)
// fun('hello')
// fun(true)
// fun()

// WAp to add two numbers by using general function with parameter
// function add(a,b){
//     let sum = a+b
//     console.log(`${a} + ${b} = ${sum}`)
// }
// add(20,37)
// add(456,982)

// WAP to check even or odd number by using general fucntion with parameter
function evenOdd(num){
if(num%2 == 0){
    console.log(`${x} is even no`)
}
else{
    console.log(`${x} is odd no`)
}
// (num%2 == 0)? console.log(`${num} is even no`):console.log(`${num} is odd no`)
// }
evenOdd(4)
// evenOdd(65)
// evenOdd(prompt('Enter number'))

//WAP to print even no from 25 to 50 by using general fucntion with parameter
// function even(num1, num2){

//     for(let i = num1; i <= num2;i++){
//         if(i%2 == 0){
//             console.log(i)
//         }
//     }
// }
// even(25,50)

// let fnm = prompt("Enter full name")
// let lnm = prompt("Enter last name")

// function fullName(fnm, lnm){
//     console.log(`My name is ${fnm} ${lnm}`)
// }
// fullName(fnm, lnm)

//---------------------------------------------------------------------

// todo: Anonomous function

// scenario example:-

//function without parameter & without return value
// let sum = function () {
//   let a = 7;
//   let b = 5;
//   console.log(a + b);
// };
// sum();

//function with parameter & without return value
// let sum1 = function (a, b) {
//   let sum = a + b;
//   console.log(sum);
// };
// sum1(4, 0);

//function without parameter & with return value
// let sum3 = function () {
//   let a = 80;
//   let b = 60;
//   let sum = a + b;
//   return `${a} ${b} = ${sum}`;
// };
// // console.log(sum3())
// let res = sum3();
// console.log(res);
// console.log(typeof sum3);
// console.log(typeof res);

//function with parameter & with return value
// let sum4 = function (a, b) {
//   return a + b;
// };
// console.log(sum4(50, 50));
// console.log(typeof sum4); // datatype of function is function only.





// WAP to check even or odd number by using anonymous function with parameter & return value
// let evenOdd = function(num){
//     return (num%2 == 0)? `${num} is even`: `${num} is odd`
// }
// let x = evenOdd(25)
// console.log(x)




// todo: Arrow function (=>)

// function without parameter & without return value
// let fun = () => {
//     console.log('Hello Im in Arrow function')
// }
// fun()

// function with parameter & without return value
// let fun2 = (a) =>{
//     console.log(a)
// }
// fun2(20)

// function without parameter & with return value
// let checkEvenOdd = () =>{
//     let num = 250
//     return (num%2==0)? 'even':'odd'
// }
// let f = checkEvenOdd()
// console.log(f)

// fucntion with parameter & with return value
// let fullName = (fnm, lnm) => {
//     return `My name is ${fnm} ${lnm}`
// }
// let x = fullName('shubham', 'sharma')
// console.log(x)



// call back function and Higher order function

// let num = function(){
//     return 800
// }

// let sum = function(a, b){
//     let add = a+b
//     console.log(add)
// }
// sum(num(), 200)  // here num () is a call back function and sum() is a higher order function.

// OR

// let sum1 = function(a,b){
//     let add = a() + b;
//     console.log(add)
// }

// sum1(function(){
//     return 100
// }, 200)


// example 2
// let surname = function(){
//     return 'Sharma'
// }

// let fullName = function(fnm,lnm){
//     console.log(`My name is ${fnm} ${lnm}`) 
// }

// fullName('Shubham', surname())
// // fullName('Sim', surname())
// fullName('Pushkar', surname())


// let surName = function(){
//     let k = 'Monko'
//     return k
// }

// let fullName = (fnm, lnm) => {`My name is ${fnm} ${lnm}`}

// let sk = fullName('Babloo', surName())
// console.log(sk)

console.log(fullName('Pushkar', surName()))}