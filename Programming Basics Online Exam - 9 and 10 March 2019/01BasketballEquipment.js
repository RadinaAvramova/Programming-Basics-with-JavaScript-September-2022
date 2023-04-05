function basketballEquipment (input) {
    let moneyForYear = Number(input[0]);
    let sneakers = moneyForYear - 0.40 * moneyForYear;
    let equipment = sneakers - 0.2 * sneakers;
    let ball = 1.0 / 4 * equipment;
    let accs = 1.0 / 5 * ball;

    let totalSum = moneyForYear + sneakers + equipment + ball + accs;

    console.log(totalSum.toFixed(2));
}


basketballEquipment(["320"]) 