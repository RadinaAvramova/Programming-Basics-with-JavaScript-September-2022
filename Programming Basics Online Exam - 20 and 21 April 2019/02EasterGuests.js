function easterGuests (input) {
    let guests = Number(input[0]);
    let budget = Number(input[1]); 

    let easterBread = Math.ceil(guests / 3.0); 
    let eggs = guests * 2;

    let easterBreadPrice = easterBread * 4;
    let eggsPrice = eggs * 0.45;

    let totalPrice = easterBreadPrice + eggsPrice;

    if (totalPrice <= budget) {
        let moneyLeft = budget - totalPrice;
        console.log(`Lyubo bought ${easterBread} Easter bread and ${eggs} eggs.`);
        console.log(`He has ${moneyLeft.toFixed(2)} lv. left.`);
    } else {
        let moneyNeed = totalPrice - budget;
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${moneyNeed.toFixed(2)} lv. more.`);
    }
}

easterGuests(["10",
"35"]);