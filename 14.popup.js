function fun(){
    alert('Im giving alert msg to u...');
}



let fullName = () =>{
    let fnm = prompt("Enter first name");

    alert(`My name is ${fnm}`);
}

let add = () =>{
    let num1= Number(prompt("Enter first no"));
    let num2 = Number(prompt("Enter second no"));

    let sum = num1+num2;

    alert(`sum of ${num1} and ${num2} is ${sum}`);
}

let printDetails = () =>{
    let fnm = prompt("Enter name")

    if(fnm === '' || fnm === null){
        let bool = window.confirm("Do u want to exit...?")
        bool ? alert('Thankyou...!') : printDetails()
    }
    else{
        alert(`My name is ${fnm}`);
    }
    
}