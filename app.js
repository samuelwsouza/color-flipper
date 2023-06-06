const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; // pre-colors
const btn = document.getElementById("btn"); // <button class="btn btn-hero" id="btn">click me</button>
const color = document.querySelector(".color"); // <span class="color">#f1f5f8</span>

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber(); // function in a const
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber]; // backgroundcolor apllied in a DOM for const
  color.textContent = colors[randomNumber]; //  and the color to copy and use
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length); // take all my colors in my array and do a random math application
}
