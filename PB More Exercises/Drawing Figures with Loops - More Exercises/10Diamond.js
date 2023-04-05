function diamond (input) {
    let n = Number(input[0]);
    let chertichki = (n - 1) / 2;

    for (let i = 1; i <= (n - 1) / 2; i++) {
        console.log(('-', chertichki));
        console.log("*");
        let mid = n - 2 * chertichki - 2;
        if (mid >= 0) {
            console.log(('-', mid));
            console.log("*");
        }
        console.log(('-', chertichki));
        chertichki--;
    }

    for (let i = n / 2; i < n; i++) {
        console.log(('-', chertichki));
        console.log("*");
        let mid = n - 2 * chertichki - 2;
        if (mid >= 0) {
            console.log(('-', mid));
            console.log("*");
        }
        console.log(('-', chertichki));
        chertichki++;
    }
}

diamond(["6"]);