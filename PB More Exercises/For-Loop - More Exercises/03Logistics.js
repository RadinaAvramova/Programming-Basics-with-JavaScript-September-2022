function logistics (input) {
    let theNumberOfCargo = Number(input[0]);
    let priceMiniBus = 0;
    let priceTruck = 0;
    let priceTrain = 0;
    let sumCargoMiniBus = 0;
    let sumCargoTruck = 0;
    let sumCargoTrain = 0;
    let sumCargo = 0;
      
    for (let i = 1; i <= theNumberOfCargo; i++) {
        let theTonnageOfCargo = Number(input[1]);
        sumCargo += theTonnageOfCargo;
        if (theTonnageOfCargo <= 3) {
            sumCargoMiniBus += theTonnageOfCargo;
            priceMiniBus += theTonnageOfCargo * 200;
        }
         
        if (theTonnageOfCargo > 3 && theTonnageOfCargo <= 11) {
            sumCargoTruck += theTonnageOfCargo;
            priceTruck += theTonnageOfCargo * 175;
        }
          
        if (theTonnageOfCargo > 11) {
            sumCargoTrain += theTonnageOfCargo;
            priceTrain += theTonnageOfCargo * 120;
        }
    }
        
    let sumAveragePrice = (priceMiniBus + priceTruck + priceTrain) / sumCargo;
    let percentCargoMinibus = sumCargoMiniBus / sumCargo * 100;
    let percentCargoTruck = sumCargoTruck / sumCargo * 100;
    let percentCargoTrain = sumCargoTrain / sumCargo * 100;

    console.log(`${sumAveragePrice.toFixed(2)}`);
    console.log(`${percentCargoMinibus.toFixed(2)}%`);
    console.log(`${percentCargoTruck.toFixed(2)}%`);
    console.log(`${percentCargoTrain.toFixed(2)}%`);
}

logistics(["4","1","5","16","3"]);