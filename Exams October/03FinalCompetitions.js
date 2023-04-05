/*function finalCompetition (input) {
    let numberDancers = Number(input[0]);
    let numberPoints = Number(input[1]);
    let season = input[2];
    let place = input[3];
    let charityMoney = 0;
    let moneyDancers = 0;

    if(place === "Bulgaria") {
        let sumBulgaria = numberDancers * numberPoints;
        switch(season) {
            case "winter": 
                spendings = sumBulgaria * 0.92;
                charityMoney = 0.75 * spendings;
                let moneyRest = spendings - charityMoney;
                moneyDancers = moneyRest / numberDancers; 
            break;
            case "summer": spendings = sumBulgaria * 0.95; break;
        }
    } else if(place === "Abroad") {
        let sumAbroad = numberDancers * numberPoints;
        let percenSum = sumAbroad + (0.5 * sumAbroad);
        switch(season) {
            case "Winter": 
                spendings = sumAbroad * 0.82; break;
            case "Summer": 
                spendings = sumBulgaria * 0.90; 
                charityMoney = 0.75 * spendings;
                let moneyRest = spendings - charityMoney;
                moneyDancers = moneyRest / numberDancers; 
            break;
        }
        console.log(`Charity - ${charityMoney.toFixed(2)}`);
        console.log(`Money per dancer - ${moneyDancers.toFixed(2)}`);
    
    }
}

finalCompetition(["1",
"89.5",
"summer",
"Abroad"]) */

function finalCompetition (input) {
    let numberDancer = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let location = input[3];
    let price = 0;
    let razhodi = 0;
    let totalPrice = 0;
    if (season== "summer") {
        if (location== "Bulgaria") {
            price = points * numberDancer;
            razhodi = price * 0.05;
            totalPrice = price - razhodi;
        } else if (location== "Abroad") {
            price = numberDancer * points;
            let bonus = price * 0.50;
            totalPrice = (bonus + price);
            razhodi = totalPrice * 0.10; //T
            totalPrice -= razhodi;
        }
    } else if (season=="winter") {
        if (location == "Bulgaria") {
            price = points * numberDancer;
            razhodi = price * 0.08;
            totalPrice = price - razhodi;
        } else if (location == "Abroad") {
            price = numberDancer * points;
            let bonus = price * 0.50;
            totalPrice = (bonus + price);
            razhodi = totalPrice * 0.15;
            totalPrice -= razhodi;
        }
    }

    let charity = totalPrice * 0.75;
    let moneyPerDancer = (totalPrice - charity) / numberDancer;
    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}

finalCompetition(["1",
"89.5",
"summer",
"Abroad"])



