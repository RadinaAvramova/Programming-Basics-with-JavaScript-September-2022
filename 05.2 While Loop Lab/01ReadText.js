function readText (input) {
    let index = 0;
    while (true) {
        let str = input[index];
        if(str === "Stop") {
            break;
        }

        console.log(str);
        index++;
    }
}

readText(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"]);

function readText(input) {
    let index = 0;
    while (input[index] !== "Stop") {
        console.log(input[index]);
        index++;
    }
}

readText(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"]);
