// for in 

// for in will iiterate through the index value
// let arr= [10,90, 12,45,30]
// for(let i in arr){
//     console.log(i)
//     console.log(arr[i])
// }

// for of 
// for of will iterate through  the elements of the array
// console.log("for of loop started")
// for(let i of arr)
// {
//     console.log(i)
// }


// forEach will accept a callback function , and that callback fucntion will b executed for each and every element of the array , that callback function can have three parametres
// para1 will iterarte through elements of the array 
// para2 will iterarte thriugh index of the array 
// para3 will represent the original array 

// arr.forEach((ele, i, p3) => {
//     console.log(ele, i)
//     console.log(p3)
// })

// some (callback function)
// let op =arr.some((ele, i) => {
//     console.log("executed", i)
//     return ele%2 !== 0;
// })
// console.log(op)

// every
// let op =arr.every((ele, i) => {
//     console.log("executed every", i)
//     return ele%2 == 0;
// })
// console.log(op)

// eaxmple 2 

// let arr = ["", NaN, null, undefined, 46, 12, 30];
// let op = arr.some((ele, i) => {
//     console.log("some", i)
//     return ele;
// })
// console.log(op)

// every(calllback)
// let op = arr.every((ele, i) => {
//     console.log("every", i)
//     return ele;
// })
// console.log(op)

// find (callback)
// let fruits =["strwaberry", "sugar", "mango", "grapes", "orange", "peach", "guava"]
// let filteredOp = fruits.find((el, ind) =>
// {
//     console.log("executed for", ind + 1, " times");
//     return el.charAt(0) === 's';
// })

// console.log(filteredOp)

// Names strting wiht  vowel ...filter them 
let words = ["anjali", "sanj", "sakshi", "swati", "okesh", "jugni", "elepha", "igest", "love", "umbers"];
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];


const filteredWords = words.filter(word => vowels.includes(word[0]));

console.log(filteredWords);


