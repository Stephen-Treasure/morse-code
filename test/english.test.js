import { getEnglish } from "./script";

describe("Test case for a function that gets english text and converts it to morse code with letters being sperated by a single space and words sperated by a double space", () => {
    it("should receive input and translate to correct morse code", () => {
        expect(getEnglish("a")).toBe(".-");
        expect(getEnglish("hi")).toBe(".... ..");
        expect(getEnglish("h i")).toBe("....     ..");
        expect(getEnglish("1")).toBe("   ");
    });
});
