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

// let arr = new Array(10);
// console.log(arr)   //[empty × 10]
// arr.fill(0, 3,6)     //It will filll 0 from idx 3 to 5 (ending index = -1)
// console.log(arr)    // [empty × 3, 0, 0, 0, empty × 4]

// -------------------------------

// //!ARRAY___________________________________________________________________________________________________________

// //!creating an array____________________________________________________________________________________________________
// //?By using literals_______________________________________________________________________________________________
// let arr=[10,20,30];
// console.log(arr)
// //?by using new Array______________________________________________________________________________________________
// let arr2=new Array(10,20,30);
// console.log(arr2)
// //? heterogenous array_______________________________________________________________________________________________
// let arr3 = new Array("Rohit",30,true);
// console.log(arr3)
// //!updating array____________________________________________________________________________________________________
// let num=[];
// console.log(num)//[]
// num[0]="tea"
// num[1]="coffee"
// console.log(num)//['tea', 'coffee']
// //_______________________________________________________________________________________________________________________
// let nums=[];
// nums[4]="tea"
// console.log(nums)//[empty × 4, 'tea']
// nums[0]="coffee"
// console.log(nums)//[ coffee,empty × 4, 'tea']
// //!we can update and overwrite the elements of array_______________________________________________________________________
// nums[4]='a'
// console.log(nums)//[empty × 4, 'a']
// //

// //!when we use the new array() to create an array and we pass only  one value(number value) that will be taken as the
// //!the size of an array
// let arr4= new Array(5);
// console.log(arr4)//[empty× 5]

// let arr5= new Array("5");
// console.log(arr4)//['5']

// //!properties of an array___________________________________________________________________________________________________
// //? length__________________________________________________________________________________
// let names=[];
// console.log(names.length)//0
// names[3]="abc"
// console.log(names.length)//4
// let naes=[1,2,3];
// console.log(naes.length)//3

// //!methods_______________________________________________________________________________________________________
// //?1.push()==>add the elements at the last of an array ,we can add whatever elements we have to add as an
// //?           argument, we can pass more than one arguments also

// let arr=["mango","apple","grapes"];
// arr.push("papaya","banana");
// console.log(arr);
// //! note it will update the actual array.it return updated length of the array as output

// //? 2. pop()==> it will remove the element from the last index of the array
// console.log(arr.pop())//banana

// //?3. shift() ==>> it is used to remove the element from 0th index of the array
// //? it will return the removed element as the output------------------------------------------------------------------

// console.log(arr.shift());//mango
// console.log(arr)// ['apple', 'grapes', 'papaya']

// //? 4. unshift()==> it is used to add the element at the 0th index of the array
// console.log(arr.unshift('kiwi','bana'));
// console.log(arr)

// //? 5. slice()==>it is used to get the specified part of an array, it will not modify the actual array
// //? it will return the new array

// let res=arr.slice(1,4);
// console.log(res)//['bana', 'apple', 'grapes']
// console.log(arr)//['kiwi', 'bana', 'apple', 'grapes', 'papaya']

// //? 6. splice()==>(strating index,delete count,newElement,newElement1,newElement2--------------------newElementn)
// //? splice is used to add or remove the elements from an array at a particular index
// let fruits=["kiwi","stawberry","papya","orange"]
// //? only deleting
// let fruit=fruits.splice(1,2);
// console.log(fruit)//["kiwi","orange"]
// //? only adding
// fruits.splice(1,0,"grape","mango")
// console.log(fruits)  //? ['kiwi', 'grape', 'mango', 'orange']

// //? removing and adding
// fruits.splice(1,1,"guava");
// console.log(fruits)  //? ['kiwi', 'guava', 'mango', 'orange']

// let str="Virat is a great player";
// let arr1 =str.split(" ");
// console.log(arr1.splice(3,1))
// console.log(arr1)
// arr1.toString//it will return coma(,) in between
//console.log(arr1.join(" "))

//? 7 join()
//?
// let fruits =["kiwi","strawberry","papaya","orange" ,"stawberry"]
// let str=fruits.join("$")
// let str1=fruits.join(" ")
// console.log(str)
// console.log(str1)

// //? 8. indexOf()
// //? first occurence index
// console.log(fruits.indexOf("grapes")) //! -1 element is not present inside the array
// //? 9. lastIndexOf()
// //? last occurence index
// console.log(fruits.lastIndexOf("stawberry"))  //!4
// //? 10. at(index)
// //? element at a particular index
// console.log(fruits.at(3)) //! orange
// console.log(fruits.at(8)) //! undefined

