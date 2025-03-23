let div= document.querySelector('div');
//1. CREATE 
// SETPROPERTY('PROPERY', 'VALUE')
div.style.setProperty('height', '200px')
div.style.setProperty('width', '300px')
div.style.setProperty('background-color', 'red');

// 2.element.style.propertyName = "value"

div.style.border= "5px solid black" ;
div.style.borderRadius = "20px"


// SSection
let section = document.querySelector('section');
section.style.setProperty('height', '200px');
section.style.setProperty('width', '300px');
section.style.setProperty('background-color','blue')

section.style.border="5px solid yellow";
section.style.borderRadius = "20px";
// WHRN WE WRITE THE NEXT PROPERTY FOR THE SAME ELLEMENT AT THT TIME,...OLD PROPERTYS WILL BE OVERRIDDEN -------------IF WANT TO  UPADTE + OLD THN USE ---+= ----
// cssText = "value"
div.style.cssText = "background-color: green; height: 100px";
div.style.cssText += "width: 100px";


// READ
// getPropertyValue('property-name)
console.log(div.style.getPropertyValue('background-color'))

// delete 
// removeproperty('property-name)
div.style.removeProperty('width')


data.array.forEach(element => {
    
});