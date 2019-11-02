function chest(input) {
    let chest = input[0].split('|');
    input.pop();
    input = input.slice(0);
    input.forEach(command => {
        switch (command[0]) {
            case 'L': {
                let loot = command.split(' ');
                loot = loot.slice(1);
                // console.log({
                //     loot
                // })
                loot.forEach(l => {
                    if (!chest.includes(l)) {
                        chest.splice(0, 0, l);
                    }
                });
                break;
            }
            case 'D': {
                let index = command.split(' ')[1] / 1;
                if (index < 0 || index > chest.length - 1) break;
                let removed = chest.splice(index, 1);
                // console.log({
                //     index,
                //     removed,
                //     chest
                // });
                chest.push(removed[0]);
                break;
            }
            case 'S': {
                let count = command.split(' ')[1] / 1;
                if (count >= chest.length) {
                    console.log(chest.join(', '));
                    chest = [];
                    break;
                }
                let stolen = chest.slice(chest.length - count);
                chest.length -= count;
                // console.log({
                //     count,
                //     stolen
                // })
                console.log(stolen.join(', '));
                break;
            }
        }
    });
    // console.log({
    //     chest
    // })
    if (chest.length == 0) {
        console.log("Failed treasure hunt.");
        return;
    }
    chest = chest.map(c => c.length);
    const average = chest.reduce((acc, current) => acc + current) / chest.length;
    console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
}