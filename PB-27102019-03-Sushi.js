function sushi(input) {
    input[2] = input[2] / 1;
    const rest = input[1];
    const count = input[2];
    const sushi = input[0];
    let cost;
    switch (rest) {
        case 'Sushi Zone': {
            switch (sushi) {
                case 'sashimi':
                    cost = count * 4.99;
                    break;
                case 'maki':
                    cost = count * 5.29;
                    break;
                case 'uramaki':
                    cost = count * 5.99;
                    break;
                case 'temaki':
                    cost = count * 4.29;
                    break;
            }
            break;
        }
        case 'Sushi Time': {
            switch (sushi) {
                case 'sashimi':
                    cost = count * 5.49;
                    break;
                case 'maki':
                    cost = count * 4.69;
                    break;
                case 'uramaki':
                    cost = count * 4.49;
                    break;
                case 'temaki':
                    cost = count * 5.19;
                    break;
            }
            break;
        }
        case 'Sushi Bar': {
            switch (sushi) {
                case 'sashimi':
                    cost = count * 5.25;
                    break;
                case 'maki':
                    cost = count * 5.55;
                    break;
                case 'uramaki':
                    cost = count * 6.25;
                    break;
                case 'temaki':
                    cost = count * 4.75;
                    break;
            }
            break;
        }
        case 'Asian Pub': {
            switch (sushi) {
                case 'sashimi':
                    cost = count * 4.50;
                    break;
                case 'maki':
                    cost = count * 4.80;
                    break;
                case 'uramaki':
                    cost = count * 5.50;
                    break;
                case 'temaki':
                    cost = count * 5.50;
                    break;
            }
            break;
        }
        default: {
            console.log(`${rest} is invalid restaurant!`);
            return;
        }
    }
    cost = input[3] == 'Y' ? cost * 1.2 : cost;
    let result = cost.toFixed(0) / 1;
    // console.log({result, cost});
    if(cost - result > 0) result ++;
    console.log(`Total price: ${result} lv.`);
}
// sushi([
//     'maki',
//     'Sushi Zone',
//     '4',
//     'Y'
// ])