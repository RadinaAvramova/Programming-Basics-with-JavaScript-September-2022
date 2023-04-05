function cinemaTickets (input) {
    let index = 0;
    let command = input[index];
    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;
    let totalTicketsCounter = 0;
    //Taxi
    while (command !== 'Finish') {
        let name = command;
        index++;
        let freeSpaces = Number(input[index]); //10
        index++;
        
        let ticketType = input[index];  //standard
        let ticketCounter = 0;

        while(ticketType !== 'End') {
            ticketCounter++;

            switch(ticketType){
                case "standard": standardCounter++; break;
                case "student": studentCounter++; break;
                case "kid": kidCounter++; break;  
            }
            if(ticketCounter >= freeSpaces) {
                break;
            }
            index++;
            ticketType = input[index];
        }
        totalTicketsCounter += ticketCounter;
        let resultSingleFilm = ticketCounter / freeSpaces * 100;

        console.log(`${name} - ${resultSingleFilm.toFixed(2)}% full.`);
        command = input[++index];
    }

    console.log(`Total tickets: ${totalTicketsCounter}`);
    console.log(`${(studentCounter/totalTicketsCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter/totalTicketsCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter/totalTicketsCounter * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix","20","student","standard","kid","kid","student","student","standard","student","End","The Green Mile","17","student","standard",

"standard",

"student",

"standard",

"student",

"End",

"Amadeus",

"3",

"standard",

"standard",

"standard",

"Finish"]);