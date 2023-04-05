function catWalking (input) {
    let walkingMinutes = Number(input[0]);
    let countWalking = Number(input[1]);
    let caloriesCount = Number(input[2]);

    let totalWalking = walkingMinutes  * countWalking;
    let totalCalories = totalWalking * 5;
    let calories = caloriesCount * 0.5;

    if(calories < totalCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`)      
    } 
    if (calories > totalCalories) {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`)      
    }
}

catWalking(["40",
"2",
"300"])
