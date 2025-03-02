// Undefined + undefined = NAN
// Types of Functions 

// 1.NAmed FUNCTIONS
// THE FUNCTION WHICH IS DECLARED WITH DECLARED WITH FUNCTION KEYWORD AND HAVE A IDENTINIER NAME IS CALLED AS NAMED FUNCTION


// function demo(){
//     console.log("I am named function");
// }
// demo();


// 2. Anonymus Function
// a function which does  not have any idenitierr  name is called AF, to execute anonymous function we must have  to store them inside a variable 

// let fun = function () {
//     console.log("anonaymus function");
// }
// fun();


// Function with Exprression 
// Expression of storing a function inside  a variabkle is called function expression ,
// Whenever we store a functoion inside  a var we cant call tht fnction with the function identifier, we can only call it with help of value identifier
// WHENEVR WE STORE A FUNCTION INSIDE A VAR CANT 
// let  a = function sum(a,b) {
//     console.log(a+b) ;
// }

// // sum() -> Uncaught referce error
// a(10,20);


// HIGHER ORDER FUNCTIONS 

// function fun(a,b,c) {
//     a(b,c);
// }

// // here  the function fun is accepting  sum as args so in this fucn  it eturns a function is called as Hihger order function 

// fun(sum, 20 , 10) 
// fun(sub, 20,10)
// fun(mul,20,10)
// fun(div, 20 ,10)
// // a function which is passed as the args to another function is called as callback function 

// fun( function (p1,p2){
//     console.log(p1**p2)
// },40,2)


// function sum(p1,p2){
//    console.log(p1+p2) 
// }

// function sub(p1,p2){
//     console.log(p1-p2) 
// }

// function mul(p1,p2){
//     console.log(p1*p2) 
// }


// function div(p1,p2){
//     console.log(p1/p2) 
// }

// // ARROW FUNCTION 
// let a = (a) => a**2;
// console.log(a(2))

// Immediatley invoked function 

// Arrow function 

// let fun = () => (a) => a*a;
// let res = fun();
// console.log(res(5));


// DEFAULT ARGUMENTS
// function add(p1 =0, p2=0)
// {
//     console.log(p1 + p2)
// }

// add(10,20); //30
// add(10)//10;
// add(); //0

// =================ARGUMENTS OBJECT---function keyword is required 

// function details() {
//     return `${arguments[0]} - ${arguments[1]}`
// }

// let v = details("piyush", 30);
// console.log(v)

// debugger

// function gp() 
// {
//     let gpgold = 10, gpland = 20;
//     function  p () {
//         let pgold = 20, pland = 30;
//         function child() {
//             let gchild = 30;
//             console.log(gpgold + pgold + gchild) 
//         }
//         child() 
//     } 
//     p()
// }gp()

// returnin gfunc

// debugger

// function gp() 
// {
//     let gpgold = 10, gpland = 20;
//     return function  p () 
//     {
//         let pgold = 20, pland = 30;
//         return  function child() {
//             let gchild = 30;
//             console.log(gpgold + pgold + gchild) 
//         }
//     } 
// }
// let r1 = gp()
// let r2 = r1()
// r2()

// PRACTIC COUNTER FUNCTION 


// debugger 
// function counter() 
// {
//  let count = 0;
//  return function counter1() 
//  {
//     console.log(++count)
//  }
// }

// let res = counter() ;
// res() 
// res() 
// res()
// =================================================================================================================
// !CURRING 
// Curring is a process of breaking a function which is accepting more than one arguments to the nested functions accepting onr arguments 

// function sum(p1, p2, p3)
// {
//    return (a) => {
//       return (b) => {
//          return (c) => {
//             return a+b+c;
//          }
//       }
//    }
//    // function p1+p2+p3;
// }
// console.log(sum()(10)(20)(30))

// function sum() {
//    return a => b => c => a+b+c;
// }
let str='anj'
let str1='anja'
let str2='anjali'
console.log(str)
console.log(str1)
console.log(str2)

//!by using new keyword

let str3=new String(10)
let str4=new String(10)
console.log(typeof str3 )
console.log(str3==str4)
console.log(str3==str4)

//!property
//?length it is used to calculate the length
let str5="javascript"
console.log(str.length)

/// 
// str[0]='k';// cannot update
console.log(str)
for (i=0;i<str.length;i++){
console.log(str[i])
}

let str6="JavaScript";
//? to lowercase used to convert all the letter of the string to lower case and it will return the the new string it wont give the actual string
console.log(str6.toLowerCase())
//? to uppercase used to convert all the letter of the string to uppper case and it will return the the new string it wont give the actual string
console.log(str.toUpperCase())


//? trim start:- remove spaces from the starting of the string
let name="               Dhoni           ";
console.log(name.trimStart())
console.log(name.length)

//?trim end:-remove spaces from the ending of the string
console.log(name.trimEnd())

//? trim():- it will remove the extra indentation from the starting and ending of the string
console.log(name.trim())
console.log(name.trim().length)  // you can pass the length in the trim end and trim start in both


//!replace()
// it will replace the first occurence of the previous character with the new character
let str7="programming"
console.log(str7.replace('mm','nn'))
console.log(str7.replace('pro',''))


//!replaceAll() 
console.log(str7.replaceAll('g','o'))

//!
let a= prompt('enter the input')
console.log(a.replace(a[0],a[0].toLocaleUpperCase()))