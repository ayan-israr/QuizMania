Shery.mouseFollower({
  //   skew: true,
  //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  //   duration: 1,
});

Shery.makeMagnet(".magnet" /* Element to target.*/, {
  //Parameters are optional.
  // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  // duration: 1,
});

document.addEventListener('wheel', function(event) {
  if (event.ctrlKey) {
      event.preventDefault();
  }
}, { passive: false });

document.addEventListener('keydown', function(event) {
  if ((event.ctrlKey && (event.key === '+' || event.key === '-')) || event.key === 'Escape') {
      event.preventDefault();
  }
});


let panel = document.querySelector('.side-panel');
let menu = document.querySelector('.bx-menu');

// Function to disable scrolling
function disableScroll() {
    // Get the current scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
    // Prevent scrolling
    window.onscroll = function() {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  
  // Function to enable scrolling
  function enableScroll() {
    window.onscroll = null;
  }
  

// menu.addEventListener('click', () => {
//     panel.classList.add('panel-slide');
//     disableScroll();
// });