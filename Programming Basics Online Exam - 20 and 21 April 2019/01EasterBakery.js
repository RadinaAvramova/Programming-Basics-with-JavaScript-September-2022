function easterBakery (input) {
    let flourPricePerKg = Number(input[0]);
    let flourKg = Number(input[1]);
    let sugarKg = Number(input[2]); 
    let eggPacks = Number(input[3]);
    let yeastPacks = Number(input[4]);

    let sugarPricePerKg = flourPricePerKg * 0.75;
    let eggsPricePerPack = flourPricePerKg * 1.1;
    let yeastPricePerPack = sugarPricePerKg * 0.2;

    let totalPrice = flourPricePerKg * flourKg + sugarPricePerKg * sugarKg + eggsPricePerPack * eggPacks + yeastPricePerPack * yeastPacks;

    console.log(totalPrice.toFixed(2));
}

easterBakery(["3",
"2",
"3"]);
