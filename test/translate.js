export const getEnglish = (input, dictionnary) => {
    // getEnglish() takes an input string
    // String of english words composed of english chars separated with spaces. Each sentence seperated with a dot.
    const splittedEnglisText = input.split("");
    // returns an array of all the char inside my string

    const translatedChar = splittedEnglisText.map((char) =>
        dictionnary[char] ? dictionnary[char] : char,
    );

    const joinedTranslation = translatedChar.join(" ");
    return joinedTranslation;
};

export const getMorse = (input, dictionnary) => {
    const splittedMorseText = input.split(" ");
    console.log(splittedMorseText);

    const translatedChar = splittedMorseText.map((char) =>
        dictionnary[char] ? dictionnary[char] : char,
    );

    const joinedTranslation = translatedChar.join("");

    return joinedTranslation;
};
