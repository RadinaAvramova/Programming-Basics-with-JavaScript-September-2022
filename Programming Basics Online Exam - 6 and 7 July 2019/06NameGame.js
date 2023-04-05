function nameGame (input) {
    let name = input[0];
    let bestPoints = 0;
    let winner = "";

    while(!"Stop" === name) {
        let currentPoints = 0;
        for (let i=0; i<name.lenght(); i++) {
            let number = Number(input[1]);
            if(number == name.charAt(i)) {
                currentPoints += 10;
            } else {
                currentPoints += 2;
            }
        }

        if(currentPoints >= bestPoints) {
            bestPoints = currentPoints;
            winner = name;
        }
        name = input[5];
    }
    console.log(`The winner is ${name} with ${bestPoints} points!`);
}

nameGame(["Ivan",
"73",
"20",
"98",
"110",
"Ivo",
"80",
"65",
"87",
"Stop"])