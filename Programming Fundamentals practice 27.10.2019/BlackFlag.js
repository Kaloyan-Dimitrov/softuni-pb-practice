function flag(input) {
    input = input.map(i => i / 1);
    const days = input[0];
    const dailyPlunder = input[1];
    const target = input[2];
    let plunder = 0;
    for(let i = 0; i < days; i ++) {
        plunder += dailyPlunder;
        if(i % 3 == 2) {
            plunder += dailyPlunder * 0.5;
        }
        if(i % 5 == 4) {
            plunder *= .7;
        }
    }
    if(plunder < target) {
        let percentage = plunder / target;
        percentage *= 100;
        percentage = percentage.toFixed(2);
        console.log(`Collected only ${percentage}% of the plunder.`)
    }
    else {
        plunder = plunder.toFixed(2);
        console.log(`Ahoy! ${plunder} plunder gained.`)
    }
}