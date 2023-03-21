// Code your solution in this file!
const returnFirstTwoDrivers = arr => [...arr].splice(0, 2);

const returnLastTwoDrivers = arr => [...arr].splice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = num => {
    return fare => fare * num
}

const fareDoubler = num => num * 2

const fareTripler = num => num * 3;

const selectDifferentDrivers = (drivers, fn) => fn(drivers)
