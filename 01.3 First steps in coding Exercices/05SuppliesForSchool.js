function suppliesForSchool (input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let liters = Number(input[2]);
    let discount = Number(input[3]);

    let pensFinalPrice = pens * 5.80;
    let markersFinalPrice = markers * 7.20;
    let litersFinalPrice = liters * 1.20;

    let finalPrice = pensFinalPrice + markersFinalPrice + litersFinalPrice;
    let priceAfterDiscount = finalPrice - (finalPrice * discount /100);
    
    console.log(priceAfterDiscount);
}

suppliesForSchool(["2 ","3 ","4 ","25 "]);