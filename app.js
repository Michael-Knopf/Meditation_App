const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const audio = document.querySelector(".audio audio")

play.addEventListener('click', () => {
    audio.play()
})
pause.addEventListener('click', () => {
    audio.pause()
})