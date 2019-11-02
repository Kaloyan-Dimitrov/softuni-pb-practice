function stand(input) {
    input = input.map(i => i / 1);
    const pocketMoneyPerDay = input[0];
    const profitPerDay = input[1];
    const costs = input[2];
    const price = input[3];
    const money = (pocketMoneyPerDay + profitPerDay) * 5 - costs;
    if (money > price) console.log(`Profit: ${money.toFixed(2)} BGN, the gift has been purchased.`);
    else console.log(`Insufficient money: ${(price - money).toFixed(2)} BGN.`);
}