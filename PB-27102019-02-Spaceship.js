function ship(input) {
    input = input.map(i => i / 1);
    const vol = input[0] * input[1] * input[2];
    const roomVol = (input[3] + .4) * 2 * 2;
    const astr = Math.floor(vol / roomVol);
    console.log(astr >= 3 && astr <= 10 ? `The spacecraft holds ${astr} astronauts.` : astr < 3 ? `The spacecraft is too small.` : `The spacecraft is too big.`)
}
