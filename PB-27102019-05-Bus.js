function bus(input) {
    input = input.map(i => i / 1);
    let init = input[0];
    const stops = input[1];
    for(let i = 2; i < input.length; i ++) {
        if(i % 2 == 0) {
            init -= input[i];
        }
        else {
            init += input[i];
        }
    }
    if(stops % 2 == 1) init += 2;
    console.log(`The final number of passengers is : ${init}`);
}
// bus(['20', '2', '10', '5', '5', '3']);