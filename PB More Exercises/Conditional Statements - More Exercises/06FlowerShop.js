function flowerShop (input) {
    let magnoliasCount = Number(input[0]);
    let hyathinthusCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let cactiCount = Number(input[3]);
    let price = Number(input[4]);

    let magnoliasPrice = magnoliasCount * 3.25;
    let hyathinthusPrice = hyathinthusCount * 4;
    let rosesPrice = rosesCount * 3.5;
    let cactiPrice = cactiCount * 8;
    let totalPrice = magnoliasPrice + hyathinthusPrice + rosesPrice + cactiPrice;
    let taxes = totalPrice * 0.05;
    let profit = totalPrice - taxes;
    let money = 0;
    let totalProfit = money - profit;

    if (profit>=price) {
        console.log(`She is left with ${(Math.floor(profit-price))} leva.`);
 
    } else {
        console.log(`She will have to borrow ${(Math.abs)((Math.ceil)(price-profit))} leva.`);
    }
}

flowerShop(["15","7","5","10","100"]);
