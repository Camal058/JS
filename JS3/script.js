/* №1
let car = {
    manufacturer: "Seat",
    model: "Leon",
    year: "2014",
    midSpeed: "90" };
function print() {
    return 'Car: ' + car.manufacturer + ` ` + car.model + ` Year: ` + car.year + ` Speed: ` + car.midSpeed;
}
alert(print(car))

function calculate(speed) {
    let totalTime = speed / car.midSpeed;
    let restTime = Math.floor(totalTime / 4);
    totalTime += restTime;
    return totalTime;
}

var time = calculate(270)
alert(time)
 */

/* №2
function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}

function addFractions(fraction1, fraction2) {
    const resultNumerator = fraction1.numerator * fraction2.denominator + fraction1.denominator * fraction2.numerator;
    const resultDenominator = fraction1.denominator * fraction2.denominator;
    return new Fraction(resultNumerator, resultDenominator);
}

function subtractFractions(fraction1, fraction2) {
    const resultNumerator = fraction1.numerator * fraction2.denominator - fraction1.denominator * fraction2.numerator;
    const resultDenominator = fraction1.denominator * fraction2.denominator;
    return new Fraction(resultNumerator, resultDenominator);
}


function multiplyFractions(fraction1, fraction2) {
    const resultNumerator = fraction1.numerator * fraction2.numerator;
    const resultDenominator = fraction1.denominator * fraction2.denominator;
    return new Fraction(resultNumerator, resultDenominator);
}


function divideFractions(fraction1, fraction2) {
    const resultNumerator = fraction1.numerator * fraction2.denominator;
    const resultDenominator = fraction1.denominator * fraction2.numerator;
    return new Fraction(resultNumerator, resultDenominator);
}


function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}


function simplifyFraction(fraction) {
    const gcd = this.gcd(this.numerator, this.denominator);
    const simplifiedNumerator = this.numerator / gcd;
    const simplifiedDenominator = this.denominator / gcd;
    return new Fraction(simplifiedNumerator, simplifiedDenominator);
}*/

/* №3
function Time(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
}

function printTime(Time) {
    console.log(`Time: ${this.hours} : ${this.minutes} : ${this.seconds}`);
}

function timeSec(Time, sec) {
    let totalSec = (Time.hour * 3600) + (Time.minute * 60) + (parseInt(Time.seconds) + sec);
    Time.hour = Math.floor(totalSec / 3600);
    Time.minute = Math.floor((totalSec % 3600) / 60);
    Time.seconds = (totalSec % 3600) % 60;
}
function timeMin(Time, minute) {
    let totalSec = (Time.hour * 3600) + ((parseInt(Time.minutes) + minute) * 60) + parseInt(Time.seconds);
    Time.hour = Math.floor(totalSec / 3600);
    Time.minute = Math.floor((totalSec % 3600) / 60);
    Time.seconds = (totalSec % 3600) % 60;
}
function timeHour(Time, hour) {
    let totalSec = ((parseInt(Time.hours) + hour) * 3600) + (Time.minutes * 60) + parseInt(Time.seconds);
    Time.hour = Math.floor(totalSec / 3600);
    Time.minute = Math.floor((totalSec % 3600) / 60);
    Time.seconds = (totalSec % 3600) % 60;
}
*/
