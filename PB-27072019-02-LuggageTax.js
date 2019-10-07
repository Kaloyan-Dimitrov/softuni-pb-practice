function luggage(inputs) {
    const a = inputs[0] / 1, b = inputs[1] / 1, c = inputs[2] / 1;
    const priority = inputs[3] == 'true' ? true : false;
    const volume = a * b * c;
    let price;
    if(volume <= 50) price = 0;
    else if(priority) {
        if(volume <= 100) {
            price = 0;
        } else if(volume <= 200) {
            price = 10;
        } else if(volume <= 300) {
            price = 20;
        }
    } else {
        if(volume <= 100) {
            price = 25;
        } else if(volume <= 200) {
            price = 50;
        } else if(volume <= 300) {
            price = 100;
        }
    }
    price = price.toFixed(2);
    console.log(`Luggage tax: ${price}`);
}