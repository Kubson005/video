const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');

function clicker(){
  if(video.paused)  {
    video.play()  
  }
  else{
    video.pause()
  }
}

function znaczki(){
  if(video.paused)  {
    toggle.innerHTML="&#9658;"
  }
  else{
    toggle.innerHTML="&#9208;"
  }
}
function updateProgress(){
progressBar.style.flexBasis=video.currentTime / video.duration * 100 + "%"
}

function setProgress(value){
  video.currentTime = value * video.duration
}

function handleProgress(mouseEvent){
  setProgress(mouseEvent.offsetX / progress.offsetWidth)
}

function move(howMuch){
  video.currentTime += howMuch
}

function handleSkip(event){
move(Number(event.target.dataset.skip))
}

function handleSlider(event){
  video[event.target.name]=event.target.value
}



toggle.addEventListener("click", clicker )
video.addEventListener("click", clicker )
video.addEventListener("play", znaczki)
video.addEventListener("pause", znaczki)
video.addEventListener("timeupdate", updateProgress)
progress.addEventListener("click", handleProgress)
skipButtons.forEach( btn => btn.addEventListener("click", handleSkip))
ranges.forEach(range => range.addEventListener("change", handleSlider))
ranges.forEach(range => range.addEventListener("mousemove", handleSlider))


