import { morseCode, reversedMorse } from "./script.js";
import { getEnglish, getMorse } from "./translate.js";

const engText = document.getElementById("english");
const morseText = document.getElementById("morse");

const engBtn = document.getElementById("englishButton");
const morseBtn = document.getElementById("morseButton");

engBtn.addEventListener("click", () => {
    const input = engText.value.toUpperCase();
    morseText.value = getEnglish(input, morseCode);
});

morseBtn.addEventListener("click", () => {
    const input = morseText.value;
    engText.value = getMorse(input, reversedMorse);
});

// Create a function that takes a string (in morse) and an object and convert to a string in English
// Function should be in pure function file
// Add DOM manipulation to deal with morse to Eng translation
