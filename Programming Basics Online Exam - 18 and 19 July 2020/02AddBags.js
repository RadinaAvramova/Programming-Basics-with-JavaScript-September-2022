function addBags (input) {
    let luggageOver20KgPrice = Number(input[0]);
    let luggageKilograms= Number(input[1]);
    let daysTillTrip= Number(input[2]) ;
    let  numberOfLuggage= Number(input[3]);

    let luggageTax = 0;
    let finalPrice = 0;

    if (luggageKilograms < 10) {
        luggageTax = luggageOver20KgPrice * 0.20;
    } else if (luggageKilograms >= 10 && luggageKilograms <= 20) {
        luggageTax = luggageOver20KgPrice * 0.50;
    } else if (luggageKilograms > 20) {
        luggageTax = luggageOver20KgPrice;
    }

    let increase = 0;
 
    if (daysTillTrip > 30) {
        increase = luggageTax + luggageTax * 0.10;
    } else if (daysTillTrip >= 7 && daysTillTrip <= 30) {
        increase = luggageTax + luggageTax * 0.15;
    } else if (daysTillTrip < 7) {
        increase = luggageTax + luggageTax * 0.40;
    }

    finalPrice = increase * numberOfLuggage;
    console.log(`The total price of bags is: ${finalPrice.toFixed(2)} lv.`);
}

addBags(["25.50",
"5",
"36",
"6"])
 