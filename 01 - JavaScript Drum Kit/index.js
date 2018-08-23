function playSound(event) {
  const audio = $(`audio[data-key="${event.keyCode}"]`)
  const key = $(`.key[data-key="${event.keyCode}"]`)
  if(!audio) return;
  audio[0].currentTime = 0;
  audio[0].play();
  key.addClass('playing');
}

const keyCodes = [65, 83, 68, 70, 71, 72, 74, 75, 76]

$('.key').on('transitionend', function(){
  if(event.propertyName === 'transform') {$('.key').removeClass('playing')}
})

$(window).on('keydown', function() {
  if (keyCodes.indexOf(event.keyCode) !== -1){playSound(event)}
});