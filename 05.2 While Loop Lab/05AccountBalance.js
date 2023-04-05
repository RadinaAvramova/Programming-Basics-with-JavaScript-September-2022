function accountBalance (input) {
    let index = 0;
    let command = input[index];
    let sum = 0;

    while (command !== "NoMoreMoney") {
        let increase = Number(command);
        if (increase < 0) {
            console.log("Invalid Operation!");
            break;
        }

        console.log("Increase:"+ increase.toFixed(2));
        sum = sum + increase;
        index++;
        command = input[index];
    }

    console.log("Total: " + sum.toFixed(2));
}

accountBalance(["5.51","69.42","100","NoMoreMoney"]);

function accountBalance (input) {
    let deposit = input[0];
    let balance = 0;
    let index = 1;

    while (deposit !== "NoMoreMoney") {
        let amount = Number(deposit);
        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }
        balance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        deposit = input[index];
        index++;
    }

    console.log(`Total: ${balance.toFixed(2)}`);
}

accountBalance(["5.51","69.42","100","NoMoreMoney"]);