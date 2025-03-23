// parent.replaceChild()

// let body = document.body;
// let h2 = document.querySelector('#heading2')
// console.log(h2)

// let para = document.createElement('p');
// para.innerHTML = 'Hey  i am Paragraph'

// // body.replaceChild(newEleemntNode, prevElementNode)
// body.replaceChild(para, h2);

// // delete
// // parentNode.removeChild()
// let body = document.body;
// let h3 = document.querySelectorAll('h3')
// console.loh(h3[0])

// // remove
// // elementNode.remove()
// let h1= document.querySelector('h1')
// h1.remove()

// CRUD ATTRIBUTE

// create 

let div = document.querySelector('div')
setAttribute('id', 'demo')

// read

let section = document.querySelector('section')
let attr = section.getAttribute('class')
console.log(attr)
console.log(section.getAttribute('id'))

// update
// setAttribute('attrName','attrValue')
let ar = document.querySelector('article')
ar.setAttribute('id', 'a2');

// removeAttribute('attrName)
div.removeAttribute('title');
