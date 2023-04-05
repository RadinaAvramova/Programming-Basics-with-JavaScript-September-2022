function newHouse(input) {
    let flowers= input.shift();
    let count=Number(input.shift());
    let budget=Number(input.shift());
    let price=0;
     
    switch(flowers){
    case "Roses": {
        price = count * 5;
        if (count > 80) {
            price *= 0.9;
        }
    };  break;
     
    case "Dahlias": {
        price = count * 3.8;
        if (count > 90) {
            price *= 0.85;
        }
    }; break;
    case "Tulips": {
        price = count * 2.8;
        if (count > 80) {
            price *= 0.85;
        }
    }; break;
    case "Narcissus": {
       price = count*3;
        if (count < 120) {
            price *= 1.15;
        }
    }; break;
    case "Gladiolus":{
        price = count * 2.5;
        if (count < 80) {
            price *= 1.2;
        }
    }; break;
    }

    let diff = Math.abs(price-budget);
     
    if (price > budget) {
        console.log (`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    } else {
        console.log (`Hey, you have a great garden with ${count} ${flowers} and ${diff.toFixed(2)} leva left.`)
    }
}

newHouse(["Roses","55","250"]);

function newHouse(input) {
    let flowerType = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
 
    let roses = 5;
    let dahlias = 3.80;
    let tulips = 2.80;
    let narcissus = 3;
    let gladiolus = 2.50;
    
    let totalPrice = 0;
    if (flowerType == "Roses") {
        totalPrice = quantity * roses; 
        if (quantity > 80) {
            totalPrice = totalPrice - totalPrice * 10 /100;
        }
    } else if (flowerType == "Dahlias") {
        totalPrice = quantity * dahlias;
        if (quantity > 90) {
            totalPrice = totalPrice - totalPrice * 15 / 100;
        }
    } else if (flowerType == "Tulips") {
        totalPrice = quantity * tulips;
        if (quantity > 80) {
            totalPrice = quantity * tulips - (quantity * tulips) * 15 / 100;
        }
    } else if (flowerType == "Narcissus") {
        totalPrice = quantity * narcissus;
        if (quantity < 120) {
            totalPrice = totalPrice + totalPrice * 15 / 100;
        }
    } else if (flowerType == "Gladiolus") {
        totalPrice = quantity * gladiolus;
        if (quantity < 80) {
            totalPrice = totalPrice + totalPrice * 20 / 100;
        }
    }
    if (totalPrice <= budget) {
        console.log(`Hey, you have a great garden with ${quantity} ${flowerType} and ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`)
    }
}


function newHouse(input) {
    let flowers = input[0];
    let numberFlowers = Number(input[1]);
    let budget = Number(input[2]);
 
    let rosesPrice = 5;
    let dahliasPrice = 3.80;
    let tulipsPrice = 2.80;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.50;
 
    let totalCost = 0;
    if (flowers == "Roses") {
        totalCost = rosesPrice * numberFlowers;
        if (numberFlowers > 80) {
            totalCost *= 0.90;
        }
    } else if (flowers == "Dahlias") {
        totalCost = dahliasPrice * numberFlowers;
        if (numberFlowers > 90) {
            totalCost *= 0.85;
        }
    } else if (flowers == "Tulips") {
        totalCost = tulipsPrice * numberFlowers;
        if (numberFlowers > 80) {
            totalCost *= 0.85;
        }
    } else if (flowers == "Narcissus") {
        totalCost = narcissusPrice * numberFlowers;
        if (numberFlowers < 120) {
            totalCost *= 1.15;
        }
    } else if (flowers == "Gladiolus") {
        totalCost = gladiolusPrice * numberFlowers;
        if (numberFlowers < 80) {
            totalCost *= 1.20;
        }
    } 
 
    if (budget >= totalCost) {
        console.log(`Hey, you have a great garden with ${numberFlowers} ${flowers} and ${(budget - totalCost).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(totalCost - budget).toFixed(2)} leva more.`)
    }
}
// newHouse(["Roses", "55", "250"])
// newHouse(["Tulips", "88", "260"])
// newHouse(["Narcissus", "119", "360"])