const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // best way to make a hex color with array
const btn = document.getElementById("btn"); // <button class="btn btn-hero" id="btn">click me</button>
const color = document.querySelector(".color"); // <span class="color">#f1f5f8</span>

btn.addEventListener("click", function () {
  let hexColor = "#"; // important symbol to make a hex color
  for (let i = 0; i < 6; i++) {
    // hex color needs 6 numbers in total
    hexColor += hex[getRandomNumber()]; // implements the # + array in a random math application
  }
  // console.log(hexColor);

  color.textContent = hexColor; // putting the color on the screen
  document.body.style.backgroundColor = hexColor; // putting the color in a h2
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
