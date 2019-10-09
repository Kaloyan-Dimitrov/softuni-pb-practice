function seats(inputs) {
    inputs = inputs.slice(1);
    const seats = [];
    inputs.forEach(i => {
        if(i.length == 4) {
            if(i[0] >= 'A' && i[0] <= 'Z') seats.push(i.substring(0, 3));
            else seats.push(i[3] + i[1] + i[2]);
        }
        else {
            seats.push(i[0] + i.charCodeAt(1));
        }
        console.log(`Seat decoded: ${seats[seats.length - 1]}`);
    });
}