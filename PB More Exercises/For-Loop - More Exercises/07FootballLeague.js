function footballLeague (input) {
    let stadiumCapacity = Number(input[0]);
    let fansCount = Number(input[1]);
 
    let aCounter = 0;
    let bCounter = 0;
    let vCounter = 0;
    let gCounter = 0;
 
    for (let i = 1; i <= fansCount; i++) {
        let sector = input[2];
 
        switch (sector) {
            case "A": {
                aCounter++;
                break;
            }
            case "B": {
                bCounter++;
                break;
            }
            case "V": {
                vCounter++;
                break;
            }
            case "G": {
                gCounter++;
                break;
            }
        }   
    }
 
    let aFansPercent = aCounter * 1.0 / fansCount * 100;
    let bFansPercent = bCounter * 1.0 / fansCount * 100;
    let vFansPercent = vCounter * 1.0 / fansCount * 100;
    let gFansPercent = gCounter * 1.0 / fansCount * 100;
    let allFansPercent = fansCount * 1.0 / stadiumCapacity * 100;
 
    console.log(`${aFansPercent.toFixed(2)}%\n ${bFansPercent.toFixed(2)}%\n ${vFansPercent.toFixed(2)}%\n ${gFansPercent.toFixed(2)}%\n ${allFansPercent.toFixed(2)}%\n`);
}

footballLeague(["76","10","A","V","V","V","G","B","A","V","B","B"]);