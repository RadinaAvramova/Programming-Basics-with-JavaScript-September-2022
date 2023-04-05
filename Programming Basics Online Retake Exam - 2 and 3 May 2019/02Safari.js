function safari(input) {
    let budget = Number(input.shift());
    let fuelQty = Number(input.shift());
    let dayOfWeek = input.shift();
 
    let fuelTotalPrice = fuelQty * 2.1;
    let totalPrice = fuelTotalPrice + 100;
    totalPrice *= dayOfWeek == "Saturday" ? 0.9 : 0.8;
    
    let result = Math.abs(totalPrice - budget);
    if (totalPrice > budget) {
        console.log(`Not enough money! Money needed: ${result.toFixed(2)} lv.`);
    } else {
        console.log(`Safari time! Money left: ${result.toFixed(2)} lv.`);
    }
}

safari(["1000","10","Sunday"]);