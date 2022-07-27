import { getMorse } from "./translate";

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

const reversedMorse = Object.entries(morseCode).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

describe("Test case for a function that gets english text and converts it to morse code with letters being sperated by a single space and words sperated by a double space", () => {
    it("should receive input and translate to correct morse code", () => {
        expect(getMorse(".-", reversedMorse)).toBe("A");
        expect(getMorse(".... ..", reversedMorse)).toBe("HI");
        expect(getMorse(".... / ..", reversedMorse)).toBe("H I");
        expect(getMorse("/", reversedMorse)).toBe(" ");
        expect(getMorse("1!@", reversedMorse)).toBe("1!@");
    });
});
