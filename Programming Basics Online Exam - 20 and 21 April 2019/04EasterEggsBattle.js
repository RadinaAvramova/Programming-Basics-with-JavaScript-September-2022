/*function easterEggsBattle (input) {
    let countEggs1 = Number(input[0]);
    let countEggs2 = Number(input[1]);

    let points1 = 0;
    let points2 = 0;
    let winner = input[2];

    while (winner != "End of battle") {
        if (winner == "one") {
            countEggs2--;
        }
        else if (winner == "two") {
            countEggs1--;
        }

        if (countEggs1 == 0) {
            console.log(`Player one is out of eggs. Player two has ${countEggs2} eggs left.`);
            break;
        } else if (countEggs2 == 0) {
            console.log(`Player two is out of eggs. Player one has ${countEggs1} eggs left.`);
            break;
        }

        winner++;
    }

    if (winner == "End of battle") {
        console.log(`Player one has ${countEggs1} eggs left.`);
        console.log(`Player two has ${countEggs2} eggs left.`);
    }
}

easterEggsBattle(["5","4","one","two","one","two","two","End"]);*/

function easterEggsBattle(input) {
 
    let eggsFirst = Number(input[0]);
    let eggsSecond = Number(input[1]);
    let index = 2;
    let command = input[index];
    let i = 0;
 
    while (i < input.length) {
 
        if (command === "End of battle") { 
            console.log(`Player one has ${eggsFirst} eggs left.`);
            console.log(`Player two has ${eggsSecond} eggs left.`);
            break;
        }
 
        if (command === "one") {
            eggsSecond--;
 
            if (eggsSecond <= 0) {
                console.log(`Player two is out of eggs. Player one has ${eggsFirst} eggs left.`);
                break;
            }
 
        } else if (command === "two") {
            eggsFirst--;
 
            if (eggsFirst <= 0) {
                console.log(`Player one is out of eggs. Player two has ${eggsSecond} eggs left.`);
                break;
            }
        }
        i++;
        index++;
        command = input[index];
    }
}

easterEggsBattle(["5","4","one","two","one","two","two","End"]);

    

