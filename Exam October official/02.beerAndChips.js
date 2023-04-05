function beerAndChips (input) {
    let nameFootballFan = input[0];
    let budget = Number(input[1]);
    let numberBootlesBeer = Number(input[2]);
    let numberPacketsChips = Number(input[3]);
    
    let totalPRiceBeer = 1.20 * numberBootlesBeer;
    let priceChips = 0.45 * totalPRiceBeer;
    let totalPriceChips = Math.ceil(priceChips * numberPacketsChips);
    let totalPRice = totalPRiceBeer + totalPriceChips;

    if(totalPRice <= budget) {
        totalPRice = budget - totalPRice;
        console.log(`${nameFootballFan} bought a snack and has ${totalPRice.toFixed(2)} leva left.`)
    } else if(totalPRice > budget) {
        totalPRice = totalPRice - budget;
        console.log(`${nameFootballFan} needs ${totalPRice.toFixed(2)} more leva!`);
    }
}

beerAndChips(["Valentin",
"5",
"2",
"4"])



