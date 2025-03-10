// Creating n array
// BY USING LITERALS

// let arr=[10,20,30];
// console.log(arr)

// BY USING NEW ARRAY

// let arr2 = new Array(10, 20, 30);
// console.log(arr2);

// HETEROGENEOUS ARRAY

// we can tore iffrent daat type in aray 

// let arr3 = ["anja", 2, true]
// console.log(arr3)

// // addding elements to arr
// let nums=[];
// nums[0] = 'tea';
// console.log(nums) 

// nums[10] = "coffee"
// console.log(nums) //(11)['tea' , empty*9 ,'coffe']

// update elements of array 
// nums[0] = "filter coffee"
// console.log(nums) // ['filter coffee', 'coffee']

// WHEN WE USE NEW ARRAY() TO CREATE AN ARRAY AND WE PASS ONLY ONE VALUE (NUMBER VAL ) THAT WILL BE TAKEN AS THE SIZE OF ARRAY

// let arr3 = new Array(3);
// console.log(arr3);   //[empty × 3]

// let arr4 = new Array("5");
// console.log(arr4); //['5']

// Length property---------------------------------------------------

// let nums=[1,2,3];
// console.log(nums.length);

//! METHODS IN ARRAY -------------------------------------------------

// PUSH () - add ele at last of arr

// let arr=["mango", "guava", "orange"]
// console.log(arr)

// arr.push("grapes", "strawbery");
// console.log(arr)

// console.log(arr.push("grapes", "strawberry"))//5
// console.log(arr) //5 
// NOTE- IT UPDATES THE ACTUAL ARRAY, IT RETURNS UPADTES LEN OF ARRAY AS OUTPUT 

// 2. POP () 
// it will remove last ele - index of the array

// console.log(arr.pop() );  //strawberry
// console.log(arr)  // (6) ['mango', 'guava', 'orange', 'grapes', 'strawbery', 'grapes']
// =========================Note: It will return the element which has been removed from the array=======================

// SHIFT 
// it is used to remove the ele from 0th index of array
// it will return the removed ele as the output '
// console.log(arr.shift());
// console.log(arr) //['guava', 'orange', 'grapes', 'strawbery', 'grapes']

// UNSHIFT 
// it is used to add the elemnet at 0th idx of array
// it will return the updateed lenght in array 

// console.log(arr.unshift('kiwi', 'papaya')) //['kiwi', 'papaya', 'guava', 'orange', 'grapes', 'strawbery', 'grapes']
// console.log(arr)

// Slice(s.i, e.i)
// it is used to get the specific part of array , it will not modify the acyual array 
// let res = arr.slice(1,4) //(3) ['papaya', 'guava', 'orange']
// console.log(res)
// console.log(arr) //(7) ['kiwi', 'papaya', 'guava', 'orange', 'grapes', 'strawbery', 'grapes']





// Splice (starting idx , dltCount, newElement, newElement2, ....newElementn)
// Splice is used to add or remove elements from an array at a particular index, 
// it will modify the actual array

// let fruits =["kiwi", "strawberry", "papaya", "orange"];
// Only removing
// console.log(fruits.splice(1,2));
// console.log(fruits) //(7) ['kiwi', 'papaya', 'guava', 'orange', 'grapes', 'strawbery', 'grapes']

// only adding
// console.log(fruits.splice(1,0,"grapes", "mango") )   //(2) ['kiwi', 'orange']
// console.log(fruits) //4) ['kiwi', 'grapes', 'mango', 'orange'] 

// Removing and adding 
// fruits.splice(1,1,"guava")
// console.log(fruits) //['kiwi', 'guava', 'mango', 'orange']


// let string = ["Virat is a great player"]
// let arr = string.split("");
// arr.splice(3,0);
// arr.toString();

//JOIN()

// let fruits = ["kiwi","strawberry", "pappaya", "orange","strawberry",];
// let str =fruits.join("$");
// let str1 = fruits.join("")
// console.log(str)
// console.log(str1)


// indexOf (element) 
// console.log(fruits.indexOf("grapes")) //not present insid ethe friys = -1 
// console.log(fruits.indexOf("orange")) //3


// lastIndexOf(element)
// last ocurence index
// console.log(fruits.lastIndexOf("strawberry")) //4

// at(index)
// eleemnt at a particular idx
// console.log(fruits.at(3)) //orange
// console.log(fruits.at(7)) //undefined 

//reverse()
// let nums = [10,32, 56, 2,74]
// nums.reverse()
// console.log(nums)

// sort() 
//iT WIll modify the actual array , we have to pass a cllback function with two parameters otherwise it will be comparing the first digits of each ele

// let arr = [11,32, 56, 2,74]
// arr.sort()
// console.log(arr)

// arr.sort((a,b) => a-b); //ascending
// console.log(arr);

// arr.sort((a,b) => b-a); // reverse- [74, 56, 32, 11, 2]
// console.log(arr);
 
// if we have elements as string than it will be comparing the ASCII value of the first char of each element
// let fruits = ['apple', 'kiwi', 'strawberry', 'pappaya', 'kiwi']
// console.log(fruits.sort())

// CONCAT 
// USED TO MERGE MULTIPLE ARRAYS, IT WONT MODIFY THE ORIGINAL ARRAY

// let arr =[10,20,30]
// let arr1 =[101, 201, 301]
// let arr2 = [1011, 2011, 3011]
// let res = arr.concat(arr1, arr2)
// console.log(res)

// includes
// let arr =[10,20,30]
// console.log(arr.includes(20)) //true
// console.log(arr.includes(202))   //false


// fill() or fill(value, start_idx, end_idx)

let arr = new Array(10);
console.log(arr)   //[empty × 10]
arr.fill(0, 3,6)     //It will filll 0 from idx 3 to 5 (ending index = -1)
console.log(arr)    // [empty × 3, 0, 0, 0, empty × 4]

