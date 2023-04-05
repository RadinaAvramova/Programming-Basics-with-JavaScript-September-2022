function gameOfIntervals (input) {
    let gameturns = Number(input[0]);
    let numsToCheck = Number(input[1]);
 
    let sum = 0, invalid = 0;
    let one = 0, two = 0, three = 0, four = 0, five = 0;
 
    for (let i = 1; i <= gameturns; i++) {
        if (numsToCheck < 0 || numsToCheck > 50) {
            sum /= 2;
            invalid++;
        } else if (numsToCheck <= 9) {
            sum = sum + (0.2 * numsToCheck);
            one++;
        } else if (numsToCheck <= 19) {
            sum = sum + (0.3 * numsToCheck);
            two++;
        } else if (numsToCheck <= 29) {
            sum = sum + (0.4 * numsToCheck);
            three++;
        } else if (numsToCheck <= 39) {
            sum += 50;
            four++;
        } else if (numsToCheck <= 50) {
            sum += 100;
            five++;
        }
    }
 
    let resultOne = (one / gameturns) * 100;
    let resultTwo = (two / gameturns) * 100;
    let resultThree = (three / gameturns) * 100;
    let resultFour = (four / gameturns) * 100;
    let resultFive = (five / gameturns) * 100;
    let resultInvalid = (invalid / gameturns) * 100;
 
    console.log(`${sum}`);
    console.log(`From 0 to 9: ${resultOne}%`);
    console.log(`From 10 to 19: ${resultTwo}%`);
    console.log(`From 20 to 29: ${resultThree}%`);
    console.log(`From 30 to 39: ${resultFour}%`);
    console.log(`From 40 to 50: ${resultFive}%`);
    console.log(`Invalid numbers: ${resultInvalid}%`);
}

gameOfIntervals(["10","43","57","-12","23","12","0","50","40","30","20"]);