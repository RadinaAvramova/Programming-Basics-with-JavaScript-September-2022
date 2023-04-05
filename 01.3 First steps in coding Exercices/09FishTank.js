function fishTank (input) {
    let length = Number(input[0]);
    let width =  Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volumeAquarium = length * width * height;
    let volumeLiter = volumeAquarium * 0.001;
    let occupiedSpace = 0.17;
    let litersNeeded = volumeLiter * (1-occupiedSpace);

    console.log(litersNeeded);
}

fishTank(["85 ","75 ","47 ","17 "])