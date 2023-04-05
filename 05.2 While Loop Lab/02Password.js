function password (input) {
    let username = input[0];
    let pass = input[1];

    let index = 2;
    while (index < input.lenght) {
        if (input[index] === pass) {
            break;
        }
        index++;
    }

    console.log(`Welcome ${username}!`);
}

password(["Nakov","1234","Pass","1324","1234"]);

function password (input) {
    let username = input[0];
    let password = input[1];
    let data = input[2];
    let index = 3;
    while (data !== password) {
        data = input[index];
        index++;
    }

    console.log(`Welcome ${username}!`);
}

password(["Nakov","1234","Pass","1324","1234"]);


