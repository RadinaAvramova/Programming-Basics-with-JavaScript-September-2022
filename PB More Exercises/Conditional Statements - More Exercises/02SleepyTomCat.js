function tom (input) {
  let breakDays = Number(input[0]);
  let norma = 30000;
  let workDays = 365 - breakDays;
  let timeIgra = workDays * 63 + breakDays * 127;
  let mins = Math.abs(norma - timeIgra) % 60;
  let hours = Math.abs(norma - timeIgra) / 60;

  if (timeIgra>=norma) {
    console.log("Tom will run away");
    console.log(`${Math.floor(hours)} hours and ${mins} minutes more for play`);
  } else {
    console.log("Tom sleeps well");
    console.log(`${Math.floor(hours)} hours and ${mins} minutes less for play`);
  }          
}

tom(["20"]);
