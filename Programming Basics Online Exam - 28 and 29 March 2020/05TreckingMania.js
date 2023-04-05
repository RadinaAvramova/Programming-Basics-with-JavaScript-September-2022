function solve(input) {
    let statistics = {
        'Musala': 0,
        'Montblanc': 0,
        'Kilimandjaro': 0,
        'K2': 0,
        'Everest': 0
    };
    let allCount = 0;
    let groups = Number(input.shift());
    for (let i = 0; i < groups; i++) {
        let groupCount = Number(input.shift());
        let mountain = '';
        switch (true) {
            case groupCount <= 5:
                mountain = 'Musala';
                break;
            case groupCount >= 6 && groupCount <= 12:
                mountain = 'Montblanc';
                break;
            case groupCount >= 13 && groupCount <= 25:
                mountain = 'Kilimandjaro';
                break;
            case groupCount >= 26 && groupCount <= 40:
                mountain = 'K2';
                break;
            case groupCount >= 41:
                mountain = 'Everest';
                break;
            default:
                break;
        }
        allCount += groupCount;
        statistics[mountain] += groupCount;
    }
    Object.keys(statistics).forEach(mountain => {
        console.log(`${(statistics[mountain] * 100 / allCount).toFixed(2)}%`);
    });
}

solve(["10","10","5","1","100","12","26","17","37","40","78"]);