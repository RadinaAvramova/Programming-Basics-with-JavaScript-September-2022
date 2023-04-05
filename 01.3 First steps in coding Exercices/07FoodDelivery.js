function foodDelivery (input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegiMenus = Number(input[2]);

    let chickenMenusPrice = chickenMenus * 10.35;
    let fishMenusPrice = fishMenus * 12.40;
    let vegiMenusPrice = vegiMenus * 8.15;

    let allMenusPrices = chickenMenusPrice + fishMenusPrice + vegiMenusPrice;

    let dessertPrice = allMenusPrices * 0.20;

    let finalPrice = allMenusPrices + dessertPrice + 2.50;

    console.log(finalPrice);

}

foodDelivery(["2 ","4 ","3 "]);