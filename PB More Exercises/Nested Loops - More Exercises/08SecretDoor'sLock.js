function secretDoorLock (input) {
    let n100 = Number(input[0]);
    let n10 = Number(input[1]);
    let n1 = Number(input[2]);

    for (let i = 2; i <= n100; i++) {
        if (i % 2 == 0){
            for (let j = 2; j <= n10; j++) {
                if (j == 2 || j == 3 || j == 5) {
                    for (let k = 2; k <= n1; k++) {
                        if (k % 2 == 0) {
                            console.log(`${i} ${j} ${k}\n`);
                        }
                   }
                }
            }
        }
    }
}

secretDoorLock(["3","5", "5"]);