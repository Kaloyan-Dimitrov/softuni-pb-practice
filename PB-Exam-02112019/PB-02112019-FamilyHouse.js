function house(input) {
    input = input.map(i => i / 1);
    const months = input.shift();
    const water = months * 20;
    const internet = months * 15;
    let electricity = 0;
    for (let i = 0; i < input.length; i++) {
        electricity += input[i];
    }
    const other = (water + internet + electricity) * 1.2;
    const average = (water + internet + electricity + other) / months;
    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}