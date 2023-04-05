function oscarsCeremony (input) {
    let rent = Number(input[0]);
    let statuesPrice = rent * 0.7;
    let cateringPRice = statuesPrice * 0.85;
    let soundPrice = cateringPRice / 2;

    let totalPrice = rent + statuesPrice + cateringPRice + soundPrice;

    console.log(totalPrice.toFixed(2));
}

oscarsCeremony(["5555"]);