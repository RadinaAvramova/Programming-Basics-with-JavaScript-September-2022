function house (input) {
    let n = Number(input[0]);
    let startCount = 1;

    if (n % 2 == 0) {
	    startCount++;
    }
            
    for (let row = 0; row < (n + 1) / 2; row++) {
        let dashCount = (n - startCount) / 2;
        console.log(('-',dashCount) + ('*',startCount) + ('-',dashCount));
        startCount += 2;
    }

    for (let row = 0; row < n / 2; row++) {
        ('|' + ('*', n - 2) + '|');
    }
}

house(["2"]);