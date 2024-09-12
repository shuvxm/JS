// let generateOTP = () => {
//     let randomNum = Math.random()*10000

//     let otp = Math.floor(randomNum)

//     if(otp>=1000 && otp<10000){
//         console.log(otp)
//     }
//     else{
//         generateOTP()
//     }
// }
// generateOTP()

// reduce the line
let generateOTP = () => {

    let otp = Math.floor(Math.random()*10000);
    (otp>=1000 && otp<10000) ? console.log(otp) : generateOTP();

}
generateOTP()