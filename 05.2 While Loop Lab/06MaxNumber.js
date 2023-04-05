function maxNumber (input) {
    let index = 0;
    let command = input[index];
    let max = command;

    while(command !== "Stop") {
        max = Number(max);
        let value = Number(command);
        if(value > max) {
            max = value;
        }
        index++;
        command = input[index];
    }

    console.log(max);
}

maxNumber(["100","99","80","70","Stop"]);