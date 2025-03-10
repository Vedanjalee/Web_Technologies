// function changeText() {
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Anjali";
// }

// let fpara= document.getElementById('fpara');
// console.log(fpara.addEventListener('click', changeText));

document.addEventListener("DOMContentLoaded", function() {
    let fpara = document.getElementById('fpara');
    if (fpara) { // Ensure the element exists
        fpara.addEventListener('click', function() {
            fpara.textContent = "Hello Anjali";
        });
    } else {
        console.error("Element with id 'fpara' not found.");
    }
});
