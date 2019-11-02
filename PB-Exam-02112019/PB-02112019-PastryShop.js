function shop(input) {
    const pastry = input[0];
    const count = input[1] / 1;
    const day = input[2] / 1;
    let price = 0;
    if (day <= 15) {
        switch (pastry) {
            case 'Cake': {
                price = 24;
                break;
            }
            case 'Souffle': {
                price = 6.66;
                break;
            }
            case 'Baklava': {
                price = 12.60;
                break;
            }
        }
        price *= .9;
    } else {
        switch (pastry) {
            case 'Cake': {
                price = 28.70;
                break;
            }
            case 'Souffle': {
                price = 9.80;
                break;
            }
            case 'Baklava': {
                price = 16.98;
                break;
            }
        }
    }
    price *= count;
    if (day <= 22) {
        if (price >= 100 && price <= 200) {
            price *= .85;
        } else if (price > 200) {
            price *= .75;
        }
    }
    console.log(price.toFixed(2));
}