function distanceFromHqInBlocks(location) {
    if (location >= 42) {
        return (location - 42);
    } else if (location < 42) {
        return (42 - location);
    }
}

function distanceFromHqInFeet(location) {
    const distance = distanceFromHqInBlocks(location);
    return distance * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return ((start - destination) * 264);
    } else if (destination > start) {
        return ((destination - start) * 264);
    }
}

function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination);
    if (distanceTravelled <= 400) {
        return 0;
    } else if ((distanceTravelled > 400) && (distanceTravelled <= 2000)) {
        return (distanceTravelled - 400) * .02;
    } else if ((distanceTravelled > 2000) && (distanceTravelled < 2500)) {
        return 25;
    } else if (distanceTravelled >= 2500) {
        return 'cannot travel that far';
    }
}