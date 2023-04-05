function paintingEggs (input) {
    let size = input[0];
    let color = input[1];
    let count = Number(input[2]);
    let price = 0;

    switch (size)
    {
        case "Large":
            if ("Red" == color) {
                price = 16;
            } else if ("Green" == color) {
                price = 12;
            } else if ("Yellow" == color) {
                price = 9;
            }
            break;
        case "Medium":
            if ("Red" == color) {
                price = 13;
            } else if ("Green" == color) {
                price = 9;
            } else if ("Yellow" == color) {
                price = 7;
            }
            break;
        case "Small":
            if ("Red" == color) {
                price = 9;
            } else if ("Green" == color) {
                price = 8;
            } else if ("Yellow" == color) {
                price = 5;
            }
            break;
    }

    let totalPrice = count * price;
    let expenses = totalPrice * 0.35;
    totalPrice -= expenses;

    console.log(`${totalPrice.toFixed(2)} leva.`);
}

paintingEggs(["Medium",
"Green",
"5"])
