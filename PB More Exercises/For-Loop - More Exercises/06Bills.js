function bills (input) {
    let months = Number(input[0]);
 
    let waterBill = 20;
    let internetBill = 15;
    let otherBills = 0;

    let waterBillCnt = 0;
    let internetBillCnt = 0;
    let electricityBillCnt = 0;
    let otherBillsCnt = 0;

    for (let i = 1; i <= months; i++) {
        let electricityBill = Number(input[1]);

        electricityBillCnt += electricityBill;
        waterBillCnt += waterBill;
        internetBillCnt += internetBill;
        otherBills = (electricityBill + waterBill + internetBill) * 1.2;
        otherBillsCnt += otherBills;
    }

    let avg = (electricityBillCnt+waterBillCnt+internetBillCnt+otherBillsCnt) / months;
    console.log(`Electricity: ${electricityBillCnt.toFixed(2)} lv`);
    console.log(`Water: ${waterBillCnt.toFixed(2)} lv`);
    console.log(`Internet: ${internetBillCnt.toFixed(2)} lv`);
    console.log(`Other: ${otherBillsCnt.toFixed(2)} lv`);
    console.log(`Average: ${avg.toFixed(2)} lv`);
}

bills(["5","68.63","89.25","132.53","93.53","63.22"]);
