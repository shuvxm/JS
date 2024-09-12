const root = document.querySelector('#root');
let url = fetch('https://fakestoreapi.com/products')
console.log(url)



//1st way by then method without async

let obj = url.then((response)=>{
    return response.json()
})
console.log(obj)

obj.then((arr)=>{
    
    arr.map((elem)=>{
        let {title,image,price,description,category,rating} = elem
        root.innerHTML += `
            <div class=container>
                <div><img src=${image}></div>
                <div class=info>
                    <div><h2>${title}</h2></div>
                    <div><h3>$${price}</h3></div>
                    <div><p>${description}</p></div>
                    <div><h5>${category} type</h5></div>
                    <div><h6>${rating.rate}* [${rating.count} ratings]</h6></div>
                </div>

                
            </div>
        `
        // console.log(elem.description)
        // console.log(typeof elem)
        // console.log(elem.image)
        console.log(elem,rating)

    })
})











// 2nd way by using async function

// const URL = 'https://fakestoreapi.com/products';
// const getdata = async () => {
//     console.log("Getting data...")
//     let response = await fetch(URL)
//     console.log(response)

//     let data = await response.json()
//     console.log(data)

//     root.innerText = data[0].text;

    
// }


