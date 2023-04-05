function grades (input) {
    let students = Number(input[0]);
    let moreThan5 = 0;
    let moreThan4 = 0;
    let moreThan3 = 0;
    let lessThan3 = 0;

    let markResult = 0;

    for (let i = 1; i <= students; i++) {
        let mark = Number(input[1]);
    if (mark >= 5.00) {
        moreThan5++;
    } else if (mark >= 4.00) {
        moreThan4++;
    } else if (mark >= 3.00) {
        moreThan3++;
    } else {
        lessThan3++;
    }
    markResult += mark;
}

let topStudents = 100.0 * moreThan5 /  students;
let fourStudents = 100.0 * moreThan4 /  students;
let threeStudents = 100.0 * moreThan3 / students;
let twoStudents = 100.0 * lessThan3 /  students;

console.log(`Top students: ${topStudents.toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${fourStudents.toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${threeStudents.toFixed(2)}%`);
console.log(`Fail: ${twoStudents.toFixed(2)}%`);
console.log(`Average: ${(markResult / students).toFixed(2)}`);
}

grades(["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5"]);