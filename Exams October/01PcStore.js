function pcStore (input) {
    let priceProcessor = Number(input[0]);
    let priceVideoCard = Number(input[1]);
    let priceOneRamMemory = Number(input[2]);
    let numberRamMemory = Number(input[3]);
    let percentDiscount = Number(input[4]);

    let priceProcessorLeva = priceProcessor * 1.57;
    let priceVideoCardLeva = priceVideoCard * 1.57;
    let priceOneRamMemoryLeva = priceOneRamMemory * 1.57;

    let totalPriceRamMemory = priceOneRamMemoryLeva * numberRamMemory;
    let priceProcessorAfterDiscount = priceProcessorLeva * 0.95;
    let priceVideoCardAfterDiscount = priceVideoCardLeva * 0.95;

    let totalPrice = priceProcessorAfterDiscount + priceVideoCardAfterDiscount + totalPriceRamMemory;

    console.log(`Money needed - ${totalPrice} leva.`);   
}

pcStore(["500","200","80","2","0.05"]);
