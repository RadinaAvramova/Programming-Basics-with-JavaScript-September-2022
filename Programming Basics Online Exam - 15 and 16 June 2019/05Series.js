function serial(input) {
    let budget = Number(input.shift());
    let serials = Number(input.shift());
    let cena = 0;
    for (let i = 1; i <= serials; i++) {
        let name = input.shift();
        let price = Number(input.shift());
      
        switch (name) {
            case "Thrones":
                price *= 0.50; // Правим отстъпка само на цената на билета
                break;
            case "Lucifer":
                price *= 0.60; // Правим отстъпка само на цената на билета. Трябва да се умножи по 0.60, а не 0.40
                break;
            case "Protector":
                price *= 0.70; // Правим отстъпка само на цената на билета.Трябва да се умножи по 0.70, а не 0.30
                break;
            case "TotalDrama":
                price *= 0.80; // Правим отстъпка само на цената на билета. Трябва да се умножи по 0.80, а не 0.20
                break;
            case "Area":
                price *= 0.90; // Правим отстъпка само на цената на билета. Трябва да се умножи по 0.90, а не 0.10
                break;
            default:
                break;
        }
        cena += price; // Добавяме цената на билета към общата сума след евентуалната му отстъпка.
    }
    let diff = Math.abs(budget - cena);
 
    if (budget >= cena) {
        console.log(`You bought all the series and left with ${diff.toFixed(2)} lv.`);
 
    } else  {
        console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);// И тук трябва да се закръгли
    }
}

serial(["10","3","Thrones","5","Riverdale","5","Gotham","2"]);