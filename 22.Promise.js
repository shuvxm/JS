// Promise Object

// let p  = new Promise((res,rej)=>{
//     if(false){
//         res("selected")
//     }
//     else{
//         rej("rejected")
//     }
// })
// console.log(p)

// p.then((data)=>{
//     console.log(data)
// })

// p.catch((err)=>{
//     console.log(err)
// })



// async() & await()
let fun1 = () =>{
    return "Welcome"
}

let fun2 = () =>{
    return new Promise((res)=>{
        setTimeout(()=>{
            res("to")
        },5000)
    })
};


let fun3 = () =>{
    return "Mock..."
}

let main = async () =>{
    console.log(fun1())
    console.log(await fun2())
    console.log(fun3())
}
main()













