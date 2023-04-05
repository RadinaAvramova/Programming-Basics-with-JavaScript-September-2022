function chrismasGifts (input) {
    let age = Number(input[0]);
    let toyPrice = 5;
    let sweaterPrice = 15;
    let count16 = 0;
    let countAbove = 0;
    let toysMoney = 0;
    let sweaterMoney = 0;
    let command = input.shift();
    let index = 0;


    while (command == 'Christmas') {
        age = Number(input[index]);
        index++;
        if (age <= 16) {
            count16 = count16 + count16;
            toysMoney+= toyPrice;
            command = input.shift();
            count16++;
            toysMoney++;
            index++;
            continue;
        } else {
            countAbove += countAbove;
            sweaterMoney += sweaterPrice;
            command = input.shift();
            countAbove++;
            sweaterMoney++;
            index++;
            break;
        }
        //if (command != "Christmas") {
            //break;
        //} 
        //continue;
    }
    command = input.shift();
    countAbove++;
    count16++;
    toysMoney++;
    sweaterMoney++;
    index++;

    console.log(`Number of adults: ${countAbove}`);
    console.log(`Number of kids: ${count16}`);
    console.log(`Money for toys: ${toysMoney}`);
    console.log(`Money for sweaters: ${sweaterMoney}`);
}

chrismasGifts(["16",
"16",
"16",
"16",
"16",
"Christmas"])
