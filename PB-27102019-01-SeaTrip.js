function trip(input) {
    input = input.map(i => i / 1);
    const day = input[0] + input[1];
    const fuel = ((210 * 2) / 100) * 7 * 1.85;
    const food_and_souv = day * 3;
    const hotel = input[2];
    const hotelP = hotel * (.9 + .85 + .8);
    let result = fuel + food_and_souv + hotelP;
    result = result.toFixed(2);
    // console.log({input, day, fuel, food_and_souv, hotelP})
    console.log(`Money needed: ${result}`);
}