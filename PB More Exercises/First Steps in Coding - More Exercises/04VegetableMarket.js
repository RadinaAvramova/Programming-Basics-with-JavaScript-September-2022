function vegetableMarket([arg1, arg2, arg3, arg4]) {
    let vegetablePriceKg = Number(arg1);
    let fruitPriceKg = Number(arg2);
    let totalVegetableKg = Number(arg3);
    let totalFruitKg = Number(arg4);

    let vegetablePrice = vegetablePriceKg * totalVegetableKg;
    let fruitPrice = fruitPriceKg * totalFruitKg;
    let totalProfit = (vegetablePrice + fruitPrice) / 1.94;

    console.log(totalProfit.toFixed(2));
}

vegetableMarket(["0.194", "19.4", "10", "10"]);
vegetableMarket(["1.5", "2.5", "10", "10"]);