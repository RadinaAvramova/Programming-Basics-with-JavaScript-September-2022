/*function smallShop (input) {
    let price = 0;
    let productName = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    if (town == "Sofia") {
        if (productName == "coffee") {
            price = quantity * 0.50;
        } 
        if (productName == "water") {
            price = quantity * 0.80;
        } 
        if (productName == "beer") {
            price = quantity * 1.20;
        } 
        if (productName == "sweets") {
            price = quantity * 1.45;
        }
        if (productName == "peanuts") {
            price = quantity * 1.60;
        }
    } 
    if (town == "Plovdiv") {
        if (productName == "coffee") {
            price = quantity * 0.40;
        } 
        if (productName == "water") {
            price = quantity * 0.70;
        } 
        if (productName == "beer") {
            price = quantity * 1.15;
        } 
        if (productName == "sweets") {
            price = quantity * 1.30;
        }
        if (productName == "peanuts") {
            price = quantity * 1.50;
        } 
    } 
    if (town == "Varna") {
        if (productName == "coffee") {
            price = quantity * 0.45;
        } 
        if (productName == "water") {
            price = quantity * 0.70;
        } 
        if (productName == "beer") {
            price = quantity * 1.10;
        } 
        if (productName == "sweets") {
            price = quantity * 1.35;
        } 
        if (productName == "peanuts") {
            price = quantity * 1.55;
        } 
    }      
}

smallShop(["coffee,Varna,2"]); */


function smallShop(input){
    let product = input.shift();
    let city = input.shift();
    let quantity = Number(input.shift());
 
    let totalPrice = 0;
    if (city === "Sofia"){
        switch (product) {
            case 'coffee' : 
                totalPrice = 0.50 * quantity;
            break;
            case 'water' : 
                totalPrice = 0.80 * quantity;
            break;
            case 'beer' : 
                totalPrice = 1.20 * quantity;
            break;
            case 'sweets' : 
                totalPrice = 1.45 * quantity;
            break;
            case 'peanuts' : 
                totalPrice = 1.60 * quantity;
            break;
        }
    } else if (city === "Plovdiv"){
        switch (product) {
            case 'coffee' : 
                totalPrice = 0.40 * quantity;
            break;
            case 'water' : 
                totalPrice = 0.70 * quantity;
            break;
            case 'beer' : 
                totalPrice = 1.15 * quantity;
            break;
            case 'sweets' : 
                totalPrice = 1.30 * quantity;
            break;
            case 'peanuts' : 
                totalPrice = 1.50 * quantity;
            break;
        }
    } else {
        switch (product) {
            case 'coffee' : 
                totalPrice = 0.45 * quantity;
            break;
            case 'water' : 
                totalPrice = 0.70 * quantity;
            break;
            case 'beer' : 
                totalPrice = 1.10 * quantity;
            break;
            case 'sweets' : 
                totalPrice = 1.35 * quantity;
            break;
            case 'peanuts' : 
                totalPrice = 1.55 * quantity;
            break;
        }
    }
 
    console.log(totalPrice);
}

smallShop(["coffee,Varna,2"]);

