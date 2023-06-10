const video = document.querySelector('#video-play')
const Play_Pause = document.querySelector('.play-pause img')
const progressBar = document.querySelector('#progress-bar')
const soundBar = document.querySelector('#sound-bar')
const speedBar = document.querySelector('#speed-bar')
const previousVideo = document.querySelector('.play-previous')
const nextVideo = document.querySelector('.play-next')

// Update the ProgressBar with reference to the current time of the video
const updateProgressBar = () => {
    let progress = progressBar.value
    const duration = video.duration
    video.currentTime = (progress / 100) * duration

    // To make the progressBar move along the timeline

}

// Function to toggle Play-Pause button
const togglePlay_Pause = () => {
    if (Play_Pause.src.endsWith('play.svg')) {
        video.play()
        Play_Pause.src = 'icons/pause.svg'
    } else {
        video.pause()
        Play_Pause.src = 'icons/play.svg'
    }
}

// Function to toggle Play and Pause of the video when clicked on the screen
const togglePlay_Pause_OnScreen = () =>{
    if(video.paused){
        video.play()
        Play_Pause.src = 'icons/pause.svg'
    }else{
        video.pause()
        Play_Pause.src = 'icons/play.svg'
    }
}

// Function to change the volume of the video
const alterSound = () =>{
    const soundValue = soundBar.value / 100
    // console.log(soundValue)
    video.volume = soundValue
}

// Function to change the speed of the video
const alterSpeed = () =>{
    const speedValue = speedBar.value
    console.log(speedValue)
    video.playbackRate = speedValue
}

// Function to Update the Video Playing
const updatePreviousVideo = () =>{
    video.src = 'videos/video2.mp4'
    video.play()
}

// Function to Update the Video Playing
const updateNextVideo = () =>{
    video.src = 'videos/video3.mp4'
    video.play()
}

// EventListeners for the functions
progressBar.addEventListener('input', updateProgressBar)
Play_Pause.addEventListener('click', togglePlay_Pause)
video.addEventListener('click', togglePlay_Pause_OnScreen)
soundBar.addEventListener('input', alterSound)
speedBar.addEventListener('input', alterSpeed)
previousVideo.addEventListener('click', updatePreviousVideo)
nextVideo.addEventListener('click', updateNextVideo)