function celsiusToFahrenheit (input) {
    let celsiusDegrees = Number(input[0]);
    let fahrenheitDegrees = celsiusDegrees * 1.8 + 32;
    console.log(fahrenheitDegrees.toFixed(2));
}

celsiusToFahrenheit(["25"]);