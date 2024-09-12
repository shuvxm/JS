let input = document.querySelector('input')

let getValue = (e) =>{
    // console.log(input.value)
    // console.log(e.target.innerText)
    input.value += e.target.innerText
}
let result =()=>{
    input.value =eval(input.value)
}

let empty = ()=>{
    input.value = ""
}









