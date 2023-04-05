function catFood (input) {
    let n = Number(input[0]);
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let food = 0;
    let index = 1;

    for (let i = 1; i <= n; i++) {
        let foodEaten = Number(input[index]);

        if (foodEaten >= 100 && foodEaten < 200) {
            group1++;
        } else if (foodEaten >= 200 && foodEaten < 300) {
            group2++;
        } else if (foodEaten >= 300 && foodEaten < 400) {
            group3++;
        }
        food += foodEaten;
        index++;
    }
    let foodPrice = (food /1000) * 12.45;
    console.log(`Group 1: ${group1} cats.`)
    console.log(`Group 2: ${group2} cats.`)
    console.log(`Group 3: ${group3} cats.`)
    console.log(`Price for food per day: ${foodPrice.toFixed(2)} lv.`);
}

catFood(["6",
"102",
"236",
"123",
"399",
"342",
"222"])

