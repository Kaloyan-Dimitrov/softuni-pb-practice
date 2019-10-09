function trip(input) {
    const totalDays = input[0] / 1;
    input = input.slice(1);
    input = input.map(i => i.includes('Day') ? i : i / 1);
    let days = 0,
        balance = 60,
        currentDayProducts = 0;
    // console.log(input)
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'Day over') {
            console.log(`Money left from today: ${balance.toFixed(2)}. You've bought ${currentDayProducts} products.`);
            currentDayProducts = 0;
            balance += 60;
        } else if (balance - input[i] >= 0) {
            currentDayProducts++;
            balance -= input[i];
            // console.log(`Buying ${i} for ${input[i]}; Balance: ${balance}`);
        } else if(balance == 0){
            console.log(`Daily limit exceeded! You've bought ${currentDayProducts} products.`);
            currentDayProducts = 0;
            balance += 60;
            if (i != 0) i--;
        }
    }
    if (balance == 0)
        console.log(`Daily limit exceeded! You've bought ${currentDayProducts} products.`);
}
// trip([
//     "2",
//     "Day over",
//     "100",
//     "20",
// ]);