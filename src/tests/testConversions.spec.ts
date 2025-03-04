import {
    convertCelsiusToFahrenheit,
    convertCelsiusToKelvin,
    convertFahrenheitToCelsius,
    convertFahrenheitToKelvin,
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
        const actual: number = convertKelvinToFahrenheit(32);
        expect(actual).toBe(-402.07);
    });

    test("Kelvin to Celsius", () => {
        const actual: number = convertKelvinToCelsius(100);
        expect(actual).toBe(-173.14999999999998);
    });

    test("Celsius to Kelvin", () => {
        const actual: number = convertCelsiusToKelvin(100);
        expect(actual).toBe(373.15);
    });

    test("Fahrenheit to Kelvin", () => {
        const actual: number = convertFahrenheitToKelvin(42);
        expect(actual).toBe(278.7055555555555);
    });
});