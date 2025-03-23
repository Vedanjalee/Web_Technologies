// Selection of html
//  var a = document.querySelector("h1");
//  console.log(a)

//  var b = document.querySelector("h2")
//  console.log(b)

// Changing of HTML
// var a = document.querySelector("h1")
// a.innerHTML= "Changed HTML"

// Changing CSS 

var a = document.querySelector("h2")
// a.style.color = "red"
// a.style.backgroundColor="yellow"

// EVENT LISTENER
// a.addEventListener("click", function() {
//     console.log("hey")
// })


a.addEventListener("click",function() {
    a.innerHTML= "Badal gya hu m b teri ex ki tarah";
    a.style.backgroundColor = "pink"
})
