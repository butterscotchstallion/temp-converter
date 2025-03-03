import {convertCelsiusToFahrenheit} from "../app/components/converter/conversions";

describe("Conversions", () => {
    test("Celsius to Fahrenheit", () => {
        const actual: number = convertCelsiusToFahrenheit(100);
        expect(actual).toBe(212);
    });

    test("Fahrenheit to Celsius", () => {
        
    })
});