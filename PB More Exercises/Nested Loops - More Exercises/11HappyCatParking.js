function happyCatParking (input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);

    let sumToPayAfterParking = 0;
    let currentSum = 0;

    for (let daysCount = 1; daysCount <= days; daysCount++) {
        for (let hoursCount = 1; hoursCount <= hours; hoursCount++) {
            if(daysCount % 2 == 0 && hoursCount % 2 != 0) {
                currentSum += 2.50;
                sumToPayAfterParking += 2.50;
            } else if(daysCount % 2 != 0 && hoursCount % 2 == 0) {
                currentSum += 1.25;
                sumToPayAfterParking += 1.25;
            } else {
                currentSum += 1;
                sumToPayAfterParking += 1;
            }
        }
        console.log(`Day: ${daysCount} - ${currentSum.toFixed(2)} leva`);
        currentSum = 0;
    }
    console.log(`Total: ${sumToPayAfterParking.toFixed(2)} leva`);
}


happyCatParking(["2","5"]);