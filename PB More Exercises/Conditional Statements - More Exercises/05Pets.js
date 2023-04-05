function pets (input) {
    let days = Number(input[0]);
    let food = Number(input[1]);
    let foodDog = Number(input[2]);
    let foodCat = Number(input[3]);
    let foodTurtle = Number(input[4]);

    let foodDogNeeded = days * foodDog;
    let foodCatNeeded = days * foodCat;
    let foodTurtleNeeded = days * foodTurtle;

    let foodTotal = foodDogNeeded + foodCatNeeded + foodTurtleNeeded;

    if(foodTotal < food) {
        let rest = food - foodTotal;
        console.log(`${rest} kilos of food left`);
    } 
    if (foodTotal > food) {
        let notFood = foodTotal - food;
        console.log(`${notFood} more kilos of food are needed`);
    }
}

pets(["2","10","1","1","1200"]);