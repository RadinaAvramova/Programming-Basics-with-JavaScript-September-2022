function fuelTank (input) {
    let litres = input[0];
    let fuel = input[1];
 
    if (!"Diesel" === fuel) {
        if (!"Gasoline" === fuel) {
            if (!"Gas" === fuel) {
                console.log("Invalid fuel!");
            }
        }
    }

    if (litres >= 25) {
        if ("Diesel" === fuel || "Gasoline" === fuel || "Gas" === fuel) {
            console.log(`You have enough ${fuel.toLowerCase()}.`);
        }
    }

    if (litres < 25) {
        console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
    }
}

fuelTank(["Diesel","10"]);