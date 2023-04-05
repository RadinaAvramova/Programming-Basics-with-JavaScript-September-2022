function roomPainting (input) {
    let numberPackagesPaint = Number(input[0]);
    let numberWallpapers = Number(input[1]);
    let priceGlooves = Number(input[2]);
    let priceBrush = Number(input[3]);

    let pricePaint = 21.50 * numberPackagesPaint;
    let priceWallpapers = 5.20 * numberWallpapers;
    let numberNeedeGlooves = Math.ceil(0.35 * numberWallpapers);
    let numberNeeededBrush = Math.floor(0.48 * numberPackagesPaint);

    let totalPriceGlooves = numberNeedeGlooves * priceGlooves;
    let totalPriceBrush = numberNeeededBrush * priceBrush;
    let totalPrice = pricePaint + priceWallpapers + totalPriceGlooves + totalPriceBrush;
    let priceDelivery = (1/15 * totalPrice);

    console.log(`This delivery will cost ${priceDelivery.toFixed(2)} lv.`) 
}

roomPainting(["10","8","2.2","5"]);
