function bikeRace (input) {
    let budged = Number(input[0]);
    let persons = Number(input[1]);
    let category = input[2];

    let transport = 0;

    let enough = new Boolean(false);
    let ostatak = 0.00;
    let needed = 0.00;

    if (persons >= 1 && persons <= 4) {
        transport = 75.00;
    } else if (persons >= 5 && persons <= 9) {
        transport = 60.00;
    } else if (persons >= 10 && persons <= 24) {
            transport = 50.00;
    } else if (persons >= 25 && persons <= 49) {
            transport = 40.00;
    } else {
            transport = 25.00;
    }

    let budgedTransp = budged * transport / 100;
    let budgetTicets = budged - budgedTransp;


    if (category == "VIP") {
        if (budgetTicets / persons > 499.99) {
            enough = true;
            ostatak = budgetTicets - (persons * 499.99);
        } else {
            enough = false;
            needed = (persons * 499.99) - budgetTicets;
        }            
    } else if (category == "Normal")
        if (budgetTicets / persons > 249.99) {
            enough = true;
            ostatak = budgetTicets - (persons * 249.99);
        } else {
            enough = false;
            needed = (persons * 249.99) - budgetTicets;
        }            
    } if (enough) {
        console.log(`Yes! You have ${ostatak.toFixed(2)} leva left.`);
    }else {
        console.log(`Not enough money! You need ${needed.toFixed(2)} leva.`);
}


bikeRace(["10","20","trail"]);
