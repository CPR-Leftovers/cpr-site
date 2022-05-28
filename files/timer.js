var timerSpan = document.getElementById('timer'), seconds = 0;
setInterval(function() {
    seconds++;
    timerSpan.innerHtml(seconds);
}, 1000);
document.getElementById('createLink').addEventListener('click', function generateLink (event) {
  var timeAgo = Date.now();

  this.removeEventListener('click', generateLink);

  function render () {
    var timeDiff = Math.floor((Date.now() - timeAgo) / 1000);

    document.getElementById('notice').textContent = 'You generated a link ' + timeDiff + ' seconds ago.';
  }

  setInterval(render, 1000);
  render();
});