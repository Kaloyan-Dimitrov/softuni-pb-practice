function savings(input) {
    const income = input[0] / 1;
    const months = input[1] / 1;
    const personal = input[2] / 1;
    const emergency = income * 0.3;
    const savingsM = income - (personal + emergency);
    const savings = savingsM * months;
    const percent = ((savingsM / income) * 100).toFixed(2);
    // console.log({income, months, personal, emergency, savingsM, savings, percent});
    console.log(`She can save ${percent}%`);
    console.log(savings.toFixed(2));
};