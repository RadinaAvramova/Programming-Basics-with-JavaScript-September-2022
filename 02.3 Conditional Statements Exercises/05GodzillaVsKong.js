function movie(input) {
    let budget = Number(input.shift());
    let countWalkons = Number(input.shift());
    let priceClothes = Number(input.shift());

    let priceDecor = budget * 0.10;
    let totalPriceClothes = countWalkons * priceClothes;
    

    if (countWalkons > 150) {
        totalPriceClothes = totalPriceClothes - totalPriceClothes * 0.10; 
    }

    let neededMoney = priceDecor + totalPriceClothes;
    let result = Math.abs(neededMoney - budget);

    if (neededMoney > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${result.toFixed(2)} leva more.`);
    } else  {
        console.log("Action!");
        console.log(`Wingard starts filming with ${result.toFixed(2)} leva left.`)
    }
}

movie(["9587.88","222","55.68"]);