function squareFrame (input) {
    let n = Number(input[0]);

    for (let i = 0; i < n; i++) {
        if (i == 0 || i == n - 1) {
            console.log(('*', n));
        } else {
            console.log('*' + (' ', n - 2) + '*');
        }
    }
}

squareFrame(["3"]);