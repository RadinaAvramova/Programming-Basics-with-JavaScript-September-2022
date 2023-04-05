function seriesCalculatour (input) {
    let serialName = input[0];
    let seasonsCount = Number(input[1]);
    let episodesCount = Number(input[2]);
    let episodeTime = Number(input[3]);

    let advertisementTime = episodeTime * 0.2;

    let episodeTimeWithAdvertisement = episodeTime + advertisementTime;
    let totalTime = (episodeTimeWithAdvertisement * episodesCount * seasonsCount + (seasonsCount * 10));

    console.log(`Total time needed to watch the ${serialName} series is ${totalTime} minutes.`);
}

seriesCalculatour(["Game of Thrones",
"7",
"10",
"50"])