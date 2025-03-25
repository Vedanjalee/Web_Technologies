// set init count 
let  count  =  0;

const value = document.querySelectorAll('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e){

       const styles = e.currentTarget.classList;
       if(styles.contains("decrease")){
        count--;
       }
       value.textContent = count;
    });
});



