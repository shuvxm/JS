// let a = 10;
// let b = 10.5;
// let c = " shubham";
// let sum = a+b+c;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(sum + " -> "+typeof sum)


// let x = a+c;
// console.log(x);
// console.log(typeof x);

// let x1 = a+b+c;
// console.log(x1);

// console.log(10+20+'10');
// console.log(10+'10'+20)
// console.log('20'+10+20);

// console.log(10+10)
// console.log(10+'10')
// console.log(10*10); //100
// console.log(10*'10'); //100

// console.log("----------")
// let n = '3'+'3'-'3';
// console.log(n); //30
// console.log(typeof n)






// let exp = 10+20/5*4
// console.log("the exp value is: "+exp);

// let n1 = 10
// let n2 = 20
// let sum1 = n1+n2
// console.log(sum1)
// console.log(n1+n2)
// console.log(n1,n2)

// console.log(n1,n2, n1+n2)
// console.log(10,25+20,"Hai")
// console.log(10, 25+20+'Hai')
// console.log(10+25+20,"Hai");



// Concatenation
// let fname = "Dinga"
// let lname = "Raja"
// let age = 25

// let p1 = "My name is "+fname+" " +lname+" & age is "+age
// console.log(p1)

// let p2 = "My name is", fname,lname,"& age is",age
// console.log(p2); // error bcz we cant use , for using conactenation n storing value in variable, it is suitable is displaying statement.

// console.log("My name is", fname,lname,"& age is",age)

//Interpolation
// let p3 = `My name is ${fname} ${lname} & age is ${age}`
// console.log(p3);

// console.log(`My name is ${fname} ${lname} & age is ${age}`)


//todo : Example 2
// let fname = "Shubham"
// let lname = "Sharma"
// let place = "Bihar"
// let deg = 'BE'
// let stream = 'CSE'
// let yop = 2024
// let dob = 2003
// let age;
// age = yop-dob;

//Interpolation
// console.log(`My name is ${fname} ${lname}. I'm from ${place}. I will be completed ${deg} in the stream of ${stream} in ${yop} & my age is ${age}`)

// by using concatenation + operator
// console.log("My name is "+fname+" "+lname+". I'm from "+place+". I will be complated "+deg+" in the stream of "+stream+" in "+yop+" & my age is "+age);


// Relational Operator

// todo: Equality & strictly Equality Operator
// let a = 10
// let b = '10'

// console.log(a==b) //true
// console.log(a===b) //false

// console.log(100==100); //true
// console.log(100===100);

// console.log(100 == "100")
// console.log(100 === "100")

// console.log(100 != 100)
// console.log(100 !== 100)

// console.log(100 !== "100")
// console.log(100 != "100")




// Logical Operator
// let exp1 = (10 === 10) && (10 === "10")
// console.log(exp1)


// let a = 10
// let b = "10"

// console.log(a, typeof a)
// console.log(b, typeof b)

// console.log(a == b)
// console.log(a === b)

// console.log((a==b) && (a===b))
// console.log(true && false)

// console.log((a==b) || (a===b))
// console.log(true || false);


// Bitwise Operator
// console.log(5 & 1)
// console.log(5 |  1)


// Assignment Operator
// let a = 10
// console.log(a);

//todo : Short Hand Operator
// a += 2   // a = a+2
// console.log(a)

// a -= 5  // a= a-5
// console.log(a)

// a *= 3 // a = a*3
// console.log(a)

// a /= 3      // a = a/3
// console.log(a);



// Unary Operator   --> Increment & Decrement
// let a = 10
// let b = 5
// let c = a++ + ++b + a-- + --b
// console.log(a,b,c)


// Ternary operator

// let a = 10
// let b = "10";

// (a==b) ? console.log("Hello") : console.log('Bye');
// (a===b) ? console.log( 'Hello') : console.log('Bye')


let x = 10
let y = "10";

(x == y)? console.log("Yes, it is true"): console.log("Yes it is false");
(x !== y)? console.log("Yes, it is true"): console.log("Yes it is false");
(x === y)? console.log("Yes, it is true"): console.log("Yes it is false");
(x != y)? console.log("Yes, it is true"): console.log("Yes it is false");
