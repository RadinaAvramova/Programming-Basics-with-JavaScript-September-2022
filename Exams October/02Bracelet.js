function bracelet (input) {
    let moneyOneDay = Number(input[0]);
    let salaryOneDay = Number(input[1]);
    let spendings = Number(input[2]);
    let pricePresent = Number(input[3]);

    let moneyFiveDays = 5 * moneyOneDay;
    let salaryFiveDays = 5 * salaryOneDay;
    let totalMoney = moneyFiveDays + salaryFiveDays;
    let totalSpendings = totalMoney - spendings;

    if (totalSpendings > pricePresent) {
        console.log(`Profit: ${totalSpendings.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${totalSpendings.toFixed(2)} BGN.`);
    }
}

bracelet(["5.12","32.05","15","150"]);
