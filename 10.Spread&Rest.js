// //Spread and Rest Operstor


// //! Spread Operator(...)
// let x=[10,20,30]
// let y=[25,35,45]


// let arr=[x,y]
// console.log(arr)


// //todo: Example :Spreading the avlues from the array
// let arr1=[...x,y]
// console.log(arr1)


// let arr2=[x,...y]
// console.log(arr2)

// let arr3=[...x,...y]
// console.log(arr3)


// console.log(...arr3)

// //Rest Opearator
// function num(...a){
//     console.log(a)
// }
// num(100,200,300,400,500)

// let arr=[1,2,3,4,5,6,7,8,9]
// function num(...arr){
//     console.log(arr)
//     console.log(...arr)


//     //!map Method: sqrt
//     let sqrt=arr.map(ele =>ele*ele)
//     console.log(sqrt)

//     //! Sort Method : Arranging
//     let ascending=sqrt.sort((a,b)=>a-b)
//     console.log(ascending)


//     //!fillter Method : Even
//     let even=ascending.filter(ele=>ele%2==0)
//     console.log(even)


//     //reduce Method : Addition
//     let add=even.reduce((preval,curval)=>preval+curval)
//     console.log(add)

// }
// num(1,2,3,4,5,6,7,8,9)


//todo :
// 20,55,45,23,12,80,75,57,60

// let x=[20,55,45,23,12,80,75,57,60]
// let x1=x.sort((a,b)=>{
//    console.log(x1)

// })

// Math function

// let large=Math.max(20,55,45,23,12,80,75,57,60)
// console.log(large)

// let small=Math.min(20,55,45,23,12,80,75,57,60)
// console.log(small)

// function num(...arr){
//     // Math.max(...arr)

// }
// num()

// console.log(Math.PI)

// console.log(Math.pow(2.,3))
// console.log(Math.pow(20,3))

// console.log(Math.round(251.59))
// console.log(Math.floor(251.50))


function power(a,b){
    // Math.pow(a,b)
    console.log(`${a} to the power of ${b} is ${Math.pow(a,b)}`)
}
power(2,4)


console.log(Math.random())
console.log(Math.random()*10)

let randomNum = Math.random()*10000
let otp = Math.floor(randomNum)
console.log(otp)