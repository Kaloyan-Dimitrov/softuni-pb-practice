function salon(input) {
    const target = input.shift() / 1;
    let profit = 0;
    for (let i = 1; i < input.length; i += 2) {
        let profitToday;
        switch (input[i]) {
            case 'mens': {
                profitToday = 15;
                break;
            }
            case 'ladies': {
                profitToday = 20;
                break;
            }
            case 'kids': {
                profitToday = 10;
                break;
            }
            case 'touch up': {
                profitToday = 20;
                break;
            }
            case 'full color': {
                profitToday = 30;
                break;
            }
        }
        // console.log(input[i]);
        // console.log(profitToday);
        // console.log(profit);
        profit += profitToday;
    }
    if (profit >= target) console.log('You have reached your target for the day!');
    else console.log(`Target not reached! You need ${target - profit}lv. more.`);
    console.log(`Earned money: ${profit}lv.`);
}