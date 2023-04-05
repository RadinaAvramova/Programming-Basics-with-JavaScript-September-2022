function courierExpress (input) {
    let weightShipment = Number(input[0]);
    let service = input[1];
    let length = Number(input[2]);
    let allPrice = 0;

    if (weightShipment < 1) {
        allPrice = length * 0.03;
    } else if (weightShipment >= 1 && weightShipment <= 10) {
        allPrice = length * 0.05;
    } else if (weightShipment >= 11 && weightShipment <= 40) {
        allPrice = length * 0.10;
    } else if (weightShipment >= 41 && weightShipment <= 90) {
        allPrice = length * 0.15;
    } else if (weightShipment >= 91 && weightShipment <= 150) {
        allPrice = length * 0.20;
    }

    if (service == "express"){
        if (weightShipment < 1) {
            allPrice = allPrice + 0.8 * 0.03 * length * weightShipment;
        } else if (weightShipment >= 1 && weightShipment <= 10) {
            allPrice = allPrice + 0.4 * 0.05 * length * weightShipment;
        } else if (weightShipment >= 11 && weightShipment <= 40) {
            allPrice = allPrice + 0.05 * 0.10 * length * weightShipment;
        } else if (weightShipment >= 41 && weightShipment <= 90) {
            allPrice = allPrice + 0.02 * 0.15 * length * weightShipment;
        } else if (weightShipment >= 91 && weightShipment <= 150) {
            allPrice = allPrice + 0.01 * 0.20 * length * weightShipment;
        }
    }

    console.log(`The delivery of your shipment with weight of ${weightShipment.toFixed(3)} kg. would cost ${allPrice.toFixed(2)} lv.`);
}

courierExpress(["1.5",
"standard",
"100"])
