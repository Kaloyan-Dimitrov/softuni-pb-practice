function flights(inputs) {
    inputs.pop();
    const flights = [];
    for(let i = 0; i < inputs.length; i += 3) {
        flights.push({
            name: inputs[i],
            price: ((inputs[i + 1] / 1) * 1.96).toFixed(2),
            stay: inputs[i + 2] / 1
        });
    }
    flights.sort((a, b) => a.stay - b.stay);
    const hours = Math.floor(flights[0].stay / 60);
    const minutes = flights[0].stay - hours * 60;
    console.log(`Ticket found for flight ${flights[0].name} costs ${flights[0].price} leva with ${hours}h ${minutes}m stay`);
}