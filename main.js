let raceNumber = Math.floor(Math.random() * 1000);

var earlyReg = false;

var runnerAge = 12;

if (runnerAge > 17 && earlyReg === true) {
    raceNumber = raceNumber + 1000
} 

if (runnerAge > 17 && earlyReg === true) {
    console.log(`Hi racer no. ${raceNumber}! Your race time is 9:30 AM.`)
} else if (runnerAge > 17 && earlyReg === false) {
    console.log(`Hi racer no. ${raceNumber}! Your race time is 11:00 AM.`)
} else if (runnerAge < 18) {
    console.log(`Hi racer no. ${raceNumber}! Your race time is 12:30 PM.`)
}
