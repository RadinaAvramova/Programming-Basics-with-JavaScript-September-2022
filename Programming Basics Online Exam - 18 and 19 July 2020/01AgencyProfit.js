function agencyProfit (input) {
    let avionCompany = input[0];
    let ticketsAdults = Number(input[1]);
    let ticketsChildren = Number(input[2]);
    let netPriceAdults = Number(input[3]);
    let tax = Number(input[4]);

    let netPriceChildren = netPriceAdults - (0.7 * netPriceAdults);
    let priceAdult = netPriceAdults + tax;
    let priceChildren = netPriceChildren + tax;
    let totalSum = (ticketsChildren * priceChildren) + (ticketsAdults * priceAdult);
    let gain = (totalSum * 0.2).toFixed(2);

    console.log(`The profit of your agency from ${avionCompany} tickets is ${gain} lv.`)
}

agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])
