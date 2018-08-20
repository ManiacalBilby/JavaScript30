$(document).ready(function(){

  const secondHand = $(".second-hand");
  const minuteHand = $(".min-hand");
  const hourHand = $(".hour-hand");

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60 * 360) + 90)
    const hoursDegrees = ((hours / 12) * 360) + 90;

    secondHand.css('transform', `rotate(${secondsDegrees}deg)`)
    minuteHand.css('transform', `rotate(${minutesDegrees}deg)`)
    hourHand.css('transform', `rotate(${hoursDegrees}deg)`)
  }

  setInterval(setDate, 1000)

});

