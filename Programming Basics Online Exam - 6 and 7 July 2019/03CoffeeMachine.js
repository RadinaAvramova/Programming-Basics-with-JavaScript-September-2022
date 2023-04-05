function coffeeMachine(data) {
    let drinkType = data[0];
    let sugar = data[1];
    let drinksCount = Number(data[2]);
    let drinkPrice = 0;

    switch (drinkType) {
        case "Espresso":
            if (sugar === "Without") {
                drinkPrice = (drinksCount * 0.90) * 0.65;
            }
            else if (sugar === "Normal") {
                drinkPrice = drinksCount * 1.00;
            }
            else if (sugar === "Extra") {
                drinkPrice = drinksCount * 1.20;
            }
            
            break;
        case "Cappuccino":
            if (sugar === "Without") {
                drinkPrice = (drinksCount * 1.00) * 0.65;
            }
            else if (sugar === "Normal") {
                drinkPrice = drinksCount * 1.20;
            }
            else if (sugar === "Extra") {
                drinkPrice = drinksCount * 1.60;
            }

            break;
        case "Tea":
            if (sugar === "Without") {
                drinkPrice = (drinksCount * 0.50) * 0.65;
            }
            else if (sugar === "Normal") {
                drinkPrice = drinksCount * 0.60;
            }
            else if (sugar === "Extra") {
                drinkPrice = drinksCount * 0.70;
            }

            break;
        default: break;
    }

    if (drinkType === "Espresso" && drinksCount >= 5) {
        drinkPrice = drinkPrice * 0.75;
    }

    if (drinkPrice > 15) {
        drinkPrice = drinkPrice * 0.80;
    }

    console.log(`You bought ${drinksCount} cups of ${drinkType} for ${drinkPrice.toFixed(2)} lv.`);
}

coffeeMachine(["Espresso","Without","10"]);
