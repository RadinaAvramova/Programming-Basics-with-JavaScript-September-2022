function uniquePinCodes (input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    for (let i=2; i<=first; i+= 2) {
        for (let j = 2; j <= second; j++) {
            for (let k = 2; k <= third; k += 2) {
                if (j == 2 || j== 3|| j == 5 || j == 7) {
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}

uniquePinCodes(["3","5","5"]);