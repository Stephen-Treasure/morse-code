//console.log(document.getElementById("englishInput").value);

//  Add unit tests for each of the pure function that your translator uses (each function should have at least 4 tests, think of edge cases, wrong inputs, etc ...)

const morseCode = {
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
};

export const getEnglish = (input) => {
    let input2 = input.toUpperCase();
    console.log(input2);
    input2 = Object.entries(input2).map((e, i) =>
        morseCode[input2[i]] == undefined ? "   " : morseCode[input2[i]],
    );

    return input2.join(" ");
};
console.log(getEnglish("h i"));

const reversedMorse = Object.entries(morseCode).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

//console.log(reversedMorse);

export const getMorse = (input) => {
    let input2 = input;
    if (input2.includes("      ")) {
        throw new Error("To many spaces between characters");
    }
    // console.log(input.split(" "));
    input2 = input2.split(" ");
    // console.log(input2);
    // console.log(input2[1]);
    let input3 = Object.entries(input2).map((e, i) =>
        reversedMorse[input2[i]] == undefined ? " " : reversedMorse[input2[i]],
    );

    // console.log(input);

    return input3.join("");
};
