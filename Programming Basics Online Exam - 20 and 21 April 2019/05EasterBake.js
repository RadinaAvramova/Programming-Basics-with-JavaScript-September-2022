function easterBake(input) {
    let kozunaci = Number(input[0]);
    let index = 1;
    let sugar = 0;
    let flour = 0;
    let maxFlour = 0;
    let maxSugar = 0;
    let sugarNeeded = 0;
    let flourNeeded = 0;
 
 
    for (let i = 1; i <= kozunaci; i++) {
 
        let sugarQuantity = Number(input[index++]);
        let flourQuantity = Number(input[index++]);
 
        sugar += sugarQuantity;
        flour += flourQuantity;
 
        if (sugarQuantity > maxSugar) {
            maxSugar = sugarQuantity;
        }
 
        if (flourQuantity > maxFlour) {
            maxFlour = flourQuantity;
        }
 
    }
 
    sugarNeeded = Math.ceil(sugar / 950.0);
 
    flourNeeded = Math.ceil(flour / 750.0);
 
    console.log(`Sugar: ${sugarNeeded}`);
    console.log(`Flour: ${flourNeeded}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
 
}
 
easterBake(['3', '400', '350', '250', '300', '450', '380', '']);