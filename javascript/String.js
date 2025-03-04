// let str = 'string';
// let str1 = "String";
// let str2 = `string with expression like ${2+3}`;

// console.log(str);
// console.log(str1);
// console.log(str2);
// console.log(typeof str);
// console.log(typeof str1);
// console.log(typeof str2);

//! by using new keyword

// let str3 = new String('10');
// console.log(typeof str3); // object
// let str4 = new String('10');
// console.log(str3===str4); // false
// console.log(str3==str4); // false


//! property
// let str = "JavaScript";
// str[0] = 'k'; //---------------------> cannot update
// console.log(str[1]);
// for(let i=0; i<str.length; i++){
//     console.log(str[i]);
// }

//! String inbuilt function
// let str = "JavaScript";
// console.log(str.toLowerCase());//?------------> it will return a new string, won't modify actual string
// console.log(str);

// console.log(str.toUpperCase());//?------------> it will return a new string, won't modify actual string
// console.log(str);

//? trimStart()--------------------> remove spaces from starting
// let name = "    Dhoni   ";
// console.log(name.trimStart());
// console.log(name.trimStart().length);
// console.log(name);
//? trimEnd--------------------> remove spaces from ending
// console.log(name.trimEnd());
// console.log(name.trimEnd().length);
// console.log(name);
//? trim
// console.log(name.trim());
// console.log(name.trim().length);
// console.log(name);

//? replace()
// it replace the first occurence of the previous character with new characters
// let sub = "Programming";
// console.log(sub.replace('m', 'n'));
// console.log(sub.replace('mm', 'nn'));
// console.log(sub.replace("Pro", ' '));
//? replaceAll()
// it replace all occurence of previous character with new characters
// console.log(sub.replaceAll('m', 'n'));





//! take input from user as username and convert the first letter of the name to uppercase
// let username = prompt("Enter username");
// console.log(username.replace(username[0], username[0].toUpperCase()));

//! take name input from user
//! akshay = hayAKS
//! virat = ratVI
// let myName = prompt("Enter name");
// let n = parseInt((myName.length)/2);
// console.log(myName.substring(n,myName.length).toUpperCase()+myName.substring(0,n).toLowerCase());


//!charAt()
//? charAt() will accept the argument as index value ans it will return the character at
// a particular index
// let sub="Javascript";
// console.log(sub.charAt(3));

//! slice()
//? it will give the string till ending index - 1
// console.log(sub.slice(0,4));
// console.log(sub.slice(0, -4));
// console.log(sub.slice(-1,-4)); //--------------> will not return anything
// console.log(sub.slice(-6, -4));
// console.log(sub.slice(4));

//! substring()
//? same as slice()
// console.log(sub.substring(0,4));

//! substr()
//? this method will be removed in further version
// str.substr(s.i, length)
// console.log(sub.substr(1,5));

//! split()
//? It converts string into array based on the seperatorwe pass as argument
// console.log(sub.split()); //['Javascript']
// console.log(sub.split(""));  //?['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
// let ex = "I Love JavaScript";
// console.log(ex.split(" ")); //?['I', 'Love', 'JavaScript']
// console.log(ex.split("a")); //?['I Love J', 'v', 'Script']

//! indexOf()
//? return index of character in a particular string
// console.log(ex.indexOf("J"));
// console.log(ex.indexOf("a", 9));// returns the first occurence after a particular index

// ! lastIndexOf()
// console.log(ex.lastIndexOf("a"));

// console.log(ex.lastIndexOf(""));
// console.log(ex.indexOf(""));


// ! concat()
let a = 'mango';
let b = 'fruit';
let c = 'juice';
// console.log(a.concat(" ",b," ",c));


//! includes
// console.log(a.includes('a'));


//! charCodeAt
console.log(a.charCodeAt(1));

//! fromcharCode
console.log(String.fromCharCode(65));



let name1 = "Mahendra Singh Dhoni";
let res = (name1.charAt(name1.indexOf(" ")+1))+(name1.charAt(name1.lastIndexOf(" ")+1))
            +(name1.substring(0,name1.indexOf(" ")));
console.log(res);

let rev = (name1.substring(name1.lastIndexOf(" ")+1)) + " "
            +(name1.substring(name1.indexOf(" "),name1.lastIndexOf(" "))) + " "
            +(name1.substring(0,name1.indexOf(" ")));
console.log(rev);

let narr = name1.split();
for(let i=0; i<narr.length; i++){
    
}


//         