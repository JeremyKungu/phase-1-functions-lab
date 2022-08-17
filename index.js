// Code your solution in this file!
const hq = 42;

function distanceFromHqInBlocks(location) {
    return Math.abs(hq - location);
}
distanceFromHqInBlocks(50);

function distanceFromHqInFeet(feet) {
    distanceFromHqInBlocks(feet);
    return Math.abs(hq - feet) * 264;
}
distanceFromHqInFeet(52);

function distanceTravelledInFeet(start, finish) {
    return Math.abs((finish - start) * 264);
}

distanceTravelledInFeet(34, 44);

function calculatesFarePrice(start, destination) {
    let feetTravelled = distanceTravelledInFeet(start, destination); 
    if(feetTravelled <= 400) {
        return 0;    

    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
    } else if(feetTravelled > 2000 && feetTravelled <=2499) {
        return 25;
    } else if(feetTravelled > 2500) {
        return "cannot travel that far";
    }
}

calculatesFarePrice(43, 45)