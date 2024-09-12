// Creation of  Object in three ways:- 
//direct literals, new keyword, constructor function

//todo 1 : Using Direct Literals
// let obj = {}

// console.log(obj)
// console.log(typeof obj)


let car = {
    carName : 'BMW',
    carColor : 'Black'

}
console.log(car);
// console.log(typeof car);


// Access the property from the object

//todo: using dot(.) operator
let cn = car.carName
console.log(`My fav car is ${cn}`)

console.log(car.carColor)


//todo: Using subScript Operator([""])
// console.log(car["carName"]);
// console.log(car["carColor"]);


// let student = {
//     fnm:"Dinga",
//     lnm: 'Raja',
//     age: 19,
//     marks: '90%'
// }
// console.log(student);

//Modification

//todo: Update the property value
// syntax: objectName.propertyName = newValue

// student.marks = '60%'
// console.log(student);

//todo: Adding the property to the Object
// Syntax: ObjectName.newPropertyName = newPropertyValue
// student.place = 'Goa'
// console.log(student)

//todo: Delete the property
//Syntax: delete(keyword) objectName.PropertyName

// delete student.lnm
// console.log(student);


//todo: Example program 1

// let person = {
//     firstName:"Dinga",
//     lastName:"Raja",
//     place:"Goa",
//     dob:1950,
//     marriedStatus:true,
//     fullName: function(){
//         console.log(`My name is ${this.firstName} ${this.lastName}`);
//     },
//     calculateAge: function(){
//         let age = 2024 - this.dob;
//         console.log(`${this.firstName} age is ${age}`)
        
        // this keyword refers to the current object.
//     }
// }
// console.log(person)
// person.fullName();

// person.calculateAge();


//todo: Example program 2
// let cons = {
//     lg: function(msz){
//         console.log(msz)
//     },
//     wrn: function(wr){
//         console.warn(wr);
//     },
//     err: function(er){
//         console.error(er);
//     }
// }

// console.log("Hello")
// cons.lg("Hai")

// console.warn('Warning');
// cons.wrn("Warn");

// console.error("Error");
// cons.err("Danger")




//todo 2 : Object Creation using new Keyword

// let o = new Object()
// console.log(o)
// console.log(typeof o)

//todo: Example Program
// let car = new Object()
// console.log(car)
// console.log(typeof car)

// car.carName = "KIA"
// car.carColor = "Black"

// console.log(car)



//todo 2 : Object Creation using Constructor functon

// function Person(fnm,lnm,age,place,ph_no){
//         this.fnm = fnm
//         this.lnm = lnm
//         this.age = age
//         this.place = place
//         this.ph_no = ph_no
// }

// let p = new Person("shubham","sharma",21,"Blr",732345)
// console.log(p)
// console.log(typeof p)

