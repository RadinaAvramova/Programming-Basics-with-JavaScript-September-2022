function cinema (input) {
    let projection = input[0].toLowerCase();
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    
    let full = rows * columns;
    let income = 0;

    switch (projection) {
        case "premiere":
            income = full * 12.0;
            break;
        case "normal":
            income = full * 7.50;
            break;
        case "discount":
            income = full * 5.00;
            break;
    }
    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Premiere","10","12"]);