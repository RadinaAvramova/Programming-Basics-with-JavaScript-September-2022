function easterParty (input) {
    let guests = Number(input[0]);
    let pricePerPerson = Number(input[1]);
    let budget = Number(input[2]); 

    if (guests >= 10 && guests <= 15) {
        pricePerPerson = 0.85 * pricePerPerson;
    } else if (guests > 15 && guests <= 20) {
        pricePerPerson = 0.8 * pricePerPerson;
    } else if (guests > 20) {
        pricePerPerson = 0.75 * pricePerPerson;
    }

    let cakePrice = 0.1 * budget;

    let totalPrice = guests * pricePerPerson + cakePrice;

    if (totalPrice <= budget) {
        console.log(`It is party time! ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(totalPrice - budget).toFixed(2)} leva needed.`);
    }
}


easterParty(["18",
"30",
"450"])