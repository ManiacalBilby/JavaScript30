let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')

function timer (seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft(seconds) {
  const hours = Math.floor(seconds / 3600);
  let remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  remainingSeconds = remainingSeconds % 60;
  const display = 
  `${hours < 10 ? '0' : '' }${hours}:${minutes < 10 ? '0' : '' }${minutes}:${remainingSeconds < 10 ? '0' : '' }${remainingSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const time = new Date(timestamp);
  endTime.textContent = "Be Back at " + time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  // Below is the code I wrote for the tutorial solution.
  // const end = new Date(timestamp);
  // const hour = end.getHours();
  // const adjustedHour = hour > 12 ? hour - 12 : hour;
  // const minutes = end.getMinutes();
  // endTime.textContent = `Be Back at ${adjustedHour}:${minutes < 10 ? '0' : '' }${minutes}`
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', function(event) {
  event.preventDefault()
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
})