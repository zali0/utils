var stores = [
    {
        id: 2,
    },
    {
        id: 3,
    },
];
function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
function randomWithProbability() {
    var notRandomNumbers = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    var idx = Math.floor(Math.random() * notRandomNumbers.length);
    return notRandomNumbers[idx];
}
var generateKeeper = function () {
};
var generateVisitors = function () {
};
for (var i_1 = 0; i_1 < stores.length; ++i_1) {
    var currentDate = new Date(); // get the current date
    var startDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());
    console.log(startDate);
    for (var day = 1; day <= 365; ++day) {
        for (var hour = 1; hour <= 24; ++hour) {
            if (hour == 8) {
                var time = generateKeeper();
                console.log(startDate.getUTCHours());
                // let noOfVistors = randomWithProbability()
            }
            else {
                console.log("Hello");
            }
        }
    }
}
//# sourceMappingURL=index.js.map