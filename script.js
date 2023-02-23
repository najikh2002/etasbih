// buttons and counter text
const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

//

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    counter.textContent = count;
  });
});
