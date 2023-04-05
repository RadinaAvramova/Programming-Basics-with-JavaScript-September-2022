function movieDay (input) {
    let timeToFilm = Number(input[0]);
    let scenes = Number(input[1]);
    let timePerScene = Number(input[2]);

    let scenePreparation = timeToFilm * 0.15;
    let timeForScenes = scenes * timePerScene;

    let totalTimeForFilming = scenePreparation + timeForScenes;

    if(totalTimeForFilming < timeToFilm) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(timeToFilm - totalTimeForFilming)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(totalTimeForFilming - timeToFilm)} minutes.`);
    }
}

movieDay(["120",
"10",
"11"])
