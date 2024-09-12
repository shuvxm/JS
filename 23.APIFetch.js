// let url = fetch('https://api.github.com/users')
// // console.log(url)

// let obj = url.then((response)=>{
//     return response.json();
// })
// // console.log(obj)

// obj.then((arr)=>{
//     arr.map((elem)=>{
//         console.log(elem.login)
//         // console.log(elem.avatar_url)
//         // console.log(elem.starred_url)
//     })

// })


// //-------------------------------------

// let root = document.getElementById('root')
// let url = fetch('https://api.github.com/users')
// // console.log(url)

// let obj = url.then((response)=>{
//     return response.json();
// })
// // console.log(obj)

// obj.then((arr)=>{
//     arr.map((elem)=>{
//         // console.log(elem.login)
//         let {avatar_url,login} = elem //destructing
//         root.innerHTML += `
//             <div class=container>
//                 <div><img src=${avatar_url}></div>
//                 <div class=text>${login}</div>
//             </div>
//         ` 
        
//     })

// })

// https://fakestoreapi.com/products



let a=[1,2,3,4,5,6]

console.log(...a)

function arr(...a){
    console.log(a)
}

arr(1,2,3,4,5,6,7,8,)











