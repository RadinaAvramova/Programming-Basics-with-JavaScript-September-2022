function convertInchesTocentimeters ([input]) {
    let inches = parseFloat(input);
    let centimeters = inches * 2.54;
    console.log(centimeters);
}

convertInchesTocentimeters(["5"]);