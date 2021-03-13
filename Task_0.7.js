var fahrenheit; 
function celsiusToFahrenheit(cels) {    
    fahrenheit = (cels * 9/5 + 32);
    return fahrenheit;
}
console.log(celsiusToFahrenheit(30));

var celsius; 
function fahrenheitToCelsius(farh) {
    celsius = ((farh - 32) * 5/9);
    return celsius;
}
console.log(fahrenheitToCelsius(56));