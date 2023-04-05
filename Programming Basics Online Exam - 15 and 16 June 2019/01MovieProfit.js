function movieProfit (input) {
    let movieName = input[0];
    let days = Number(input[1]);
    let ticketsCount = Number(input[2]);
    let ticketsPrice = parseFloat(Number(input[3]));
    let percentMoneyForCinema = Number(input[4]);

    let ticketsPricePerDay = ticketsCount * ticketsPrice;

    let totalPrice = ticketsPricePerDay * days;
    let moneyForCinema = totalPrice * percentMoneyForCinema / 100.0;
    let studioIncome = (totalPrice - moneyForCinema).toFixed(2);

    console.log(`The profit from the movie ${movieName} is ${studioIncome} lv.`);
}

movieProfit(["The Programmer", "20",
"500",
"7.50",
"7"]);
