const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const audio = document.querySelector(".audio audio")

play.addEventListener('click', () => {
    audio.play()
})
pause.addEventListener('click', () => {
    audio.pause()
})

// Season Buttons//

document.body.style.backgroundImage = "url('./assets/fall.jpg')"
document.body.style.backgroundPosition = "center"
document.body.style.backgroundSize = "cover"

const seasons = document.querySelectorAll(".season")

seasons.forEach(season => {
    season.addEventListener('click', (e) => {
        const element = e.target
        console.log(`${element.id}`)

        document.body.style.backgroundImage = `url('./assets/${element.id}.jpg')`

    })
})

// Duration Buttons

// SELECT DURATION BUTTONS
const durations = document.querySelectorAll(".duration");

// DEFAULT AUDIO DURATION
let audioDuration = 120; // 2min

// CHANGE AUDIO DURATION
durations.forEach((duration) => {
    duration.addEventListener("click", () => {
        audioDuration = duration.getAttribute("audio-duration");
        update();
    });
});

// SELECT RECT and RMAINING TIME ELEMENT
const path = document.querySelector(".rect"),
    remainingTimeEl = document.querySelector(".audio-time-remaining");

// TOTAL LENGTH OF THE PATH (PERIMETER OF THE RECTANGLE)
const pathLength = path.getTotalLength();
// SET THE LENGTH OF A DASH TO pathLength
path.style.strokeDasharray = pathLength;

function update() {
    // STOP AUDIO
    if (audio.currentTime >= audioDuration) {
        audio.pause(); // pause audio
        // audio.currentTime = 0; // stop audio
    }

    // PORTION PLAYED FROM THE AUDIO
    let portionPlayed = audio.currentTime / audioDuration;

    // STROKE DASHOFFSET IS PROPOTIONAL TO the portionPlayed
    path.style.strokeDashoffset = -portionPlayed * pathLength;

    // CALCULATE REMAINING TIME IN SEC
    let remainingTimeInSec = audioDuration - audio.currentTime;
    renderRemainingTime(remainingTimeInSec);

    if (!audio.paused) {
        requestAnimationFrame(update);
        console.log("update");
    }
}
update();

// RENDER REMAINING TIME
function renderRemainingTime(timeInSec) {
    let min = Math.floor(timeInSec / 60);
    let sec = Math.floor(timeInSec % 60);

    // IF min/sec is a single digit(ex:9) we add a zero before the digit. (ex: 9 becomes 09)
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    remainingTimeEl.innerHTML = `${min}:${sec}`;
}