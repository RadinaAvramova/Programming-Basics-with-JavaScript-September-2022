function schoolcamp (input) {
    let season = input[0];
    let group = input[1];
    let countStudents = Number(input[2]);
    let nights = Number(input[3]);
    let price = 0;
    let pricePerNights = 0;
    let sport = "";

    if (season == "Winter") {
        if (group == "boys") {
            pricePerNights = countStudents * 9.60 * nights;
            price = pricePerNights;
            sport = "Judo";
        }

    } else if (group == "girls") {
        pricePerNights = countStudents * 9.60 * nights;
        price = pricePerNights;
        sport = "Gymnastics";
    } else if (group == "mixed") {
        pricePerNights = countStudents * 10.00 * nights;
        price = pricePerNights;
        sport = "Ski";
    } else if (season == "Spring") {
        if (group == "boys") {
            //  if (countStudents >= 20) {
                pricePerNights = countStudents * 7.20 * nights;
                price = pricePerNights;
                sport = "Tennis";
            //  }
        } else if (group == "girls") {
            pricePerNights = countStudents * 7.20 * nights;
            price = pricePerNights;
            sport = "Athletics";
        } if (group == "mixed") {
            pricePerNights = countStudents * 9.50 * nights;
            price = pricePerNights;
            sport = "Cycling";
        }
    } if (season == "Summer") {
        if (group == "boys") {
            //   if (countStudents >= 50) {
                pricePerNights = countStudents * 15 * nights;
                price = pricePerNights;
                sport = "Football";
            //      }
        } else if (group == "girls") {
            pricePerNights = countStudents * 15 * nights;
            price = pricePerNights;
            sport = "Volleyball";
        } else if ( group == "mixed") {
            pricePerNights = countStudents * 20 * nights;
            price = pricePerNights;
            sport = "Swimming";
        }
    }

    let priceAfterDisc = 100;
    if (countStudents >= 50) {
        priceAfterDisc = 50;
    } else if (countStudents >= 20) {
        priceAfterDisc = 85;
    } else if (countStudents >= 10) {
        priceAfterDisc = 95;
    }

    let finalPrice = price * priceAfterDisc / 100;
    console.log(`${sport} ${finalPrice.toFixed(2)} lv.`);
}

schoolcamp(["Spring","girls","20","7"]);