function stringManipulator(input) {
    let string = input[0];
    const commands = input.slice(1);
    commands.forEach(c => {
        let words = c.split(" ");
        switch(c.slice(0, 2)) {
            case 'Ch': {
                const reg = new RegExp(words[1], 'g');
                string = string.replace(reg, words[2]);
                console.log(string);
                break;
            };
            case 'In': {
                console.log(string.includes(words[1]) ? 'True': 'False');
                break;
            };
            case 'Up': {
                string = string.split("").map(i => i.toLocaleUpperCase()).join('');
                console.log(string);
                break;
            };
            case 'Fi': {
                console.log(string.indexOf(words[1]));
                break;
            };
            case 'Cu': {
                string = string.slice(words[1] / 1, words[1] / 1 + words[2] / 1);
                console.log(string);
                break;
            };
            case 'En': {
                const word = words[1].split('').reverse();
                let end = true;
                for(let i = 0; i < word.length; i ++) {
                    if(word[i] != string[string.length - 1 - i]) {
                        console.log('False');
                        end = false;
                        break;
                    }
                }
                if(end) console.log('True');
                break; 
            }
        }
    });
}
// stringManipulator(['//Th1s 1s my str1ng!//', 'Change 1 i', 'Includes string', 'End my', 'Uppercase', 'FindIndex I', 'Cut 5 5', 'Done'])