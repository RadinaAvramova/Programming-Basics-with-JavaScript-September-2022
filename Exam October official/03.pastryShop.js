function pastryShop (input) {
    let cakeType = input[0];
    let purchasedCakes = Number(input[1]);
    let day = Number(input[2]);

    let totalSum = 0;

    if(day<=15) {
        switch(cakeType) {
            case "Cake":
                totalSum = purchasedCakes * 24;
                break;
            case "Souffle":
                totalSum = purchasedCakes * 6.66;
                break;
            case "Baklava":
                totalSum = purchasedCakes * 12.60;
                break;
            }
        } else {
        switch (cakeType) {
            case "Cake":
                totalSum = purchasedCakes * 28.70;
                break;
            case "Souffle":
                totalSum = purchasedCakes * 9.80;
                break;
            case "Baklava":
                totalSum = purchasedCakes * 16.98;
                break;
            } 
    }  

    if(day<=22) {
        if(totalSum>=100 && totalSum<=200) {
            totalSum -= totalSum * 0.15;
        } else if (totalSum>200) {
            totalSum -= totalSum * 0.25;
        }
    }
    
    if(day<=15) {
        totalSum -= totalSum * 0.10;
    }

    console.log(totalSum.toFixed(2));
}

pastryShop(["Cake",
"5",
"12"])
