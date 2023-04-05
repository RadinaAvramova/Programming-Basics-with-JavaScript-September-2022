function familyTrip (input) {
    let budget = parseFloat(Number(input[0]));
    let nights = Number(input[1]);
    let priceNights = parseFloat(Number(input[2]));
    let percent= Number(input[3]);

    if(nights > 7) {
        priceNights = priceNights * 0.95;
    }
    
    let totalNightPrice = nights * priceNights;
    let additionalCosts = budget * (percent / 100.0);

    let totalPrice = totalNightPrice + additionalCosts;
    if(totalPrice > budget) {
        let moneyNeed = (totalPrice - budget).toFixed(2);
        console.log(`${moneyNeed} leva needed.`);
    } else {
        let moneyLeft = (budget - totalPrice).toFixed(2);
        console.log(`Ivanovi will be left with ${moneyLeft} leva after vacation.`);
    }
}

familyTrip(["800.50", "8","100","2"]);
