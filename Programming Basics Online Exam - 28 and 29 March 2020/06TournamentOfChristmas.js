function tournamentOfChristmas (input) {
    let dayCount = Number(input[0]);
 
    let dayWin = 0;
    let dayLose = 0;
    let allProfit = 0;

    for (let i = 1; i <= dayCount; i++) {
        let countWinGames = 0;
        let countLoseGames = 0;
        let dayProfit = 0;

        while (true) {
            input = input[1];

            if (input == "Finish") {
                break;
            }

            let result = input[2];
            if (result == "win") {
                countWinGames++;
                dayProfit += 20;
            } else if (result == "lose") {
                countLoseGames++;
            }
        }
        if (countWinGames > countLoseGames) {
            dayProfit *= 1.1;
            dayWin++;
        } else {
            dayLose++;
        }
        allProfit += dayProfit;
    }
    if (dayWin > dayLose) {
        allProfit *= 1.2;
        console.log(`You won the tournament! Total raised money: ${allProfit}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${allProfit}`);
    }
}

tournamentOfChristmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"]);
