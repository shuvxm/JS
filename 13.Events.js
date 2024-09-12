function fnm(){
    console.log('my name is Srikanth')
}



function doubleClick(){
    console.log('Cilck Double Time')
}

function singleClick(){
    console.log('clicked single time')
}

function key1(){
    console.log("on key down")
}

function key2(){
    console.log('on key press')
}

function key3(){
    console.log('on key up')
}
function chill(){
    console.log('execting')
}

let handle=(e)=>{
    e.preventDefault()

    console.log('hello')
    console.log(e)
    console.log(e.target)
    console.log(e.target[0])
    console.log(e.target[0].value)

    let fnm=e.target[0].value
    let lnm=e.target[1].value
    
    console.log(`my name is ${fnm} ${lnm}`)

}