//? 11. reverse()
//? it will modify original array
// let nums=[10,32,45,67,12]
// nums.reverse()
// console.log(nums)

// //? 12. sort()
//? if herrogenous data is there then don't perform sorting
//?it will modify the actual array ,we have to pass a callback function with two parameters otherwise
// ? it will be comparing the first digits of each element
// let arr=[31,45,2,12,];
// console.log(arr.sort((a,b)=>a-b)); //! return ascending order
// console.log(arr.sort((a,b)=>b-a))   //! return desencing order

// let arr=["kiwi","orange","papaya","apple","strawberry"]
// console.log(arr.sort())//! based on ascii value it wil, return the array ['apple', 'kiwi', 'orange', 'papaya', 'strawberry']


//? 13. concat()
//? it is use to merge multiple array ,it won't modify the original array
// let arr=[10,20,30]
// let arr1=[101,201,301]
// let arr3=[201,200,701]
// console.log(arr.concat(arr1,arr3))

// //? 14 includes()
// console.log(arr.includes(20))// return true
// console.log(arr.includes(200))// return false

//? 15 fill( value, start index ,end index)
// let arr11 = new Array(10)
// //console.log(arr11.fill(1));
// arr11.fill(0,3,6)//it will fill 0 from index 3 to 5(ending index-1)
// console.log(arr11)

//! LOOPS------------------------------------------------------------------------------------------------------------------------------------
//? 1. For in loop
//? it will iterate through the index values
//let arr=[21,20,46,45,50]
//for(let i in arr){
   // console.log(i);
   // console.log(arr[i])
//}
//? 2. For of
//? for of will iterate through the elements of the array
//for(let j of arr){
   //console.log(j);
  // console.log(arr[j]) //!it will return undefine
//}
//? 3. For each (callback function)===================================================
//? foreach will accept a callback function and that callback function will be executed for each and every element of array,
//? that callback function can have three parameters
//? parameter 1 -- will iterate through the elements of the array  ---> el
//? parameter 2 -- will iterate through index of the array ----> i
//? parameter 3 -- will represent the original array --->p3
//? arr.forEach(el,i,p3)=>{
//?   console.log(el,i); console.log(p3);
//?    }
// arr.forEach((el,i)=>{
//     console.log(el,i)
//})

//? some (callback function)-------------------
// let arr=[10,20,45,90];
// let op = arr.some((el,i)=>{
//   console.log("executed", i);
//   return el%2!==0;
// })
// console.log(op)

//?every (callback function)================================
// let arr=[10,30,60,50]; //[30,60,nan null] 
// let op = arr.every((el,i)=>{
//      console.log("executed ", i)
//      return el%2 == 0;
// })
// console.log(op)
// let arr=[10,30,"",NaN,60,50]; //[" ",NAn,null,34,56,]
// let op = arr.every((el,i)=>{
//      console.log("executed ", i)
//      return el;
// }
//? find(callbackfn..........)
// let arr=["mango","stawberry","Grapes","gauva"]
// arr.find((el,i,arr)
// let op = arr.find((el,i)=>{
//  console.log("executed",i)
//  return el.charAt(0) =="s"
// })
// console.log(op)
//if it is having condition true it will return that only //it will return the first value after checking condition ,won't check other element
//if there is no condition it will return undefined

//! filter(callbackfn...)  it will return new array
//? it is used to filter the array according to condition
// let nums=[12,34,2,3,7]
// let op1 = nums.filter((el,i,arr)=>{
//    return el%2!==0;
// })
// console.log(op1)
//----------------------------------------------------------------------------------------------------------------------------------
// let names= ["riya","new","isha","eagle"];
// let res =names.filter((el,i)=>{
// !  return['a','e','i','o','u'].includes(el.charAt(0).toLocaleLowerCase())
// }) 
//----------------------------------------------------------------------------------------------------------------------------
//console.log(names.filter((el,i,arr)=>{  
   // return el.charAt(0).toLowerCase== 'a' || 
   //        el.charAt(0).toLowerCase== 'e' || 
   //        el.charAt(0).toLowerCase== 'i' || 
   //        el.charAt(0).toLowerCase== 'o' || 
   //        el.charAt(0).toLowerCase == 'u';
