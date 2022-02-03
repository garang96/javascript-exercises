const sumAll = (firstArg, secondArg) => {
    let sum = 0;

    if (typeof firstArg !== 'number' || typeof secondArg !== 'number') {
        return 'ERROR';
    } else if (firstArg < 0 || secondArg < 0) {
        return 'ERROR';
    } else if (firstArg > secondArg) {
        for (let i = secondArg; i <= firstArg; i++) {
            sum += i;
        }
    } else {
        for (let i = firstArg; i <= secondArg; i++) {
            sum += i;
        }
    }

    return sum;
}
sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);


// Do not edit below this line
module.exports = sumAll;