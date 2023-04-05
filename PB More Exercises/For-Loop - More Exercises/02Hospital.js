function patients(input) {
    let index = 0;
    let n = Number(input[index++]);
    let num = Number(input[index++]);
    let doctors = 7;
    let sumTreatedPatients = 0;
    let sumUntreatedPatient = 0;
 
    let currentTreatedPatients = 0;
    let currentUntreatedPatients = 0;
 
    for (let i = 1; i <= n; i++) {
 
        if (i % 3 === 0) {
            if (sumUntreatedPatient > sumTreatedPatients) {
                doctors++;
            }
        }
 
        if (num >= doctors) {
            currentTreatedPatients = doctors;
        } else {
            currentTreatedPatients = num;
        }
 
        currentUntreatedPatients = num - doctors;
 
        if (currentUntreatedPatients <= 0) {
            currentUntreatedPatients = 0;
        }
 
        sumTreatedPatients += currentTreatedPatients;
        sumUntreatedPatient += currentUntreatedPatients;
 
        num = Number(input[index++]);
    }
    console.log(`Treated patients: ${sumTreatedPatients}.`);
    console.log(`Untreated patients: ${sumUntreatedPatient}.`);
}
 
patients(["6", "25", "25", "25", "25", "25", "2"]);