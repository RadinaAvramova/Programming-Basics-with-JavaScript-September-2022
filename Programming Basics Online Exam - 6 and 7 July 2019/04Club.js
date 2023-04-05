function club (input) {
    let target = Number(input[0]);
    let cocktail = input[1];
    let income = 0;

    while(!"Party!" === cocktail) {
        let quantity = Number(input[2]);

        let price = quantity * cocktail.length();
        let finalPrice = price;
        if(price % 2 != 0) {
            finalPrice *= 0.75;
        }
        income += finalPrice;
        target -= finalPrice;
        if(target <= 0) {
            break;
        }
        cocktail = input[3];
    }

    if("Party!" == cocktail) {
        console.log(`We need ${target} leva more.`);
    } else {
        console.log("Target acquired.");
    }

    console.log(`Club income - ${income} leva.`);
}

club(["500","Bellini","6","Bamboo","7","Party!"]);