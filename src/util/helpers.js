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

/*
    slugify()
    source: https://mhagemann.medium.com/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1
*/
export function slugify(string) {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
    const p = new RegExp(a.split('').join('|'), 'g');

    return string
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
}
