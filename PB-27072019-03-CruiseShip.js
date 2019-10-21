function ship(input) {
    const cruise = input[0];
    const cabin = input[1];
    const nights = input[2] / 1;
    let cost = 0;
    // console.log({cruise, cabin, nights});
    switch (cruise) {
        case 'Mediterranean': {
            switch (cabin) {
                case 'standard cabin':
                    cost = nights * 4 * 27.50;
                    break;
                case 'cabin with balcony':
                    cost = nights * 4 * 30.20;
                    break;
                case 'apartment':
                    cost = nights * 4 * 40.50;
                    break;
            }
            break;
        }
        case 'Adriatic': {
            switch (cabin) {
                case 'standard cabin':
                    cost = nights * 4 * 22.99;
                    break;
                case 'cabin with balcony':
                    cost = nights * 4 * 25.00;
                    break;
                case 'apartment':
                    cost = nights * 4 * 34.99;
                    break;
            }
            break;
        }
        case 'Aegean': {
            switch (cabin) {
                case 'standard cabin':
                    cost = nights * 4 * 23.00;
                    break;
                case 'cabin with balcony':
                    cost = nights * 4 * 26.60;
                    break;
                case 'apartment':
                    cost = nights * 4 * 39.80;
                    break;
            }
            break;
        }
    }
    if(nights > 7) cost *= .75;
    console.log(`Annie's holiday in the ${cruise} sea costs ${cost.toFixed(2)} lv.`);
}
// ship(['Aegean', 'standard cabin', '10']);