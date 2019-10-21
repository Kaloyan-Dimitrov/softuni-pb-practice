function party(input) {
    input.pop();
    input = input.map(i => i / 1);
    const izp = input[0];
    // console.log(input);
    let money = 0,
        guests = 0;
    for (let i = 1; i < input.length; i++) {
        if (input[i] < 5) money += input[i] * 100;
        else money += input[i] * 70;
        guests += input[i]; 
    }
    if (money >= izp) {
        money -= izp;
        console.log(`You have ${guests} guests and ${money} leva left.`);
    } else {
        console.log(`You have ${guests} guests and ${money} leva income, but no singer.`);
    }
}