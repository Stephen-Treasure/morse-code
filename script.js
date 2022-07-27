//console.log(document.getElementById("englishInput").value);

//  Add unit tests for each of the pure function that your translator uses (each function should have at least 4 tests, think of edge cases, wrong inputs, etc ...)

export const morseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    " ": " / ",
    " ": "/",
};

export const reversedMorse = Object.entries(morseCode).reduce(
    (acc, [key, value]) => {
        acc[value] = key;
        return acc;
    },
    {},
);
