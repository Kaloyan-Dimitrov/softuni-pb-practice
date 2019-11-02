function password(input) {
    input = input.slice(1);
    input.forEach(inp => {
        let startIndex = 0;
        for (let i = 0; i < inp.length; i++) {
            if (inp[i] != inp[inp.length - 1 - i]) {
                if (inp[i] == '>' && inp[inp.length - 1 - i] == '<') {
                    break;
                }
                console.log("Try another password!");
                return;
            } else startIndex = i;
        }
        // asdf<asdf>fdsa
        let inner = inp.substring(startIndex + 2, inp.length - 2 - startIndex);

        if (inner.length != 15) {
            console.log('Try another password!');
            return;
        }
        for (let i = 0; i < 4; i++) {
            if (i == 0) {
                if (isNaN(inner[0] / 1 + inner[1] / 1 + inner[2] / 1)) {
                    console.log('Try another password!');
                    return;
                }
            }
            if (i == 1) {
                if(inner[4].toLowerCase() == inner[4].toUpperCase() || inner[4] != inner[4].toLowerCase()) {
                    console.log('Try another password!');
                    return;
                }
                if(inner[5].toLowerCase() == inner[5].toUpperCase() || inner[5] != inner[5].toLowerCase()) {
                    console.log('Try another password!');
                    return;
                }
                if(inner[6].toLowerCase() == inner[6].toUpperCase() || inner[6] != inner[6].toLowerCase()) {
                    console.log('Try another password!');
                    return;
                }
            }
            if (i == 2) {
                if(inner[8].toLowerCase() == inner[8].toUpperCase() || inner[8] != inner[8].toUpperCase()) {
                    console.log('Try another password!');
                    return;
                }
                if(inner[9].toLowerCase() == inner[9].toUpperCase() || inner[9] != inner[9].toUpperCase()) {
                    console.log('Try another password!');
                    return;
                }
                if(inner[10].toLowerCase() == inner[10].toUpperCase() || inner[10] != inner[10].toUpperCase()) {
                    console.log('Try another password!');
                    return;
                }
            }
            if (i == 3) {
                if((inp[12] + inp[13] + inp[14]).includes('>') || (inp[12] + inp[13] + inp[14]).includes('<')) {
                    console.log('Try another password!');
                    return;
                }
            }
        }
        const result = inner.split('|').join('');
        console.log(`Password: ${result}`);
    });
}