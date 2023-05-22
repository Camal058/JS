/* №1
function compare(num1, num2){
    if (num1 < num2) {
        return -1;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return 0;
    }
}
 */

/* №2
function factorial(num1){
    let fact = num1;
    while (num1 >= 1){
        num1--;
        fact = num1 * fact;
    }
    return fact;
}
 */

/* №3
function combine(num1, num2, num3){
    return num1*100 + num2*10 + num3;
}
 */

/* №4
function square(num1, num2){
    if (num2 === undefined){
        return num1 * num1;
    }
    else {
        return num1 * num2;
    }
}
 */

/* №5
function perfectNumber(num1){
    if (num1 % 2 !== 0 && num1 % 3 !== 0){
        return num1;
    }
}
 */

/* №6
function perfectNumbers(num1, num2){
    while (num2 > num1){
        num2--;
        perfectNumber(num2);
    }
}
 */

/* №7
function time(hours, minutes, seconds){
    if (minutes === undefined && seconds === undefined){
        return `${hours}:00:00`;
    }
    else if (seconds === undefined){
        return `${hours}:${minutes}:00`;
    }
    else {
        return (`${hours}:${minutes}:${seconds}`);
    }
}
 */

/* №8
function convertToSeconds(hours, minutes, seconds){
    return (hours * 3600 + minutes * 60 + seconds);
}
 */

/* №9
function convertToTime(sec){
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec % 3600) / 60);
    let seconds = sec % 60;
    return (`${hours}:${minutes}:${seconds}`);
}
 */

/* №10
function dateDifference(hour1, minute1, second1, hour2, minute2, second2){
    let time1 = convertToSeconds(hour1, minute1, second1);
    let time2 = convertToSeconds(hour2, minute2, second2);
    let Diff = null;
    if (time1 > time2) {
        time1 = time1 - time2;
        Diff = convertToSeconds(time1);
    }
    else {
        time2 = time2 - time1;
        Diff = convertToSeconds(total2)
    }
 }
 */