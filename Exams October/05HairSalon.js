function hairSalon (input) {
    let dailyGoal = Number(input[0]);
    let moneyCount = 0;

    while (moneyCount < dailyGoal) {
        command = input();
        if (command != "closed") {
            type = input();
        }
        if (command == "haircut") {
            if (type == "mens") {
                moneyCount += 15;
            }
            if (type == "ladies") {
                moneyCount += 20;
            }
            if (type == "kids") {
                moneyCount += 10;
            }
        }
        if (command == "color") {
            if (type == "touch up") {
                moneyCount += 20;
            }
            if (type == "full color") {
                moneyCount += 30;
            }
        }
        if (command == "closed") {
            break;
        }

        if (moneyCount >= dailyGoal) {
            console.log("You have reached your target for the day!")
        } else {
            diff = Math.abs(dailyGoal - moneyCount);
            console.log(`Target not reached! You need ${diff} lv. more.`)
            console.log(`Earned money: ${moneyCount}lv.`)
        }
    }
}

hairSalon(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"]);