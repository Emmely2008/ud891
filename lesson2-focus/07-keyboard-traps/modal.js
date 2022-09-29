var $link2 = document.getElementById('link2');
$link2.onkeydown = function (event) {
  event.preventDefault();
}

var $input2 = document.getElementById('input2');
$input2.onblur = function (event) {
  this.focus();
}