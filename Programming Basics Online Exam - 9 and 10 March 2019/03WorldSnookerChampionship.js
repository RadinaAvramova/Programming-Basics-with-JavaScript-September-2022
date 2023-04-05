function worldSnookerChampionship (input) {
    let stageOfTour = input[0];
    let ticketType = input[1];
    let quantity = Number(input[2]);
    let pictureWithTrophy = input[3];

    let price = 0.0;

    switch (stageOfTour) {
        case "Quarter final":
            if ("Standard" === ticketType) {
                price = 55.50;
            } else if ("Premium" === ticketType) {
                price = 105.20;
            } else if ("VIP" === ticketType) {
                price = 118.90;
            }
            break;
        case "Semi final":
            if ("Standard" === ticketType) {
                price = 75.88;
            } else if ("Premium" === ticketType) {
                price = 125.22;
            } else if ("VIP" === ticketType) {
                price = 300.40;
            }
            break;
        case "Final":
            if ("Standard" === ticketType) {
                price = 110.10;
            } else if ("Premium" === ticketType) {
                price = 160.66;
            } else if ("VIP" === ticketType) {
                price = 400.00;
            }
            break;
    }

    price *= quantity;

    if (price > 4000) {
        price *= 0.75;
        pictureWithTrophy = false;
    } else if (price > 2500) {
        price *= 0.9;
    }

    if (pictureWithTrophy) {
        price += (quantity * 40);
    }

    console.log(price.toFixed(2));
}

worldSnookerChampionship(["Quarter final",
"Standard",
"11",
"N"])
