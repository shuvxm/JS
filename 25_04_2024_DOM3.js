let handleSubmit = (e) =>{
    e.preventDefault();

    let fname = document.getElementsByName('fnm')[0].value;
    let lname = document.getElementsByName('lnm')[0].value;

    console.log(`My Name is ${fname} ${lname}`);
    document.getElementById("Show_Data").textContent = `My Name is ${fname} ${lname}`;

}


let ageCalculator = (e) =>{
    e.preventDefault();
    console.log(e); //SubmitEvent {isTrusted: true, submitter: button, type: 'submit', target: form, currentTarget: form, …}

    console.log(e.target); //SubmitEvent {isTrusted: true, submitter: button, type: 'submit', target: form, currentTarget: form, …}

    let nm = e.target[0].value;

    let dob = Number(e.target[1].value);
    console.log(dob);
    let dateObj = new Date();
    let age = dateObj.getFullYear() - dob;
    //console.log(nm,age)
    let res = document.getElementById('data2');
    res.innerHTML = `<h1>${nm} age is ${age}</h1>`;
}










