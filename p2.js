// Battery Logic
let batteryLevel = 100;
const batteryLevelElement = document.getElementById('batteryLevel');
const batteryText = document.getElementById('batteryText');

// Decrease battery every 10 seconds
setInterval(() => {
    if (batteryLevel > 0) {
        batteryLevel -= 1; // Decrease battery level
        updateBattery();
    }
}, 600); // 10000 milliseconds = 10 seconds

function updateBattery() {
    batteryLevelElement.style.height = batteryLevel + '%'; // Update battery height
    batteryText.textContent = batteryLevel + '%'; // Update battery text
}

// Counters Logic
let happinessCount = 50;
let tiredCount = 50;
let boredCount = 50;
let enjoyingCount = 50;

function playGif(action) {
    const dogImage = document.getElementById('dogImage');

    // Set the GIF based on button clicked
    switch (action) {
        case 'dance1':
            dogImage.src = 'dance1.gif';
            break;
        case 'dance2':
            dogImage.src = 'dance2.gif';
            break;
        case 'lost':
            dogImage.src = 'lost.gif';
            break;
        case 'lonely':
            dogImage.src = 'lonely.gif';
            break;
        case 'exercise1':
            dogImage.src = 'exercise1.gif';
            break;
        case 'partner':
            dogImage.src = 'partner.gif';
            break;
        case 'timeToGo':
            dogImage.src = 'timeToGo.gif';
            break;
        case 'shy':
            dogImage.src = 'shy.gif';
            break;
        case 'feed':
            dogImage.src = 'feed.gif';
            happinessCount += 5; // Increase happiness on feed
            tiredCount -= 5; // Decrease tiredness on feed
            break;
        case 'play':
            dogImage.src = 'play.gif';
            happinessCount += 10; // Increase happiness on play
            boredCount -= 5; // Decrease boredom on play
            enjoyingCount += 10; // Increase enjoyment on play
            break;
    }

    // Update counters
    updateCounters();
    
    // Reset image back to default after 5 seconds
    setTimeout(() => {
        dogImage.src = 'default.gif'; // Change back to default image
    }, 5000);
}

function updateCounters() {
    // Update each counter
    document.getElementById('happinessCount').textContent = happinessCount;
    document.getElementById('tiredCount').textContent = tiredCount;
    document.getElementById('boredCount').textContent = boredCount;
    document.getElementById('enjoyingCount').textContent = enjoyingCount;

    // Ensure counts do not go below 0
    happinessCount = Math.max(happinessCount, 0);
    tiredCount = Math.max(tiredCount, 0);
    boredCount = Math.max(boredCount, 0);
    enjoyingCount = Math.max(enjoyingCount, 0);
}
