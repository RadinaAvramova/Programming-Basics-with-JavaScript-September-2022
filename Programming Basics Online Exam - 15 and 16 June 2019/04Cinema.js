function cinema (input) {
    let seats = Number(input[0]);
    let profit = 0;

    //let input = Number(input[1]);
    
    while (!"Movie time!" === input) {
        let people = Number(input[2]);
        if (seats - people >= 0) {
            seats -= people;
            profit += people * 5;
            if (people % 3 == 0) {
                profit -= 5;
            }
        } else {
            console.log("The cinema is full.");
            break;
        }
        input++;
    }

    if ("Movie time!" === input) {
        console.log(`There are ${seats} seats left in the cinema.`)
    }

    console.log(`Cinema income - ${profit} lv.`);
}

cinema(["60",
"10",
"6",
"3",
"20",
"15",
"Movie time!"]);