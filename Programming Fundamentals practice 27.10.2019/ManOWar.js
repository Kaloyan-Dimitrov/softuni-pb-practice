function manOWar(input) {
    const pirateSections = input[0].split('>').map(i => i / 1);
    const warshipSections = input[1].split('>').map(i => i / 1);
    const maxHealth = input[2] / 1;
    const commands = input.slice(3);
    commands.pop();
    // console.log(pirateSections);
    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];
        const commandName = command.split(' ')[0];
        let params = command.split(' ').slice(1) ? command.split(' ').slice(1).map(p => p / 1) : undefined;
        // console.log({
        //     command,
        //     commandName,
        //     params
        // });
        switch (commandName) {
            case 'Fire': {
                const index = params[0];
                const damage = params[1];
                if (index <= 0 || index >= warshipSections.length) {
                    // console.log('INvalif');
                    break;
                }
                warshipSections[index] -= damage;
                if (warshipSections[index] <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    return;
                }
                break;
            }
            case 'Defend': {
                const startIndex = params[0];
                const endIndex = params[1];
                const damage = params[2];
                if (startIndex < 0 || startIndex >= pirateSections.length || endIndex < 0 || endIndex >= pirateSections.length) {
                    // console.log('INvalid');
                    break;
                }
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateSections[i] -= damage;
                    if (pirateSections[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                    }
                }
                break;
            }
            case 'Repair': {
                const index = params[0];
                const damage = params[1];
                if (index <= 0 || index >= warshipSections.length) {
                    break;
                }
                pirateSections[index] += damage;
                if (pirateSections[index] > maxHealth) {
                    pirateSections[index] = maxHealth;
                    return;
                }
                break;
            }
            case 'Status': {
                let toRepair = 0;
                pirateSections.forEach(section => {
                    if (section < maxHealth * .2) {
                        toRepair++;
                    }
                });
                console.log(`${toRepair} sections need repair.`);
                break;
            }
        }
        // console.log({
        //     pirateSections
        // });
        // console.log({
        //     warshipSections
        // });
        // console.log('\n');
    };
    console.log(`Pirate ship status: ${pirateSections.reduce((acc, curr) => acc += curr)}`);
    console.log(`Warship status: ${warshipSections.reduce((acc, curr) => acc += curr)}`);
}