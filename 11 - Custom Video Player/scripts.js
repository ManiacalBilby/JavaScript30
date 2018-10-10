/* Get our elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player_slider')

/* Build out functions */

function togglePlay() {
  updateButton()
  if (video.paused) {
    video.play();
  }
  else {
    video.pause()
  }
}

function updateButton() {
  const icon = !video.paused ? '►' : '❚ ❚'
  toggle.textContent = icon;
}

/* Hook up the event listeners */

video.addEventListener('click', togglePlay)
// video.addEventListener('play', updateButton)
// video.addEventListener('pause', updateButton)

toggle.addEventListener('click', togglePlay)