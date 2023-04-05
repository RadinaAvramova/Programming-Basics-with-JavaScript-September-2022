function easterShop(input) {
    let counterEggs = Number(input.shift());
    let index = 0;
    let command = input[index];
 
    let price = 0;
    let eggsSold = 0;
 
    while (command !== "Close") {
        let currCommand = command;
        index++;
        let count = Number(input[index]);
        if (currCommand === "Buy") {
 
            if (count > counterEggs) {
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${counterEggs}.`);
                break;
            }
 
            counterEggs -= count;
            eggsSold += count;
 
        } else if (currCommand === "Fill") {
            counterEggs += count;
        }
 
        index++;
        command = input[index];
 
        price = count + counterEggs;
    }
 
    if (command === "Close") {
        console.log("Store is closed!");
        console.log(`${eggsSold} eggs sold.`);
        // console.log(`${price} eggs sold.`);
    }
}

easterShop(["13","Buy","8","Fill","3","Buy","10"]);