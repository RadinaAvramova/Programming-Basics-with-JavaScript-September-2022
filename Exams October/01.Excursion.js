function excursion (input) {
    let people = Number(input[0]);
    let nights = Number(input[1]);
    let cardsTransport = Number(input[2]);
    let museumTickets = Number(input[3]);

    let nightsPrice = nights * 20;
    let cardsTransportPrice = cardsTransport * 1.60;
    let museumTicketsPrice = museumTickets * 6;
    let totalPriceOnePerson = nightsPrice + cardsTransportPrice + museumTicketsPrice;
    let totalPriceAll = totalPriceOnePerson * people;

    let sumAfterSpendings = totalPriceAll + (totalPriceAll * 0.25);

    console.log(sumAfterSpendings.toFixed(2));
}

excursion(["131",
"9",
"33",
"46"])


