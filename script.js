// buttons and counter text
const counter = document.querySelector("#counter");
const btns = document.querySelectorAll("#btn");
const audio = new Audio("audio.mp3");
const set = document.querySelector(".set");

// variabel nilai dan maks
let count = 0;
let maxx = 0;
let button = false;

// pengamnilan nilai input dan fungsi tombol set
document
  .querySelector('input[type="number"]')
  .addEventListener("input", function () {
    const max = this.value;
    set.addEventListener("click", () => {
      maxx = max;
      count = 0;
      counter.textContent = count;
    });
  });

// fungsi reset
const reset = () => {
  document.querySelector('input[type="number"]').value = "";
  count = 0;
  maxx = 0;
  counter.textContent = count;
};

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (!button) {
      if (styles.contains("increase")) {
        count++;
        if (maxx > 0 && count >= maxx) {
          audio.play();
          button = true;
          document.querySelector(".reset").addEventListener("click", () => {
            button = false;
            reset();
          });
        }
      } else {
        reset();
      }

      counter.textContent = count;
    }
  });
});

// disable scroll
var element = document.querySelector(".container");
element.addEventListener(
  "touchmove",
  function (event) {
    event.preventDefault();
  },
  false
);
