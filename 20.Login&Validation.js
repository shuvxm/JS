// validation
let lognpage = (e) =>{
    e.preventDefault();

    // let username = e.target[0].value
    // let password = e.target[1].value

    let username = e.target[0]
    let password = e.target[1]

    // console.log(username, password)

    if(username.value === 'Shubh' && password.value === '123456'){
        window.location = '20.Welcome.html'
    }
    else{
        // alert("credentials are not matching")
        let err = `border:solid 2px crimson`
        username.style.cssText = err;
        password.style.cssText = err
    }

}


// whole logic for loginpage & validation
let validation = (e) =>{
    e.preventDefault();

    let user = e.target[0]
    let pass = e.target[1]

    let err = `border:solid 2px red`

    // for validation logic
    if(user.value === "" || user.value === null){
        user.style.cssText = err;
    }
    else if(pass.value === "" || pass.value === null){
        pass.style.cssText = err;
    }

    // Here in else part logic for loginpage same in above
    else{
        if(user.value === 'shubh' && pass.value === 123456){
            window.location = '20.Welcome.html'
        }
        else{
            user.style.cssText = err;
            pass.style.cssText = err;
            alert("credentials not match")
        }
    }

}