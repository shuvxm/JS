// let a = 10
// let b = '10'
// if(a === b){
//     console.log('Hello');
// }
// else{
//     console.log('Bye')
// }

// if(false){
//     console.log("TRUE");
// }
// else{
//     console.log("FALSE");
// }

// even / odd number

// let x = 18
// if(x%2 == 1){
//     console.log(`${x} is odd`);
// }
// else if(x%2 !=1){
//     console.log(`${x} is even`);
// }

// example 3
// let mock = 'Remock'
// if(mock === 'clear'){
//     console.log('Getting requirements');
// }
// else{
//     console.log('Moye Moye...');
// }

// example 4
// let num = 0
// if(num>0){
//     console.log(`${num} is +ve number`);
// }
// else if(num < 0){
//     console.log(`${num} is -ve number`)
// }
// else{
//     console.log(`${num} is neither +ve nor -ve number`)
// }


// nested if example 1
// let num = "abc";
// if (typeof num === "number") 
// {
//   if (num > 0) {
//     console.log(`${num} is +ve number`);
//   } else if (num < 0) {
//     console.log(`${num} is -ve number`);
//   } else {
//     console.log(`${num} is neither +ve nor -ve number`);
//   }
// }
// else{
//     console.warn('Enter proper number') // warn() method is used for giving the warning.
// }


// example 2

// let num = 10
// num = -10;
// num = "abs";

// if(typeof(num) === 'number'){
//   if(num > 0){
//     document.writeln(`${num} is +Ve number`)
//     if(num % 2 == 0){
//       document.write(`& it is even no`);
//     }
//     else{
//       document.write(`& it is odd no`);
//     }
//   }
//   else if(num < 0){
//     document.writeln(`${num} is -ve number`)
//     if(num % 2 == 0){
//       document.write(`& it is even no`);
//     }
//     else{
//       document.write(`& it is odd no`);
//     }
//   }
//   else{
//     document.writeln(`${num} is neither +ve nor -ve number`)
//   }
  
// }
// else{
//   alert(`${num} is not a number`)
// }


// Switch case

let signal = 'green';
switch(signal){
  case 'red': console.error('Stop🔴')
    break;
  case 'yellow': console.warn('Be ready🟡');
    break;
  case 'green' : console.log('lets goooo🟢');
    break;
  default: console.log('RIP 🕊️')
}
