// Define variables
const storeId = 1;
const openingTime = new Date('2023-03-14T09:00:00+03:00'); // Store opening time
const closingTime = new Date('2023-03-14T23:59:59+03:00'); // Store closing time
const keeperArrivalMin = new Date('2023-03-14T08:45:00+03:00'); // Keeper's arrival time minimum
const keeperArrivalMax = new Date('2023-03-14T09:30:00+03:00'); // Keeper's arrival time maximum
const keeperAbsenceMaxCount = 4; // Maximum number of times keeper can be absent in a day
const keeperAbsenceMaxDuration = 25; // Maximum duration of keeper's absence in minutes
const visitorsPerDay = 50; // Number of visitors to generate per day
const occupancyInterval = 5; // Interval for generating occupancy snapshots in minutes
const startDate = new Date('2023-03-01T00:00:00+03:00'); // Start date for generating data
const endDate = new Date('2024-03-01T00:00:00+03:00'); // End date for generating data
// Define helper functions
function getRandomDateInRange(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate data for each day
for (let date = new Date(startDate); date < endDate; date.setDate(date.getDate() + 1)) {
  const day = date.getDay(); // Day of the week (0-6)
  const isWeekend = day === 5 || day === 6; // Check if day is a weekend

  // Generate data for each hour of the day
  for (let hour = openingTime.getHours(); hour < closingTime.getHours(); hour++) {

    const hourStart = new Date(date);
    hourStart.setHours(hour);
    hourStart.setMinutes(0);
    hourStart.setSeconds(0);

    const hourEnd = new Date(hourStart.getTime());
    hourEnd.setHours(hour + 1);

    const keeperArrivalTime = getRandomDateInRange(keeperArrivalMin, keeperArrivalMax);
    const keeperAbsenceCount = getRandomIntInRange(0, keeperAbsenceMaxCount);
    let keeperAbsenceTime = new Date(hourStart);
    let keeperPresent = keeperArrivalTime < keeperAbsenceTime;
    console.log("HELLO")
    // Generate keeper presence/absence data for the hour
    for (let i = 0; i < keeperAbsenceCount; i++) {
      const absenceDuration = getRandomIntInRange(0, keeperAbsenceMaxDuration);
      keeperAbsenceTime = new Date(keeperAbsenceTime.getTime() + absenceDuration * 60000);
      keeperPresent = keeperArrivalTime < keeperAbsenceTime;
    }

    // Generate visitor data for the hour
    const visitors = [];
    const visitorInterval = isWeekend ? 10 : 5; // Increase interval on weekends
    const numVisitors = Math.floor(visitorsPerDay / 24);
    const visitorStart = new Date(hourStart);
    let visitorCount = 0;
    while (visitorCount < numVisitors && visitorStart < hourEnd) {
      visitors.push({
        id: visitors.length + 1,
        enterTime: new Date(visitorStart),
    });
    visitorStart.setMinutes(visitorStart.getMinutes() + visitorInterval);
    visitorCount++;
  }

  // Generate occupancy snapshots for the hour
  const occupancySnapshots = [];
  const occupancyStart = new Date(hourStart);
  while (occupancyStart < hourEnd) {
    const occupancyEnd = new Date(occupancyStart.getTime() + occupancyInterval * 60000);
    const occupancyCount = visitors.filter(visitor => {
      return visitor.enterTime >= occupancyStart && visitor.enterTime < occupancyEnd;
    }).length;
    occupancySnapshots.push({
      id: occupancySnapshots.length + 1,
      snapshotTime: new Date(occupancyStart),
      count: occupancyCount,
    });
    occupancyStart.setMinutes(occupancyStart.getMinutes() + occupancyInterval);
  }

  // Insert data into database here
  console.log({
    keeper: {
      id: 1,
      snapshotTime: new Date(hourStart),
      presence: keeperPresent,
    },
    visitors,
    occupancySnapshots,
  });
}
}