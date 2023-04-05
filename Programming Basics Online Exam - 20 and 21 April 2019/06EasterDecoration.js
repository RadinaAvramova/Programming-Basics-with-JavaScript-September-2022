function easterDecoration (input) {
    let clients = Number(input[0]);
    let totalPrice = 0;

    for (let i = 0; i < clients; i++) {
        let command = Number(input[1]);
        let price = 0;
        let productCount = 0;
        while ("Finish" != command)
        {
            productCount++;
            switch (command)
            {
                case "basket":
                    price += 1.50;
                    break;
                case "wreath":
                    price += 3.80;
                    break;
                case "chocolate bunny":
                    price += 7;
                    break;
            }
            command++;
        }
        if (productCount % 2 == 0)
        {
            let discount = price * 0.2;
            price -= discount;
        }
        console.log(`You purchased ${productCount} items for ${price.toFixed(2)} leva.`);
        totalPrice += price;
    }
    console.log(`Average bill per client is: ${(totalPrice / clients).toFixed(2)} leva.`);
}

easterDecoration((["2",
"basket",
"wreath",
"chocolate bunny",
"Finish",
"wreath",
"chocolate bunny",
"Finish"]))