const leapYears = (year) => {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
};

leapYears(1996);
leapYears(199);
leapYears(34992);
leapYears(1900);
leapYears(1600);
leapYears(700);


// Do not edit below this line
module.exports = leapYears;