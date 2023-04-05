function housePainting (input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let wall = x * y;
    let window = 1.5 * 1.5;
    let pages = (2 * wall) - (2 * window);
    let backWall = x * x;
    let entry = 1.2 * 2;
    let totalWall = (2 * backWall) - entry;
    let totalWalls = pages + totalWall;
    let greenPaint = totalWalls / 3.4;

    let twoRectanglesOfCovers = 2 * wall;
    let triangles = 2 * (x * h / 2);
    let totalCovers = twoRectanglesOfCovers  + triangles;
    let redPaint = totalCovers / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

housePainting(["6","10","5.2"]);