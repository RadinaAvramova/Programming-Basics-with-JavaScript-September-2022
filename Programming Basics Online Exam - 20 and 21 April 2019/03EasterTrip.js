function easterTrip (input) {
    let country = input[0];
    let dates = input[1];
    let days = Number(input[2]);
    let pricePerNight = 0;

    switch (country)
    {
        case "France":
            switch (dates)
            {
                case "21-23": pricePerNight = 30; break;
                case "24-27": pricePerNight = 35; break;
                case "28-31": pricePerNight = 40; break;
            }
            break;
        case "Italy":
            switch (dates)
            {
                case "21-23": pricePerNight = 28; break;
                case "24-27": pricePerNight = 32; break;
                case "28-31": pricePerNight = 39; break;
            }
            break;
        case "Germany":
            switch (dates)
            {
                case "21-23": pricePerNight = 32; break;
                case "24-27": pricePerNight = 37; break;
                case "28-31": pricePerNight = 43; break;
            }
            break;
    }

    let totalPrice = days * pricePerNight;

    console.log(`Easter trip to ${country} : ${totalPrice.toFixed(2)} leva.`);
}


easterTrip(["Germany",
"24-27",
"5"])
