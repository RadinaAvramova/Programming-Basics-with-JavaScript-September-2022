function minNumber(input) {
    let n = Number(input[0]);
    if (n > 0) {
        let min = Number(input[1]);
        for (let i = 2; i <= n; i++) {
            let num = Number(input[i]);
            if (min > num) {
                min = num;
            }
        }
        console.log(min);
    }
}

minNumber(["100","99","80","70","Stop"]);
