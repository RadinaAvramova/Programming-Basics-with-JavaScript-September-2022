function exam (input) {
    let students = Number(input[0]);

    let failingStudents = 0;
    let averageStudents = 0;
    let  goodStudents = 0;
    let  excellentStudents = 0;
    let averageGrade = 0;

    for (let i = 1; i <= students; i++) {
        let grade = Number(input[1]);
        if (grade>=2.00 && grade<=2.99) {
            failingStudents++;
            averageGrade += grade;
        }
        if (grade>=3.00 && grade<=3.99) {
            averageStudents++;
            averageGrade += grade;
        }
        if (grade>=4.00 && grade<=4.99) {
            goodStudents++;
            averageGrade += grade;
        }
        if (grade>=5.00) {
            excellentStudents++;
            averageGrade += grade;
        }
    }

    console.log(`Top students: ${(excellentStudents / students) * 100}%`);
    console.log(`Between 4.00 and 4.99: ${(goodStudents/students) * 100}%`);
    console.log(`Between 3.00 and 3.99: ${(averageStudents/students) * 100}%`);
    console.log(`Fail: ${(failingStudents/students) * 100}%`);
    console.log(`Average: ${(averageGrade/students) * 100}%`);
}

exam(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"]); 
