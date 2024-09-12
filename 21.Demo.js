//Scope of the varable


//1.statement block: only var act as global scope and let,const acts as local

// if(true){
//     var a = 100   //global scope

//     //local scope
//     let b = 200
//     const c = 300

//     console.log(a,b,c)
// }

// console.log(a)




//2.function block: var,let,const all act as local scope in function block
// function num(){
//     //local scope
//     var x = 10
//     let y = 20
//     const z = 30

//     // console.log(x,y,z)

//     return z
// }
// // num()
// console.log(num())



//Hoisting - > variable & functon hoisting

//variable hoisting
// a = 10 // initialization
// var a;  // declaration
// console.log(a)   //possible

// // not possible with const keyword because we cant write in separate line (declaration  & initialization)
// b = 20; // initialization
// let b; // declaration
// console.log(b);   // not possible declaration or redeclaration after initailization in let


//todo: function hoisting

//possible in genral function
// fun()
// function fun(){ 
//     console.log("Hi")
// }

// not possible in arrow & anonymous function

// x()
// var x = function(){
//     console.log('Bye')
// }





//DeStructuring

//1. Array DeStructuring
// let num = [5,6,8,3,7]

//distinct variable
// let [five,six,eight,three,seven] = num
// console.log(`my fav no is ${six}`)

// let color = ['red','yellow','blue','green']

//distinct variable
// let [r,y,b,g] = color
// console.log(`my fav color is ${g}`)


//2.Object DeStructuring
// let person = {
//     fnm: "Dinga",
//     lnm: "Raja",
//     age: 20,
//     place: "Goa"
// }
// console.log(person)
// console.log(`${person.fnm} is from ${person.place}`)

// distinct variable
// let {fnm, place} = person
// console.log(`${fnm} is from ${place}`)


// for-in & for-of loop  --> use in array & object 


// using in Array
let arr  = [10,20,30,40,50]
console.log(arr)

// for-in loop in array -> display index of array
for(let key in arr){
    console.log(key)
}

//for-of loop in array -> it display element of array
for(let key of arr){
    console.log(key)
}



// Using in Object
let obj = {
    fnm: "DInga",
    lnm: "Raja",
    age:50
}
console.log(obj)

// for-in loop in object-> it will display properties only
for(let key in obj){
    console.log(key)
}

//for-of loop in object -> not applicable , it gives error related to backend
for(let key of obj){
    console.log(key)
}