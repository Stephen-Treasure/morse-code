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

// console.log(morseCode["A"]);

const getEnglish = () => {
    //gets input from textarea

    let input = document.getElementById("english").value.toUpperCase();
    // console.log(input);

    // console.log(morseCode[input[3]]);

    // console.log(input.split(" "));

    //console.log(Object.keys(input).map((e, i) => console.log(e)));

    // for (const [key, value] of Object.entries(input)) {
    //     console.log(key);
    // }

    // let input2 = input;
    // console.log(input2.split(""));
    // console.log(input2);
    // console.log(input2[1]);

    input = Object.entries(input).map((e, i) =>
        morseCode[input[i]] == undefined ? "  " : morseCode[input[i]],
    );

    // console.log(input);

    document.getElementById("morse").value = input.join(" ");
};

const reversedMorse = Object.entries(morseCode).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

//console.log(reversedMorse);

const getMorse = () => {
    let input = document.getElementById("morse").value;
    console.log(input);

    // console.log(input.split(" "));
    input = input.split(" ");
    // console.log(input2);
    // console.log(input2[1]);
    input = Object.entries(input).map((e, i) =>
        reversedMorse[input[i]] == undefined ? " " : reversedMorse[input[i]],
    );

    console.log(input);

    document.getElementById("english").value = input.join("");
};
