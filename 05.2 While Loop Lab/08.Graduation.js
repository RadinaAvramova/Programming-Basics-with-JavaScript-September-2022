function graduation (input) {
    let student = input[0];
    let index = 1;
    let total = 0;
    while (index < input.length) {
        let grade = Number(input[index]);
        if (grade < 4) {
            index++;
            grade = Number(input[index]);

            if (grade < 4) {
                console.log("expelled");
                break;
            }
        }

        total += grade;
        index++;
    }

    console.log(total / 12);
}

graduation(["Gosho","5","5.5","6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);

function gradiation(input) {
    let name = input.shift();
    let grade = 0;
    let summark = 0;
  
    while (grade < 12) {
        let mark = Number(input.shift());
        if (mark >= 4.0) {
            grade++;
            summark += mark;
        }
    }
  
    let averagemark = summark / 12;
  
    if (averagemark >= 4.0) {
      console.log(`${name} graduated. Average grade: ${averagemark.toFixed(2)}`);
    }
}

graduation(["Gosho","5","5.5","6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);