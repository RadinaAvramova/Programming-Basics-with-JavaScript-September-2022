/*function hotelRoom(month, nights) {
    nights = Number(nights);
    let studioPrice = 0;
    let apartmentPrice = 0;
 
    if (month === "May" || month === "October") {
        if (nights > 7 && nights <= 14) {
            studioPrice = (nights * 50) * 0.95;
            apartmentPrice = nights * 65;
        } else if (nights > 14) {
            studioPrice = (nights * 50) * 0.7;
            apartmentPrice = (nights * 65) * 0.9;
        } else {
            studioPrice = nights * 50;
            apartmentPrice = nights * 65;
        }
 
    } else if (month === "June" || month === "September") {
        if (nights > 14) {
            studioPrice = (nights * 75.2) * 0.8;
            apartmentPrice = (nights * 68.7) * 0.9;
        } else {
            studioPrice = nights * 75.2;
            apartmentPrice = nights * 68.7;
        }
    } else if (month === "July" || month === "August") {
        if (nights > 14) {
            studioPrice = nights * 76;
            apartmentPrice = (nights * 77) * 0.9;
        } else {
            studioPrice = nights * 76;
            apartmentPrice = nights * 77;
        }
    }
 
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}

hotelRoom(["May","15"]); */

function hotelRoom (input) {
    let month = (input[0]);
    let countNight = Number(input[1]);
    let Apartment;
    let Studio;
 
    switch (month) {
        case "May":
        case "October":
            Studio = 50;
            Apartment = 65;
 
            if (14 < countNight) {
                Studio = Studio * 0.70;
                Apartment = Apartment * 0.90;
            }
            else if (7 < countNight) {
                Studio = Studio * 0.95;
            }
            break;
        case "June":
        case "September":
            Studio = 75.20;
            Apartment = 68.70;
            if (14 < countNight) {
                Studio = Studio * 0.80;
                Apartment = Apartment * 0.90;
            }
            break;
        case "July":
        case "August":
            Studio = 76;
            Apartment = 77;
            if (14 < countNight) {
            Apartment = Apartment * 0.90;
            } 
            break;
    }
    let sumA = (countNight * Apartment);
    let sumB = (countNight * Studio);
 
    console.log(`Apartment: ${sumA.toFixed(2)} lv.`)
    console.log(`Studio: ${sumB.toFixed(2)} lv.`)
}

hotelRoom(["May","15"]);