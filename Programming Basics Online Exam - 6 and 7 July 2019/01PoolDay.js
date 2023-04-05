function poolDay (input) {
    let people = Number(input[0]);
    let taxEntry = Number(input[1]);
    let priceLounge = Number(input[2]);
    let priceUmbrella = Number(input[3]);

    totalEnterPrice = people * taxEntry;
    loungeCnt  = Math.ceil((0.75 * people) * priceLounge);
    umbrellaCnt = Math.ceil((0.5 * people) * priceUmbrella);

    let finalPrice = (totalEnterPrice + loungeCnt + umbrellaCnt).toFixed(2);

    console.log(`${finalPrice} lv.`);
}

poolDay(["50", "6", "8", "4"]);