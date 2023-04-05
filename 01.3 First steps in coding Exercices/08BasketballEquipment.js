function basketballEquipment (input) {
    let annualTax = Number(input[0]);

    let baskets = annualTax -(0.4 * annualTax); 
    let outfit = baskets - (0.2 * baskets);
    let ball = outfit / 4;
    let accessoires = ball / 5;

    finalSumEquipment = annualTax + baskets + outfit + ball + accessoires;

    console.log(finalSumEquipment);
}

basketballEquipment(["365"]);