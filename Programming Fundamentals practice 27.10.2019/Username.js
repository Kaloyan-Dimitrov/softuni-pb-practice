function username(input) {
    let username = input[0];
    const commands = input.slice(1);
    commands.pop();
    commands.forEach(command => {
        const commandName = command.split(' ')[0];
        // console.log(command);
        switch (commandName) {
            case 'Case': {
                const param = command.split(' ')[1];
                if (param == 'lower') username = username.toLowerCase();
                else username = username.toUpperCase();
                console.log(username);
                break;
            }
            case 'Replace': {
                const param = command.split(' ')[1];
                username = username.replace(new RegExp(param, 'g'), '*');
                console.log(username);
                break;
            }
            case 'Check': {
                const param = command.split(' ')[1];
                if (username.includes(param)) console.log('Valid');
                else console.log(`Your username must contain ${param}.`);
                break;
            }
            case 'Cut': {
                const param = command.split(' ')[1];
                if (!username.includes(param)) {
                    console.log(`The word ${username} doesn't contain ${param}.`);
                    break;
                }
                const startIndex = username.search(param);
                username = username.slice(0, startIndex) + username.slice(startIndex + param.length);
                console.log(username);
            }
            case 'Reverse': {
                const param1 = command.split(' ')[1] / 1;
                const param2 = command.split(' ')[2] / 1;
                if (param1 < 0 || param1 >= username.length || param2 < 0 || param2 >= username.length) {
                    break;
                }
                let substring = username.slice(param1, param2 + 1);
                let result = substring.split('').reverse().join('');
                console.log(result);
            }
        }
    });
}