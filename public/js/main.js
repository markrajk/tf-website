var menuToggle = document.querySelectorAll('.menu-toggle');
var header = document.querySelector('header');
var nav = document.querySelector('.nav');
var burger = nav.querySelector('.burger');
var toolbar = document.querySelector('.toolbar');
var body = document.querySelector('body');
var subheader = document.querySelector('.subheader-wrapper');

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
      enableScrolling();
      nav.classList.remove('onscreen');
      burger.innerHTML = '<i class="fas fa-bars show-md-inline-flex"></i>';
    } else {
      disableScrolling();
      nav.classList.add('onscreen');
      burger.innerHTML = '<i class="fas fa-times show-md-inline-flex"></i>';
    }
  });
}

var scrollPositionY = window.scrollY;
var scrollDown = false;
var scrollEnabled = true;

if (subheader) {
  window.addEventListener('scroll', function (e) {
    if (!scrollEnabled) return;
    if (window.scrollY > scrollPositionY) {
      scrollPositionY = window.scrollY;
      scrollDown = true;
    } else {
      scrollPositionY = window.scrollY + 1;
      scrollDown = false;
    }

    if (scrollDown) {
      body.style.paddingTop = '7.05rem';
      header.style.display = 'none';
      subheader.style.top = '0';
      subheader.style.boxShadow = '0 3px 5px 0 rgba(0,0,0,.1)';
      subheader.style.borderBottom = 'none';
      console.log(scrollPositionY);
    } else {
      body.style.paddingTop = '0';
      header.style.display = 'block';
      subheader.style.top = '7.05rem';
      console.log(scrollPositionY);
    }

    if (scrollPositionY < 10) {
      subheader.style.boxShadow = 'none';
      subheader.style.borderBottom = '1.5px solid #F4F4F4';
    }

    console.log(scrollPositionY);
  });
}
function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
  scrollEnabled = false;
}

function enableScrolling() {
  window.onscroll = function () {};
  scrollEnabled = true;
}
