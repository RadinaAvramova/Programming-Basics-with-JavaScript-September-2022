function profit (input) {
    let oneLevCoins = Number(input[0]);
    let twoLevCoins = Number(input[1]);
    let fiveLevCoins = Number(input[2]);
    let sum = Number(input[3]);
    let currentSum = 0;

    for (let one = 0; one <= oneLevCoins * 1; one++) {
        for (let two = 0; two <= twoLevCoins * 2; two += 2) {
            for (let five = 0; five <= fiveLevCoins * 5; five += 5) {
                currentSum = one + two + five;
                if (currentSum == sum) {
                    let onesCount = one / 1;
                    let twosCount = two / 2;
                    let fivesCount = five / 5;
                    console.log(`${onesCount} * 1 lv. + ${twosCount} * 2 lv. + ${fivesCount} * 5 lv. = ${currentSum} lv.`);
                }
            }
        }
    }
}

profit(["1","10","5"]);

/*Solution #2
            int oneLevCoins = int.Parse(Console.ReadLine());
            int twoLevCoins = int.Parse(Console.ReadLine());
            int fiveLevCoins = int.Parse(Console.ReadLine());
            int sum = int.Parse(Console.ReadLine());
 
            for (int one = 0; one <= oneLevCoins; one++)
            {
                for (int two = 0; two <= twoLevCoins; two++)
                {
                    for (int five = 0; five <= fiveLevCoins; five++)
                    {
                        if (one * 1 + two * 2 + five * 5 == sum)
                        {
                            Console.WriteLine($"{one} * 1 lv. + {two} * 2 lv. + {five} * 5 lv. = {sum} lv.");
                        }
                    }
                }
            }
        }
    }
} */
