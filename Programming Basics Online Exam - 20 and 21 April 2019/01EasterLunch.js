function easterLunch(input) {

    let cakesCount = Number(input[0]);
    let countBoxEggs = Number(input[1]);
    let cookies = Number(input[2]);

    let pricePainterEggs = countBoxEggs * 12 * 0.15; 

    let priceCakes = cakesCount * 3.20;
    let priceEggs = countBoxEggs * 4.35;
    let priceBiscuits = cookies * 5.40;

    let totalPrice = priceCakes + priceEggs + priceBiscuits + pricePainterEggs;

    console.log(totalPrice.toFixed(2));
}

easterLunch(["3","2","3"]);