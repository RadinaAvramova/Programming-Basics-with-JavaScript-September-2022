function sumSeconds (input) {
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let totalTimeSec = firstTime + secondTime + thirdTime;

    let timeInMin = Math.floor(totalTimeSec / 60);
    let timeInSec = totalTimeSec % 60;
    if (timeInSec < 10) {
        console.log(`${timeInMin}:0${timeInSec}`);
    } else {
        console.log(`${timeInMin}:${timeInSec}`);
    }
}

sumSeconds(["14","12","10"]);