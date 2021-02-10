export function timestampToDayOfWeek(timestamp) {
    return new Date(timestamp * 1000).getDay();
}

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export function dayNumberToWeekDay(day) {
    return weekDays[day];
}
