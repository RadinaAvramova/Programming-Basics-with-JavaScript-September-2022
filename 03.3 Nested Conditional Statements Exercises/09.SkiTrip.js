/*function skiTrip(input){
    let days = Number(input.shift()); 
    let place = (input.shift()).toLowerCase(); 
    let rate = (input.shift()).toLowerCase();
    let nights = days - 1;
    let discount = 0; 
    let priceWithDiscount = 0;
    let totalPrice = 0;
if (place == `room for one person`) {
    priceWithDiscount = nights * 18;
} else if (place == `apartment`) {
    if (days > 1 && days < 10){
    discount = 0.30;
    priceWithDiscount = nights * 25 * (1- discount);
    } else if (days>=10 && days<=15) {
    discount = 0.35;
    priceWithDiscount = nights * 25 * (1- discount);
    } else if (days > 15){
    doscount = 0.50;
    priceWithDiscount = nights * 25 * (1- discount);
    }  
} else if (place == `president apartment`){
        if (days > 1 && days < 10){
        discount = 0.10;
        priceWithDiscount = nights * 35 * (1- discount);
        } else if (days>=10 && days<=15) {
        discount = 0.15;
        priceWithDiscount = nights * 35 * (1- discount);
        } else if (days > 15){
        discount = 0.20;
        priceWithDiscount = nights * 35 * (1- discount);
        } 
    } 
    if (rate == `positive`) {
    totalPrice = priceWithDiscount * (1+0.25);
    } else if (rate == `negative`){
    totalPrice = priceWithDiscount * (1 - 0.10);
    } 
    console.log(totalPrice.toFixed(2));
}

skiTrip(["14","apartment","positive"]); */

function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let nights = days - 1;
    let finalSum = 0;

    switch (roomType) {
        case 'room for one person' :
                finalSum = nights * 18;
                break;
        case 'apartment' :
            finalSum = nights * 25;
            if(nights < 10) {
                finalSum = finalSum * 0.70;
            } else if(nights <= 15) {
                finalSum = finalSum * 0.65;
            } else if(nights > 15) {
                finalSum = finalSum * 0.50;
            }
            break;
        case 'president apartment' :
            finalSum = nights * 35;
            if(nights < 10) {
                finalSum = finalSum * 0.90;
            } else if(nights <= 15) {
                finalSum = finalSum * 0.85;
            } else if(nights > 15) {
                finalSum = finalSum * 0.80;
            }
            break;
    }

    if(feedback === 'positive') {
        finalSum = finalSum * 1.25;
    } else {
        finalSum = finalSum * 0.90;
    }

    console.log(finalSum.toFixed(2));
}

skiTrip(["14","apartment","positive"]);