function filmPremiere (input) {
    let film = input[0];
    let type = input[1];
    let ticketsCount = Number(input[2]);

    let price = 0;

    switch(film) {
        case "John Wick":
            if ("Drink" === type) {
                price += 12 * ticketsCount;
            } else if ("Popcorn" === type) {
                price += 15 * ticketsCount;
            } else if ("Menu" === type) {
                price += 19 * ticketsCount;
            }
            break;
        case "Star Wars":
            if ("Drink" === type) {
                price += 18 * ticketsCount;
            } else if ("Popcorn" === type) {
                price += 25 * ticketsCount;
            } else if ("Menu" === type) {
                price += 30 * ticketsCount;
            }
            if (ticketsCount >= 4) {
                 price *= 0.7;
            }
            break;
        case "Jumanji":
            if ("Drink" === type) {
                price += 9 * ticketsCount;
            } else if ("Popcorn" === type) {
                price += 11 * ticketsCount;
            } else if ("Menu" === type) {
                price += 14 * ticketsCount;
            }
            if (ticketsCount == 2) {
                price *= 0.85;
            }
            break;
    }

    console.log(`Your bill is ${price.toFixed(2)} leva.`);
}

filmPremiere(["John Wick",
"Drink",
"6"]);