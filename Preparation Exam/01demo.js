function demo (input) {
    let movieName = input[0];
    let daysCount = Number(input[1]);
    let screeningCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaCutPercentage = Number(input[4]);

    let totalProfitPerDay = screeningCount * ticketPrice;
    let totalProfit = totalProfitPerDay * daysCount;
    let cinemaCut = totalProfit * (cinemaCutPercentage / 10);

    let result = totalProfit - cinemaCut;
    console.log(`The profit from the movie ${movieName} is ${result.toFixed(2)} lv.`) ;
}

demo([])