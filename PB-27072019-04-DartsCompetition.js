function compete(inputs) {
    let score = inputs[0] / 1;
    inputs = inputs.slice(1);
    let mult = 1, plays = 0;
    for(let i = 0; i < inputs.length; i ++) {
        let val = inputs[i];
        switch (val) {
            case 'number section':
                mult = 1;
                break;
            case 'double ring':
                mult = 2;
                break;
            case 'triple ring':
                mult = 3;
                break;
            case 'bullseye':
                plays ++;
                console.log(`Congratulations! You won the game with a bullseye in ${plays} moves!`);
                return;
                break;
            default:
                plays ++;
                val = val / 1;
                score -= val * mult;
                if(score == 0) {
                    console.log(`Congratulations! You won the game in ${plays} moves!`);
                    return;
                } else if(score < 0) {
                    console.log(`Sorry, you lost. Score difference: ${Math.abs(score)}.`);
                    return;
                }
                break;
        }
    };
}