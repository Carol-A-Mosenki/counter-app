// get elements
const numberEl = document.getElementById("number");
const buttons = document.querySelectorAll(".buttons button");

let count = 0;

// add click listeners
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "+") {
            count++;
        } else if (button.textContent === "-") {
            count--;
        }

        numberEl.textContent = count;
    });
});
