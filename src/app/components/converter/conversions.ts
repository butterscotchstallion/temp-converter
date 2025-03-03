/**
 * ℃=(℉-32)/1.8
 * K=((℉-32)/1.8)+273.15
 * ℉=(℃*1.8)+32
 */

export function convertCelsiusToFahrenheit(temp: number) {
    return (temp * 9 / 5) + 32;
}

export function convertFahrenheitToCelsius(temp: number) {
    return (temp - 32) * 5 / 9;
}

export function convertKelvinToCelsius(temp: number) {
    return temp - 273.15;
}

export function convertCelsiusToKelvin(temp: number) {
    return temp + 273.15;
}

export function convertKelvinToFahrenheit(temp: number) {
    return ((temp - 273.15) * 1.8) + 32;
}