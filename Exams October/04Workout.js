function workout (input) {
    let days = Number(input[0]);
    let km = Number(input[1]);
    let day1 =+km;
    let total = +km;
    let index = 2;
    for (let i = 1; i <=days; i++) {
        let percent = Number(input[index]);
        percent = percent / 100;
        day1 += day1 * percent;
        total += day1;
        index++;

        if (total<1000 && days==i) {
            total = 1000-total;
            console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(total)} more kilometers`);
        } if (total>1000 &&days==i) {
            total = total - 1000;
            console.log(`You've done a great job running ${Math.ceil(total)} more kilometers!`);
        }
    }
}

workout(["4",
"100",
"30",
"50",
"60",
"80"])


