function depositCalculator (input) {
    let depositSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let finalSum = depositSum + depositPeriod * ((depositSum * annualInterestRate /100) /12);

    console.log(finalSum);

}

depositCalculator(["200 ","3 ","5.7 "])