// Strings

// let str = "JavaScript"
// console.log(str)
// console.log(typeof str)
// console.log(str.length)
// console.log(str[3])

// console.log(str.lastIndexOf())

// startswith() method
// console.log(str.startsWith('j'))
// console.log(str.startsWith('J'))
// console.log(str.startsWith('Java'))
// console.log(str.startsWith('s'))
// console.log(str.startsWith(' ',4))


// endswith() method
// console.log(str.endsWith('t'))
// console.log(str.endsWith('z'))
// console.log(str.endsWith('a', 4))

// let para = "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo quo facilis ex! Voluptas, illo quam, reprehenderit vitae tempora voluptatum, cumque ipsa omnis et culpa sed minus natus magnam repellat. "
// console.log(para)

// console.log(para.toUpperCase())
// console.log(para.toLowerCase())

//charAt()
// let str = 'Shubham'
// console.log(str.charAt(1))
// console.log(str.charAt(8))

// console.log(str.charAt(0))
// console.log(str.charCodeAt(0))

// let str = 'javascript'
// console.log(str.substring(0,4))  //java
// console.log(str.substring(2,5))  //vas
// console.log(str.substring(6,9))  //rip
// console.log(str.substring(6,3))  //asc
// console.log(str.substring(4))    //script

// //substr method

// console.log(str.substr(0,4)) //java

// // 2nd position - (4)  how many value you are printing in substr method
// console.log(str.substr(2,4))   //vasc
// console.log(str.substr(5))     //cript

// console.log(str.slice(0,))

//repeat method
// let str = "Welcome "
// console.log(str)
// console.log(str.repeat(3))

//trim method
// let str = "   Tell me something       "
// console.log(str)
// console.log(str.length)

// let t1 = str.trim()
// console.log(t1)
// console.log(t1.length);

// let t2 = str.trimStart()
// console.log(t2)
// console.log(t2.length)


// let t3 = str.trimEnd()
// console.log(t3)
// console.log(t3.length)



//split method
// let str = 'just looking like a wow'
// console.log(str)

// console.log(str.split())
// console.log(str.split(''))
// console.log(str.split(' '))

//join(), concat(),slice()  -> do it urself


//fromCharCode method
// let a = String.fromCharCode(65,66)
// console.log(a)

// for(let i = 65; i<=90;i++)
// {
//     let b = String.fromCharCode(i)
//     console.log(b)
// }


//example program

// WAP to reverse a string --> convert to array by split method then reverse() method apply(in string directly we can't use reverse function) then join it.
// let program1 = (str) =>{
//     console.log(str);
    
//     let res = str.split('').reverse().join('')
//     console.log(res);

// }
// program1('Hello');

// WAP to check whether the given string is palindrome or not

let checkPalindrome = (str) =>{
    // console.log(str)

    let res = str.split('').reverse().join('')
    console.log(res)

    // if(str === res){
    //     console.log('it is palindrome')
    // }
    // else
    //     console.log('it is not palindrome')

    return (str === res) ? 'Palindrome' : 'Not palindrome'
    
}
console.log(checkPalindrome('MADAM'))
console.log(checkPalindrome('hello'))

