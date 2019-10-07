function reservation(inputs) {
    inputs = inputs.map(i => i / 1);
    const reservation = {
        date: inputs[0],
        month: inputs[1]
    };
    const check_in = {
        date: inputs[2],
        month: inputs[3]
    };
    const check_out = {
        date: inputs[4],
        month: inputs[5]
    };
    // console.log(inputs);
    let price;
    const nights = check_out.date - check_in.date;
    if(check_in.month - reservation.month >= 1) {
        price = (25 * nights) * 0.8;
    } else if(check_in.date - reservation.date >= 10) {
        price = 25 * nights;
    } else {
        price = 30 * nights;
    }
    price = price.toFixed(2);
    console.log(`Your stay from ${check_in.date}/${check_in.month} to ${check_out.date}/${check_out.month} will cost ${price}`);
}