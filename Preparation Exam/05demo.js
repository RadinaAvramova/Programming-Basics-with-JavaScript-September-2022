function demo(input) {
    let budget = Number(input[0]);
    let index = 1;
    let productsBoughtCount = 0;
    let totalSpent = 0;

    while (input[index] != "Stop") {
        let productName = input[index];
        index++;
        let productPrice = Number(input[index]);
        index++;

        if(productPrice <= budget) {
            productsBoughtCount++;
            budget = budget - productPrice;
            totalSpent = totalSpent + productPrice;
        } else {
            budget = budget - productPrice;
            break;
        }
    }

    if(budget >= 0) {
        console.log(`You bought ${productsBoughtCount} products for ${totalSpent.toFixed(2)} leva.`);
    } else {
        console.log("You don't have enough money");
        console.log(`You need ${(budget * -1).toFixed(2)} leva!`); 
    } 
}