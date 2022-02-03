const ftoc = function(farenheit) {
    const tempInCelcius = (farenheit - 32) * 5 / 9;
    if (!Number.isInteger(tempInCelcius)) {
        return (+tempInCelcius.toFixed(1));
    } else {
        return tempInCelcius;
    }
};

const ctof = function(celcius) {
    const tempInFarenheit = celcius * 9 / 5 + 32;
    if (!Number.isInteger(tempInFarenheit)) {
        return (+tempInFarenheit.toFixed(1));
    } else {
        return tempInFarenheit;
    }
};
ftoc(32);
ftoc(100);
ftoc(-100);
ctof(0);
ctof(73.2);
ctof(-10);


// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};