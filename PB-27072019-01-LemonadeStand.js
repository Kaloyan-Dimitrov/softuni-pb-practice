function stand(input) {
    input = input.map(i => i / 1);
    const lemons = input[0];
    const sugar = input[1];
    const water = input[2];
    const lemon_juice = lemons * 980;
    const mix = lemon_juice + water * 1000 + 0.30 * sugar;
    const cups = Math.floor(mix / 150);
    const money_earned = cups * 1.2;
    console.log(`All cups sold: ${cups}`);
    console.log(`Money earned: ${money_earned.toFixed(2)}`);
}