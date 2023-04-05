/*function summerOutfit (input) {
    let degrees = Number(input[0]);
    let outfit = input[1];
    let shoes = input[2];
    if (degrees >= 10 && degrees <= 18) {
        if (timeOfDay == "Morning") {
            outfit = "Sweetshirt";
            shoes = "Snickers";
        } else if (timeOfDay == "Afternoon" || timeOfDay == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["22","Afternoon"]);*/

function summerOutfit(input) {
    let degrees = Number(input.shift());
    let timeOfDay = input.shift();
 
    let outfit ;
    let shoes ;
 
    if (10 <= degrees && degrees <= 18){
        if (timeOfDay === 'Morning'){
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if(timeOfDay == 'Afternoon'){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (timeOfDay == 'Evening'){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    } else if (18 < degrees && degrees <= 24){
        if (timeOfDay == 'Morning'){
            outfit = 'Shirt';
            shoes = 'Moccasins'
        } else if(timeOfDay === 'Afternoon') {
            outfit = 'T-Shirt';
            shoes = 'Sandals'
        } else if (timeOfDay == 'Evening'){
         outfit = 'Shirt';
         shoes = 'Moccasins'
 
        }
    } else {
        if (timeOfDay == 'Morning'){
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }else if(timeOfDay == 'Afternoon'){
            outfit = 'Swim Suit';
            shoes = 'Barefoot'
        } else {
            outfit = 'Shirt';
            shoes = 'Moccasins'
        }
    } 
    console.log(`It'\s ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}

summerOutfit(["16","Morning"]);