function table(input) {
    const number = input[0] / 1;
    const first = input % 10;
    const second = (input / 10) % 10;
    const third = input / 100;
    for(let i = 1; i <= first; i ++) {
        for(let j = 1; j <= second; j ++) {
            for(let m = 1; m <= third; m ++) {
                console.log(`${i} * ${j} * ${m} = ${i * j * m};`)
            }
        }
    }
}