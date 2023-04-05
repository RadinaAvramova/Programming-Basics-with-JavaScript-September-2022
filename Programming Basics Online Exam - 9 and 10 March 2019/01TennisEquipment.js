function tennisEquipment([arg1,arg2,arg3]) {
    let priceOfTennisRacket = Number(parseInt(arg1));
    let numberOfTennisRackets = Number(parseInt(arg2));
    let numberOfPairsOfSneakers = Number(parseInt(arg3));
 
    let allTennisRacketPrice = priceOfTennisRacket * numberOfTennisRackets;
    let allSneakersPrice = ((priceOfTennisRacket) / 6);
    let price = allSneakersPrice*numberOfPairsOfSneakers;
 
    let total = (allTennisRacketPrice + price)*0.2;
    let totalPrice = (total + price + allTennisRacketPrice);
 
    let djokovichPrice = (totalPrice) / 8.0;
    let sponsorsPrice = (totalPrice) * (7.0 / 8.0);
 
    console.log(`Price to be paid by Djokovic ${Math.floor(djokovichPrice)}`);
 
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsPrice)}`);
}


tennisEquipment(["850","4","2"]);