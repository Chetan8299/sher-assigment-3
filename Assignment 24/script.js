addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
})

const h1 = document.querySelector("h1");
const txt = h1.innerText;
const characters = "ABCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let iterations = 0;
let interval = null;

function randomText() {
    const str = txt
                    .split("")
                    .map((char, index) => index < iterations ? char : characters
                    .split("")[Math.floor(Math.random() * 52)])
                    .join("");
    h1.innerText = str;
    iterations += 0.25;

    if(iterations > txt.length) {
        clearInterval(interval);
        iterations = 0;
    }
}

h1.addEventListener("mouseenter", () =>  {
    if (interval) clearInterval(interval);
    iterations = 0;
    interval = setInterval(randomText, 30)
})