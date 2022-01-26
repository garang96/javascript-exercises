const sumAll = (...sumRange) => {
    let sum = 0;
    let min = Math.min(...sumRange);
    let max = Math.max(...sumRange);

    if (min.length < 0) {
        console.log('ERROR');
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    console.log(sum);
}

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);


// Do not edit below this line
module.exports = sumAll;