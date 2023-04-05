function truckDriver (input) {
    let season = input[0];
    let kilometers = Number(input[1]);
    let money = 0;

    if (season == "Summer") {
        if (kilometers <= 5000) {
            money = (kilometers * 0.90);
        }
    } else if (5000 < kilometers && kilometers <= 10000) {
            money = (kilometers * 1.10);
    } else {
            money = (kilometers * 1.45);
    }
    

    if (season == "Winter") {
        if (kilometers <= 5000) {
            money = (kilometers * 1.05);
        }
    } else if (5000 < kilometers && kilometers <= 10000) {
            money = (kilometers * 1.25);
    } else {
        money = (kilometers * 1.45);
    }

    if (season == "Spring" || season =="Autumn") {
        if (kilometers <= 5000) {
            money = (kilometers * 0.75);
        }
    } else if (5000 < kilometers && kilometers <= 10000) {
        money = (kilometers * 0.95);
    } else {
        money = (kilometers * 1.45);
    }
    
    money = (money * 4);
    money *= 0.9;

    console.log(`${money.toFixed(2)}`);
}

truckDriver(["Summer","3455"]);