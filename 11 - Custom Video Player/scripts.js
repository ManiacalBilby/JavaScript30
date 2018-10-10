/* Get our elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider')

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

function skip(event) {
  console.log("You clicked the skip button!", this.dataset.skip)
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  console.log(this.name, this.value)
}

/* Hook up the event listeners */

video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)
skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))