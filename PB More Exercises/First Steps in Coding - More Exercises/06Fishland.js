function fishLand (input) {
    let mackerelPrice = Number(input[0]);
    let sprinklePrice = Number(input[1]);
    let bonitoKilograms = Number(input[2]);
    let safridKilograms = Number(input[3]);
    let musselsKilograms = Number(input[4]);

    let bonitoPrice = mackerelPrice + (mackerelPrice * 0.60);
    let sumBonito = bonitoKilograms * bonitoPrice;
    let safridPrice = sprinklePrice + (sprinklePrice * 0.80);
    let sumSafrid = safridKilograms * safridPrice;
    let sumMussels = musselsKilograms * 7.50;

    let totalSum = sumBonito + sumSafrid + sumMussels;
    console.log(totalSum.toFixed(2));
}

fishLand(["6.90","4.20","1.5","2.5","1"]);