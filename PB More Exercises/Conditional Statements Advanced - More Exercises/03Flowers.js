function flowers (input) {
    var hrizantemi = Number(input[0]);
    var rozi = Number(input[1]);
    var laleta = Number(input[2]);
    var season = input[3];
    var holiday = input[4];

    let hrprice = 0, roprice = 0, laprice = 0;//, totalprice = 1;
    
    if (season == "Spring" || season == "Summer") {
        hrprice = 2 * hrizantemi;
        roprice = 4.1 * rozi;
        laprice = 2.5 * laleta;
    }
    if (season == "Autumn" || season == "Winter") {
        hrprice = 3.75 * hrizantemi;
        roprice = 4.5 * rozi;
        laprice = 4.15 * laleta;
    }

    let totalPrice = hrprice + roprice + laprice;

    //if (holiday == "N") {
        //    totalprice = hrizantemi * hrprice + rozi * roprice + laleta * laprice;
    //}

    if (laleta > 7 && season == "Spring") {
        totalPrice *= 0.95;//= totalprice - totalprice * 5 / 100;
    }

    if ((rozi >= 10) && (season == "Winter")) {
        totalPrice *= 0.90;//= totalprice - totalprice * 10 / 100;
    }

    if (holiday == "Y") {
        totalPrice *= 1.15;//= (hrizantemi * hrprice + rozi * roprice + laleta * laprice) * 1.15;
        // + ((hrizantemi * hrprice + rozi * roprice + laleta * laprice) * 15 / 100);
    }

    if (rozi + laleta + hrizantemi >= 20) {
        totalPrice *= 0.80;//= totalprice - totalprice * 20 / 100;
    }

    console.log(`${(totalPrice + 2).toFixed(2)}`);
}

flowers(["2","4","8","Spring","Y"]);
