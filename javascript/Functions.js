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

function fun(a,b,c) {
    a(b,c);
}

// here  the function fun is accepting  sum as args so in this fucn  it eturns a function is called as Hihger order function 

fun(sum, 20 , 10) 
fun(sub, 20,10)
fun(mul,20,10)
fun(div, 20 ,10)
// a function which is passed as the args to another function is called as callback function 

fun( function (p1,p2){
    console.log(p1**p2)
},40,2)


function sum(p1,p2){
   console.log(p1+p2) 
}

function sub(p1,p2){
    console.log(p1-p2) 
}

function mul(p1,p2){
    console.log(p1*p2) 
}


function div(p1,p2){
    console.log(p1/p2) 
}

// ARROW FUNCTION 
let a = (a) => a**2;
console.log(a(2))