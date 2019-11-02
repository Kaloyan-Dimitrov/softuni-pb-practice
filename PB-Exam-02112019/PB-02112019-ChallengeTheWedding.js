function wedding(input) {
    input = input.map(i => i / 1);
    const men = input[0];
    const women = input[1];
    const maxTables = input[2];
    let tables = 0;
    let result = '';
    let finished = false;
    for (let man = 1; man <= men && !finished; man++) {
        for (let woman = 1; woman <= women && !finished; woman++) {
            if (!(man == 1 && woman == 1)) {
                result += ' ';
            }
            result += `(${man} <-> ${woman})`;
            tables++;
            if (tables == maxTables) finished = true;
        }
    }
    console.log(result);
}