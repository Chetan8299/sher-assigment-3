const keyToId = {
    // white keys group 1
    a: 28,
    s: 29,
    d: 30,
    f: 31,
    g: 32,
    h: 33,
    j: 34,

    // white keys group 2
    z: 35,
    x: 36,
    c: 37,
    v: 38,
    b: 39,
    n: 40,
    m: 41,

    // white keys group 3
    q: 42,
    w: 43,
    e: 44,
    r: 45,
    t: 46,
    y: 47,
    u: 48,

    // black keys (use digits instead of letters you already used)
    1: 49,
    2: 50,
    4: 51,
    5: 52,
    6: 53,

    8: 54,
    9: 55,
    0: 56,
    "-": 57,
    "=": 58,

    i: 59,
    o: 60,
    p: 61,
    "[": 62,
    "]": 63,
};

const sounds = {};

for (let id = 28; id <= 63; id++) {
    sounds[id] = new Audio(`./assets/${id}.mp3`);
    sounds[id].preload = "auto";
}

function playSound(id) {
    const sound = sounds[id];
    if (!sound) return;

    sound.currentTime = 0;
    sound.play();
}

const body = document.body;

body.addEventListener("keydown", (dets) => {
    const id = keyToId[dets.key];
    console.log(id);
    if (!id) return;
    let key = document.getElementById(id);
    key.classList.add("active");
    playSound(id);
});

body.addEventListener("keyup", (dets) => {
    const id = keyToId[dets.key];
    if (!id) return;
    let key = document.getElementById(id);
    key.classList.remove("active");
});

body.addEventListener("click", (dets) => {
    let li = dets.target.closest("li");
    if (!li || !li.id) return;
    playSound(li.id);
});
