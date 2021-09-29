const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const audio = document.querySelector(".audio audio")

play.addEventListener('click', () => {
    audio.play()
})
pause.addEventListener('click', () => {
    audio.pause()
})

document.body.style.backgroundImage = "url('./assets/fall.jpg')"
document.body.style.backgroundPosition = "center"
document.body.style.backgroundSize = "cover"

const seasons = document.querySelectorAll(".season")

seasons.forEach(season => {
    season.addEventListener('click', () => {
        const element = event.target
        console.log(element.id)

        if (element.id == 'spring') {
            document.body.style.backgroundImage = "url('./assets/spring.jpg')"
        } else if (element.id == 'summer') {
            document.body.style.backgroundImage = "url('./assets/summer.jpg')"
        } else if (element.id == 'winter') {
            document.body.style.backgroundImage = "url('./assets/winter.jpg')"
        } else {
            document.body.style.backgroundImage = "url('./assets/fall.jpg')"
        }
    })
})