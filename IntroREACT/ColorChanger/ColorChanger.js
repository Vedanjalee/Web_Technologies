const colors = ["green","pink", "red", "rgba(133,122, 200 )","#f15025","green","yellow"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    // get randpm btw 0-3 colors[1],[2],[3]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    // console.log(document.body)
});

function getRandomNumber() {
  return Math.floor( Math.random() * colors.length);
}

