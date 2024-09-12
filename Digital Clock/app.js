let digitalClock = () =>{
    let span  = document.getElementsByTagName('span')

    let dateobj = new Date();

    span[0].innerHTML = dateobj.getHours()
    span[1].innerHTML = dateobj.getMinutes()
    span[2].innerHTML = dateobj.getSeconds()

    span[3].innerHTML = dateobj.getDate()
    span[4].innerHTML = dateobj.getMonth()+1
    span[5].innerHTML = dateobj.getFullYear()

    span[6].innerHTML = dateobj.getDay()+1
   
    
}

// span[0].innerText =  dateobj.toLocaleDateString()
// span[1].innerText = dateobj.toLocaleTimeString()