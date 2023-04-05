function skeleton (input) {
    let recordMinutes = Number(input[0]);
    let recordSeconds = Number(input[1]);
    let distanceInMeters = Number(input[2]);
    let secondsPerHundredMetres = Number(input[3]);

    let recordInSeconds = recordMinutes * 60 + recordSeconds;
    let additionSeconds = (distanceInMeters / 120) * 2.5;

    let time = (distanceInMeters / 100) * secondsPerHundredMetres - additionSeconds;

    if (time > recordInSeconds) {
        console.log(`No, Marin failed! He was ${(time - recordInSeconds).toFixed(3)} second slower.`);
    } else {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${time.toFixed(3)}.`);
    }
}

skeleton(["2",
"12",
"1200",
"10"]);
