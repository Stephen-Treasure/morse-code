import { getEnglish } from "./translate";

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
    " ": " / ",
    " ": "/",
};

describe("Test case for a function that gets english text and converts it to morse code with letters being sperated by a single space and words sperated by a double space", () => {
    it("should receive input and translate to correct morse code", () => {
        expect(getEnglish("A", morseCode)).toBe(".-");
        expect(getEnglish("HI", morseCode)).toBe(".... ..");
        expect(getEnglish("H I", morseCode)).toBe(".... / ..");
        expect(getEnglish("1!@#$%^&", morseCode)).toBe("1 ! @ # $ % ^ &");
    });
});

// test that we are getting an expected behaviour when inputting unknown char
// either give the char itself
// or throw an error saying we don't know that char

// Does my function translate sentences properly?
