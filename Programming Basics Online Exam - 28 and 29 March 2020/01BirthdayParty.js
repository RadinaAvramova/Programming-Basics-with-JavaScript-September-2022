function birthdayParty(input) {
    // let rent = Number(input[0]);
    let rent = Number(input);
    let cake = rent * 0.20;
    let drinks = cake - (cake * 0.45);
    let animators = rent / 3;

    let result = rent + cake + drinks + animators;
    console.log(result);
}

birthdayParty(["2250"])

