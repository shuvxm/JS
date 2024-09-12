// let arr = [10,"hai",true,undefined,null,()=>{},{},[]]

// console.log(arr)
// console.log(typeof arr)  // object

// console.log(arr[2])
// console.log(arr.length)


// Modification of array
// let arr = [10,20,30,40,50]
// arr[2] = "Hai"
// console.log(arr)


// // addition
// arr[6] = 500
// console.log(arr)
// console.log(arr[5])  // undefined

// delete arr[1]
// console.log(arr)



// Q./ WAP to display only the numbers in this array list by using general function

// let arr = ["Hii", 10, true, 200, 'Bye', false]

// function arrProgram(){
//     for(let i=0; i<arr.length;i++){
//         if(typeof(arr[i]) === 'number'){
//             console.log(arr[i])
//         }
//     }
// }

// arrProgram();



// Q. WAP to display only even numbers from this array list by using arrow function

// let arr1 = ["Hii", 101, true, 200, 'Bye', false, 65, 78]

// function Even(){
//     for(let i = 0; i<arr1.length;i++){
//         if(typeof(arr1[i]) === 'number'){
//             if(arr1[i] % 2==0){
//                 console.log(arr1[i])
//             }
//         }
       
//     }
// }

// Even();







// Array Methods

// let arr = [10,20,30,40,50]
// console.log(arr);

// push() -> used to add the array elements at the end
// arr.push('added',true)
// console.log(arr)

//pop() -> used to remove/ delete the array elements at the last from array list

// let x = arr.pop()
// let y = arr.pop()
// console.log(arr)

// console.log("Removed elements = "+x,y);


// shift() -> used to  remove the array element at the first from array list
// arr.shift()
// console.log(arr)

// unshift() -> used to add the array element at the first
// arr.unshift("Ram")
// console.log(arr)



//splice() -> used to add / remove the array elements from the array list

// let arr = [10,20,30,40,50]
// deleting array element
// let removeElem = arr.splice(1,2)
// console.log(arr)
// console.log("Deleted array elements = " + removeElem)

// // adding array element
// arr.splice(2,0,"new1",true,"new2")
// console.log(arr)

// // deleting & adding the array element
// let x = arr.splice(3,1,false,"new3")
// console.log(arr)
// console.log("Removed elements = "+ x)



// let arr = [2,5,6,8,4]
// console.log(arr)

// console.warn("using for loop");
// function add1Number(){
//     for(let i = 0; i<arr.length;i++){
//        console.log(arr[i]+5)
//     }
     
// }
// add1Number();


// map method -> used to do common operation for the array elements
// console.warn("Using map method");
// arr.map((element, index, arr)=>{
//     // console.log(element)
//     // console.log(index)
//     console.log(element+5);

//     // console.log(arr)
// })


// multiplication



// program
// let arr1 = [10, "hii", "bye", true,600, false, 1000]
// arr1.map((element)=>{
//     if(typeof(element) === 'number' ){
//         console.log(element)
//     }

// })


// let arr = [2,4,8,3,5]
// console.log(arr)

// let x = arr.map((element)=>{
//     let res = element+2;
//     return res;
// })
// console.log(x);


// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr);

// let res = arr.map(element => element*element)
// console.log(res)


//filter method: used to filter the array elements based on the condition

// todo: print only even no in this array
// let arr4 = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// console.log(arr4)

// let even = arr4.filter((element)=>{      
//         return element %2 ==0;
// })
// console.log(even)

// todo: Example 2
//WAP to print only string from this array list

// let arr = [10,"hai", true,undefined,null,300,'Bye',false]
// console.log(arr)

// let str = arr.filter((element)=>{
//        return typeof(element)==='string'               
// })
// console.log(str);




// reduce method

// Example 1
// let arr = [2,3,4,5,6,7]
// console.log(arr)
// let add = arr.reduce((preVal, curVal)=>{
//         console.log(`Previous value = ${preVal}, Current value = ${curVal}`)
       
//         let sum = preVal + curVal;
//         return sum;
// })
// console.log("final result: "+add)



// Example 2
// let arr3 = [10, 20,true,5000,'Bye',null+1,200,false]
// console.log(arr3)

// let add = arr3.reduce((preVal, curVal)=>{
//         console.log(`Previous value = ${preVal}, Current value = ${curVal}`)
       
//         let sum = preVal + curVal;
//         return sum;
// })
// console.log("final result: "+add)



//Sort Method 
// let arr=[5,6,3,1,2,3,4]
// console.log(arr)

// let s1=arr.sort()
// console.log(s1)

// let arrStr=['grapes','banana','mango','apple','kivi']
// console.log(arrStr)


// let s2=arrStr.sort()
// console.log(s2)


let arr3=[63,64,8,82,49,5,78,3,92,37]
console.log(arr3)

let s3=arr3.sort((a,b)=>{
    return b-a
})
console.log(s3)


// let arr1=[63,264,8,882,420,50,758,92,375]
// console.log(arr1)

// let s4=arr1.sort((a,b)=>{
//     return b-a
// })
// console.log(s4)
// console.log(s4[1])


// let students=['abbas','ram','darshan','jagannadh','dinga','dingi','ram','rani','darshan']
// console.log(students)
// let s1=students.indexOf('ram')
// console.log(s1)




// let s2=students.lastIndexOf('ram')
// console.log(s2)

// //Includes Method

// let s3=students.includes('ram')
// console.log(s3)



//slice method

// let arr=[25,65,64,23,81,20,77,57,55,88]
// console.log(arr)

// let s1=arr.slice(0,5)
// console.log(s1)


// console.log(arr.slice(4,8))


// console.log(arr.slice(2,-2))
// console.log(arr.slice(-2,3))


//join Method

// let arr=['dinga','weds','dingi']
// console.log(arr)

// let j1=arr.join('  ')
// console.log(j1)

// //Reverse Method
// let r1=arr.reverse()
// console.log(r1) 


//flat Method

// let arr=[10,20,30,[1,2,4,5],40,50,[6,7,8,9]]
// console.log(arr)
// f1=arr.flat()
// console.log(f1)

// //concat Method

// let c1=f1.concat(100,200)
// console.log(c1)



