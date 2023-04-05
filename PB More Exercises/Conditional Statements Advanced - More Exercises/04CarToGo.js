function carToGo (input) {
    let budget = Number(input[0]);
    let season = input[1];
 
    if (budget > 500) {
        console.log("Luxury class");
        console.log(`Jeep - ${(budget * 0.9).toFixed(2)}`);
    } else if (budget > 100 && budget <= 500) {
        console.log("Compact class");
        if (season == "Summer") {
            console.log(`Cabrio - ${(budget * 0.45).toFixed(2)}`);
        } else if (season == "Winter") {
            console.log(`Jeep - ${(budget * 0.8).toFixed(2)}`);
        }
    } else if (budget <= 100) {
        console.log("Economy class");
        if (season == "Summer") {
            console.log(`Cabrio - ${(budget * 0.35).toFixed(2)}`);
        } else if (season == "Winter") {
            console.log(`Jeep - ${(budget * 0.65).toFixed(2)}`);
        }
    }
}

carToGo(["450","Summer"]);