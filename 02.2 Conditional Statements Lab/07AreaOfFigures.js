function calculateFigureArea(input) {
    //1.read input and parse numbers
    let type = input[0];
    let area = 0;

    //2. choose figure type and calc area
    if(type == "square") {
        let a = Number(input[1]);
        area = a * a;
    } else if (type == "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;
    } else if (type == "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        area = (a * h) /2;
    } else if (type == "circle") {
        let r = Number(input[1]);
        let pi = Math.PI;
        area = pi * Math.pow(r,2);
    } else {
        console.log("Sorry, invalid type specified");
    }

    //3. print output
    console.log(area.toFixed(3));
}

calculateFigureArea(["circle", "6"]);