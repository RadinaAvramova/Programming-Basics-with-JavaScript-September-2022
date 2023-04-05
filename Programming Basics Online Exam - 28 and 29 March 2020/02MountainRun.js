function mountainRun (input) {

    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeFor1Meter = Number(input[2]);

    let timeForAllMeters = distance * timeFor1Meter;

    let delay = Math.ceil(distance / 50 * 30);
    let totalTime = timeForAllMeters + delay;
    let missingSeconds = Math.abs(record - totalTime);

    if (totalTime <= record) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else if (record <= totalTime) {
        console.log(`No! He was ${missingSeconds.toFixed(2)} seconds slower.`);
    }
}

mountainRun(["10164",
"1400",
"25"]);
