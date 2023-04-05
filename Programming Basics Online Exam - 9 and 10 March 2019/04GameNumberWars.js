/*function gameNumberWars (input) {
    let player1 = input[0];
    let player2 = input[1];

    let card1 = Number(input[2]);
    let win1 = 0;
    let win2 = 0;
    while (!card1 === "End of game") {
        let card2 = Number(input[3]);

        let points1 = Number(input[4]);
        let points2 = Number(input[5]);

        if (points1 > points2) {
            win1 += points1 - points2;
        } else if (points1 < points2) {
            win2 += (points2 - points1);
        } else {
            console.log("Number wars!");
            let lastCard1 = Number(input[6]);
            let lastCard2 = Number(input[7]);

            if (lastCard1 > lastCard2) {
                console.log(`${player1} is winner with ${win1} points.`);
                break;
            } else {
                console.log(`${player2} is winner with ${win2} points.`);
                break;
            }
        }
        card1++;
    }

    if (card1 === "End of game") {
        console.log(`${player1} has ${win1} points`);
        console.log(`${player2} has ${win2} points`);
    }
}

gameNumberWars(["Desi",
"Niki",
"7",
"5",
"3",
"4",
"3",
"3",
"5",
"3"]);*/

/*function numberWars(input) {
    let playerOneName = input[0];
    let playerTwoName = input[1];
    let playerOnePoints = Number(input[2]);
    let playerTwoPoints = Number(input[3]);
    let playerOneSumPoints = 0;
    let playerTwoSumPoints = 0;
 
    while (playerOnePoints != 'End of game') {
        playerOnePoints = Number(playerOnePoints);
        if (playerOnePoints > playerTwoPoints) {
            playerOneSumPoints += playerOnePoints - playerTwoPoints;
        } else if (playerTwoPoints > playerOnePoints) {
            playerTwoSumPoints += playerTwoPoints - playerOnePoints;
        } else {
            playerOnePoints = Number(input.shift());
            playerTwoPoints = Number(input.shift());
            if (playerOneSumPoints > playerTwoSumPoints) {
                console.log(`Number wars!`);
                console.log(`${playerOneName} is winner with ${playerOneSumPoints} points`);
                break;
            } else if (playerTwoSumPoints > playerOneSumPoints) {
                console.log(`Number wars!`);
                console.log(`${playerTwoName} is winner with ${playerTwoSumPoints} points`);
                break;
            }
        }
        playerOnePoints = Number(input[4]);
        playerTwoPoints = Number(input[5]);
    }
    console.log(`${playerOneName} has ${playerOneSumPoints} points`);
    console.log(`${playerTwoName} has ${playerTwoSumPoints} points`);
}

numberWars(["Desi",
"Niki",
"7",
"5",
"3",
"4",
"3",
"3",
"5",
"3"]);*/