//-----------------------------------------------------------------------------------------------------
   // let sal=[20000,30000,40000,50000,10000];
   // let result=sal.filter((el,i)=>{
   //    return el>20000
   // })
   // console.log(result)

   // let names=["akshay","shekar","om","rohit","abhishek"];
   // let res=names.filter((el)=>{
   //     return el.length==6
   // })
   // console.log(res)

   // let mixedArray= [120,"hii",false,undefined,null,"virat",true,130];
   // let res =mixedArray.filter(el=>{ return (typeof el === 'number')
   // })
   // console.log(res)
   // let res1 =mixedArray.filter((el,i)=>{
   //    return (typeof el === 'string')
   // })
   // console.log(res1)
   // let res2 =mixedArray.filter((el,i)=>{
   //    return (typeof el === 'boolean')
   // })
   // console.log(res2)
//?---------------------------------------------------------------------------------------------------------------
//only truthy value---------------------
   //console.log(mixedArray.filter(v=>v))//12o,"hii","virat",true,130
//?-----------------------------------------------------------------------------------------------------------
   // let sal =[30003,4000,50001,60001,7000,80001]
   // let res =sal.filter((el,i)=>{
   //        if(el%2==0 && i%2!==0)
   //          return (el,i)
   //  return i%2!==0 && console.log(i)
   // })
   // console.log(res)
   //! short circuit----->if first condition is false don't check for second condition


   //! map(callback function) //it will return new array
   //?it is used to update the element of array based on return condition

   //let sal=[30003,40000,50001,60001,7000,80001]
//    let mapres=sal.map((v,i)=>{
//            return 0
//    })
//    console.log(mapres)//[0,0,0,0,0,0]

//    let filres=sal.filter((v,i)=>{
//       return 0
//   })
//  console.log(filres)//[]

// let updatedArray=sal.filter((v,i)=>i%2!==0).map((v,i)=>v+10000)
// console.log(updatedArray)

let emp =["atul","pranav","amar","kamal"]
let sal = [20000,50000,30000,80000]
//! increment the sal of those emp who has excatly 4 char in their name
//! after update if sal is start with even digit , add Mr before name
//! if  name starting with vowel increment sal by 10%


// let updatedsal = sal.map((el, i) => (emp[i].length === 4 ? el +10000 : el));
// console.log(updatedsal);

// let newarr= emp.map((el,i)=>updatedsal[i].toString()[0]%2==0 ? "Mr. " +emp[i]:emp[i]) 
// console.log(newarr)

// let arr3=updatedsal.map((el,i)=> "AEIOUaeiou".includes(emp[i][0])?(el*0.1)+el:el)
// console.log(arr3)

// emp.forEach((el,i) => {
//    if(emp[i].length===4){
//       sal[i]+=10000;
//    }
// });

// emp.forEach((el,i)=>{
//    console.log(`${names[i]}-${sal[i]}`)
// })

// emp.forEach((el,i)=>{
//    if("aeiou".includes(names[i].charAt(0))){
//       sal[i]*=1.1;
//    }
// })

// sal.forEach((el,i)=>{
//    console.log(`${emp[i]} -${sal[i]}`)
// })

// //?================================================================================
// sal.forEach((el,i)=>{
//    if(sal[i].toString().charAt(0)%2===0){
//       sal[i]=`Mr.${names[i]}`
//    }
// })

// sal.forEach((el,i)=>{
//    console.log(`${emp[i]} -${sal[i]}`)
// })

//!  reduce(callback fun......,initial value)
//? reduce will accept two arguments-------->
//! 1. callback function
//! 2. initial value for accumulator

//! 1. callback function can have 4 arguments, the first argument is acumulator
//? the second argument is the iterating variable(values)
//? third will be index
//? fourth will be actual value


//!returning reverse of array
// let arr =['a','b','c','d','e'];
// let output = arr.reduce((acc,el,i,arr)=>{
//    return el+acc
// })
// console.log(output)
//?----------------------------------------------------------------------------------------------------------------
//!reduce right()
// let arr2 =['a','b','c','d','e'];
// let output1 = arr.reduceRight((acc,el,i,arr)=>{
//    return acc+el
// })
//?-------------------------------------------------------------------------------------------------
// //!flat() // it will return new array
// let arr3=[1,2,3,4,[5,6]];//? remove only one level array
// let res = arr3.flat()
// console.log(res)

// let arr4=[1,[2,[3,[4,[5,6]]]]];
// let ress = arr3.flat(Infinity)
// console.log(ress)
// //!if we do not number of nested array we pass inifinity

// //! Array.isarray(refval)// return true,false
// let arr=[]
// console.log(typeof arr)
// console.log(Array.isArray(arr)) //!to identify that inside the varible array is stored or not

// //!Array.of
//console.log(Array.of(10)) //? create single value array

//!copyWithin
let arr=[10,20,30];
arr.copyWithin(0,1,2)
console.log(arr)//20,20,30