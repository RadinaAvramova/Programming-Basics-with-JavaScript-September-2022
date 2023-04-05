function weddingSeats (input) {
    let sector = input[0].charAt(0);
    let rows = Number(input[1]);
    let seats = Number(input[2]);

    let factor = 0;
    let counter = 0;

    for (let i = 'A'; i <= sector; i++, rows++) {
        for (let j = 1; j <= rows; j++) {
            factor = (j % 2 == 0) ? 2 : 0;
            for (let k = 'a'; k < 'a' + seats + factor; k++) {
                console.log(`${i}${j}${k}`);
                counter++;
            }
        }
    }

    console.log(counter);
}

weddingSeats(["B","3", "2"]);

