let changeContent = ()=>{
    let selectedElem = document.getElementById('demo')
    // console.log(selectedElem.innerText)
    selectedElem.innerText = 'Moye Moye..!'


    // selectedElem.style.color = 'red'; // for single css propoerty apply
    
    // .cssText is used for giving multiple css property
    selectedElem.style.cssText = `color:red;
    background:yellow;font-size:50px; text-align:center`

    
}


let example2 = () =>{
    let tags = document.getElementsByClassName('text')
    // console.log(tags[0])
    tags[0].style.cssText = 'color:orange;background:black'
}

let boxes = () =>{
    let box = document.getElementsByClassName('box')

    box[0].innerText = 'Tata'
    box[1].style.cssText = `color:blue;background:skyblue`
    box[2].style.cssText = `border-radius:50%`;
}

let changeImg = () => {
    let image = document.getElementsByTagName('img');
    image[0].src = "../ImageGallery/Images/img2.jpg"
}

let onoff = () =>{
    let b = document.getElementById('btn')
    let txt = b.innerText

    // without toggle method, we are using this logic for OFF  to ON vice-versa
    if(txt === 'ON'){
        b.innerText = 'OFF'
    }
    else{
        b.innerText = 'ON'
        b.cssText = 'color:red'
    }
}

let dayNightMode = () =>{
    let btnName = document.getElementById('btn1')
    let text = btnName.innerText

    if(text === 'Day'){
        btnName.innerText = 'Night'
        document.body.style.cssText = `background:black;color:white`
    }
    else{
        btnName.innerText = "Day"
        document.body.style.cssText = `background:white;color:black`
    }
}