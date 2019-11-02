function farm(input) {
    input = input.map(i => i / 1);
    const price = input[0];
    const firstMonth = input[1];
    const secondMonth = firstMonth + input[2];
    const thirdMonth = secondMonth + input[3];
    let eggs = (firstMonth + secondMonth + thirdMonth) * 20 * 0.96;
    eggs = Math.floor(eggs);
    const profit = eggs * price * 0.01;
    console.log(`Profit: ${Math.floor(profit)} Lv.`);
}