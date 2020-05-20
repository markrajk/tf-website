var menuToggle = document.querySelectorAll('.menu-toggle');
var header = document.querySelector('header');
var nav = document.querySelector('.nav');
var burger = nav.querySelector('.burger');

console.log('HELLO IE!');

function addEvent(element, evName, fn) {
  if (element.addEventListener) {
    element.addEventListener(evName, fn, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + evName, function (e) {
      fn(e || window.event);
    });
  }
}

for (let i = 0; i < menuToggle.length; i++) {
  addEvent(menuToggle[i], 'click', function () {
    var pos = window.scrollY;
    nav.style.transition = 'transform .5s ease-in-out';
    setTimeout(function () {
      nav.style.transition = 'none';
    }, 500);
    if (nav.classList.contains('onscreen')) {
      //window.scrollTo(0, 0);
      nav.classList.remove('onscreen');
      burger.innerHTML = '<i class="fas fa-bars show-md"></i>';
    } else {
      nav.classList.add('onscreen');
      burger.innerHTML = '<i class="fas fa-times show-md"></i>';
    }
  });
}
