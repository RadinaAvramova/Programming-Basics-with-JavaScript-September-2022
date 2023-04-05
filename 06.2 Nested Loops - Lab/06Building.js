function building (input) {
    let floorCount = Number(input[0]);
    let roomCount = Number(input[1]);

    for(let floorNumber = floorCount; floorNumber>=1; floorNumber--) {
        let roomType = "";
        if(floorNumber === floorCount) {    //top floor - large apartments 
            roomType= "L";
        } else if (floorNumber % 2 == 0) {  //even floor - offices
            roomType = "O";
        } else {    //odd floor - apartments
            roomType = "A";
        }

        let floor = "";
        for(let roomNumber = 0; roomNumber< roomCount; roomNumber++) {
            floor = floor + `${roomType}${floorNumber}${roomNumber} `;
        }
        console.log(floor.trim());
    }
}

building(["6","4"]);