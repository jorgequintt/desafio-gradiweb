const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export function timestampToDayOfWeek(timestamp) {
    const day = new Date(timestamp * 1000).getDay();
    return weekDays[day];
}

/*
    getCardinal()
    source: https://gist.github.com/basarat/4670200
*/
export function getCardinal(angle) {
    const degreePerDirection = 360 / 8;

    const offsetAngle = angle + degreePerDirection / 2;

    return offsetAngle >= 0 * degreePerDirection && offsetAngle < 1 * degreePerDirection
        ? 'North'
        : offsetAngle >= 1 * degreePerDirection && offsetAngle < 2 * degreePerDirection
        ? 'Northeast'
        : offsetAngle >= 2 * degreePerDirection && offsetAngle < 3 * degreePerDirection
        ? 'East'
        : offsetAngle >= 3 * degreePerDirection && offsetAngle < 4 * degreePerDirection
        ? 'Southeast'
        : offsetAngle >= 4 * degreePerDirection && offsetAngle < 5 * degreePerDirection
        ? 'South'
        : offsetAngle >= 5 * degreePerDirection && offsetAngle < 6 * degreePerDirection
        ? 'Southwest'
        : offsetAngle >= 6 * degreePerDirection && offsetAngle < 7 * degreePerDirection
        ? 'West'
        : 'Northwest';
}
