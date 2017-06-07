'use strict'


var smallMenu = function () {
  var viewMenu = document.getElementById('js-menu-small');
  if (viewMenu.classList.contains('hide')) {
    viewMenu.classList.remove('hide');
  } else {
    viewMenu.classList.add('hide');
  }
}
document.getElementById('js-button-mini').addEventListener('click', smallMenu);
