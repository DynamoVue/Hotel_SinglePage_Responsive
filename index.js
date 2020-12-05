let distance = 7;

bookedSeats = [[-5, 2], [3,4]];

const findAllInvalidSeats = (x, y, distance) => {
    const invalidPoints = [];
    
    for (let i = 0; i < distance; i++) {
        let xTemp = i;
        let yTemp = distance - xTemp;

        invalidPoints.push(`${x - yTemp},${y + yTemp}`);
        invalidPoints.push(`${x + yTemp},${y + yTemp}`);
        invalidPoints.push(`${x - yTemp},${y - yTemp}`);
        invalidPoints.push(`${x + yTemp},${y - yTemp}`);
    }

    return invalidPoints;
}

const isReadyToBook = (x, y, bookedSeats, invalidPoints, distance) =>  {
    for (let seat of bookedSeats) {
        
    }

    return false;
}

const invalidPoints = findAllInvalidSeats(2, 2, 3);
console.log(invalidPoints);