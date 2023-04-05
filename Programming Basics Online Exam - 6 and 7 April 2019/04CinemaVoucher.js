function cinemaVoucher (input) {
    let budget = Number(input[0]);
    let tickets = 0;
    let otherStuff = 0;

    let product = input[2];

    while(!"End" == product) {
        let price = 0;
        if(product.length > 8) {
            price = product.charAt(0);
                price += product.charAt(1);
                if (budget - price < 0) {
                    break;
                } else {
                    tickets++;
                    budget -= price;
                }
        } else {
            price = product.charAt(0);
            if (budget - price < 0) {
                break;
            } else {
                otherStuff++;
                budget -= price;
            }
        }
        return product;
    }
    console.log(tickets);
    console.log(otherStuff);
}


cinemaVoucher(["300","Captain Marvel","popcorn","Pepsi"]);
