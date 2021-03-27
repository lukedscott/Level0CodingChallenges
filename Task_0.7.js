function celsiusToFahrenheit(cels) {
var fahrenheit;   
    fahrenheit = (cels * 9/5 + 32);
    return fahrenheit;
}

console.log(celsiusToFahrenheit(30));


function fahrenheitToCelsius(farh) {
var celsius;
    celsius = ((farh - 32) * 5/9);
    return celsius;
}

console.log(fahrenheitToCelsius(56));