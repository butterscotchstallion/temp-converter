import {
    convertCelsiusToFahrenheit,
    convertFahrenheitToCelsius,
    convertKelvinToCelsius,
    convertKelvinToFahrenheit
} from "../app/components/converter/conversions";

describe("Conversions", () => {
    test("Celsius to Fahrenheit", () => {
        const actual: number = convertCelsiusToFahrenheit(100);
        expect(actual).toBe(212);
    });

    test("Fahrenheit to Celsius", () => {
        const actual: number = convertFahrenheitToCelsius(100);
        expect(actual).toBe(37.77777777777778);
    });

    test("Kelvin to Fahrenheit", () => {
        const actual: number = convertKelvinToFahrenheit(100);
        expect(actual).toBe(-279.66999999999996);
    });

    test("Kelvin to Celsius", () => {
        const actual: number = convertKelvinToCelsius(100);
        expect(actual).toBe(-173.14999999999998);
    });
});