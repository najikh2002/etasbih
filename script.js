// buttons and counter text
const counter = document.querySelector("#counter");
const btns = document.querySelectorAll("#btn");
const audio = new Audio("audio.mp3");
const set = document.querySelector(".set");

// variabel nilai dan maks
let count = 0;
let maxx = 0;

// pengamnilan nilai input dan fungsi tombol set
document
  .querySelector('input[type="number"]')
  .addEventListener("input", function () {
    const max = this.value;
    set.addEventListener("click", () => {
      maxx = max;
      count = 0;
    });
  });

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
      count++;
      if (maxx > 0 && count >= maxx) {
        audio.play();
      }
    } else {
      document.querySelector('input[type="number"]').value = "";
      count = 0;
      maxx = 0;
    }

    counter.textContent = count;
  });
});
