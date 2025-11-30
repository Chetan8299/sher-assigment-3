addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
})

const h1 = document.querySelector("h1");
const txt = h1.innerText;
const characters = "ABCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

h1.addEventListener("mouseenter", () =>  {
    console.log("hi")
    let int = setInterval(() => {
        const str = txt
                        .split("")
                        .map(() => characters
                        .split("")[Math.floor(Math.random() * 52)])
                        .join("");
        h1.innerText = str
    }, 30)

    setTimeout(() => {
        clearInterval(int);
        h1.innerText = txt;
    }, 1000)
})