function matchTickets (input) {
    let budget = Number(input[0]);
    let ticketType = input[1];
    let people = Number(input[2]);

    let transportCharges = 0;
    let moneyForTickets = 0;
    let moneyDifference = 0;

    if(people <= 4) {
        transportCharges = 0.75 * budget;
    } else if (people <= 9) {
        transportCharges = 0.60 * budget;
    } else if (people <= 24) {
        transportCharges = 0.50 * budget;
    } else if (people <= 49) {
        transportCharges = 0.40 * budget;
    } else if (people <= 50) {
        transportCharges = 0.25 * budget;
    }

    switch (ticketType) {
        case "Normal":
            moneyForTickets = people * 249.99;
            break;
        case "VIP":
            moneyForTickets = people * 499.99;
            break;
        default:
                moneyForTickets = people * 249.99;
                break;
    }

    moneyDifference = budget - transportCharges - moneyForTickets;
    let result = "Yes! You have " + moneyDifference.toFixed(2) + " leva left.";

    if(moneyDifference < 0) {
        result = "Not enough money! You need " +  Math.abs(moneyDifference).toFixed(2) + " leva.";
    }

    console.log(result);
}

matchTickets(["30000","VIP","49"]);