const video = document.querySelector('.video')
const play = document.querySelector('.play')

play.addEventListener('click', VideoControl)

play.textContent = 'Pause'

function VideoControl() {

    if (video.paused) {
        video.play()
        play.textContent = 'Pause'
    }   else {
        video.pause()
        play.textContent = 'Play'
    }
}