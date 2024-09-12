function fun(){
    console.log('Im in js class')
}

function Interval(){
    console.log("Set interval works...!")
}

// function printNum(){
//     let i = 0;
//     for(let i = 0; i<100;i++){
//         console.log(i);
//     }
// }

let num = 0;
let printNum = () =>{
    console.log(num++)
}

let reset = () =>{num = 1}