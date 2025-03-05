// Declaring an array with three elements
// let fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits)

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);


// HIGER ORDER FUNCTION----> FUNCTION INSIDE FUNCTION 

// const arr = [5,1,3,2,6]

// function double(x) {
//     return x*2;
// }

// function triple(x) {
//     return x*3;
// }

// const output = arr.map(triple)
// console.log(output)

// BINARY -----------------
// function binary(x){
//     return x.toString(2);
// }

// const output= arr.map(binary);
// console.log(output);

// ==============FILTER=================

// const arr = [5,1,3,2,6]
// Filter odd values 
// function isOdd(x)
// {
//     return x%2;
// }
// const output = arr.filter(isOdd);
// console.log(output)

// -------------

// function isEven(x)
// {
//     return x%2==0;
// }
// const output = arr.filter(isEven);
// console.log(output)

// function greaterThanFour(x){
//     return x>4
// }
// const output = arr.filter(greaterThanFour);
// console.log(output);

// REDUCE--------------Multiple val --->Single Value

const arr=[5,1,3,2,6]
//=========SUM=============
// const output= arr.reduce(function(acc, curr)
// {
//     acc= acc+ curr;
//     return acc;
// }, 0);
// console.log(output);

// =========FINDMAX==========

// const output  = arr.reduce(function(max, curr){
//     if(curr>max){
//         max=curr;
//     }
//     return max;
// },0);
// console.log(output);

//REAL WORLD EXAMPLE

const users =[
    {firstName: "akshay" , lastName:'sai' ,age:26},
    {firstName: "BNNkshay" , lastName:'PPai' ,age:26},
    { firstName: "PPkshay" , lastName:'Dai' ,age:12},
    { firstName: "OMhay" , lastName:'Fai' ,age:76}
    
]
// const output = users.map((x) =>
//     x.firstName + " " + x.lastName);
// console.log(output)

// FIND AGE UNIQUE

const output= users.reduce(function(acc, curr){
    if(acc[curr.age]){

    }
    else{
       acc[curr.age] = 1  
    }
}, {});
console.log(output)