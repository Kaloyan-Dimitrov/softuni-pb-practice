function shopping(input) {
    input = input.map(i => i / 1);
    const budget = input[0];
    const towel = input[1];
    const discount = input[2] / 100;
    const umbrella = (2 / 3) * towel;
    const sandals = umbrella * .75;
    const bag = (1 / 3) * (towel + sandals);
    let sum = towel + umbrella + sandals + bag;
    sum -= sum * discount;
    let leftover = budget - sum;
    sum = sum.toFixed(2);
    leftover = leftover.toFixed(2);
    // console.log({budget, towel, discount, umbrella, sandals, bag, sum, leftover});
    if(leftover >= 0) {
        console.log(`Annie's sum is ${sum} lv. She has ${leftover} lv. left.`);
    }
    else {
        console.log(`Annie's sum is ${sum} lv. She needs ${Math.abs(leftover)} lv. more.`);
    }
}
// shopping(['40', '15', '5']);