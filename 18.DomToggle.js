let onoff = () =>{
    let btn = document.getElementsByTagName('button')

    // console.log(btn[0].classList)

    btn[0].classList.add('abc')
    // console.log(btn[0].classList)
    
    btn[0].classList.remove('on')
    // console.log(btn[0].classList)

    //pqr is not present so it will add pqr as classname
    btn[0].classList.toggle('pqr')
    console.log(btn[0].classList)


    //now pqr is present so it'll remove class as pqr
    btn[0].classList.toggle('pqr')
    // console.log(btn[0].classList)

    // btn[0].classList.contains("abc")
    // console.log(btn[0].classList)
    
}



let div = document.getElementsByTagName('div')

let redColor = () =>{
    div[0].classList.add('red')
    div[0].classList.remove('yellow')
    div[0].classList.remove('green')

}

let yellowColor = () =>{
    div[0].classList.add('yellow')
    div[0].classList.remove('red')
    div[0].classList.remove('green')
}

let greenColor = () =>{
    div[0].classList.add('green')
    div[0].classList.remove('red')
    div[0].classList.remove('yellow')
}

let onoffBtn = ()=>{
    let btn = document.getElementById('btn')

    let b1 = btn.classList.toggle('on')
    let b2 = btn.classList.toggle('off')

    console.log(b1, b2);

    let text = btn.innerText
    (text === 'ON')? btn.innerText = 'OFF' : btn.innerText = 'ON';
}