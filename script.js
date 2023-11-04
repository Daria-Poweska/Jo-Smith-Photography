

document.addEventListener("DOMContentLoaded", function() {
  const showBtn = document.querySelector(".navBtn");
  const topNav = document.querySelector(".top-nav");

  showBtn.addEventListener("click", function () {
      if (topNav.classList.contains("showNav")) {
          topNav.classList.remove("showNav");
          showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
      } else {
          topNav.classList.add("showNav");
          showBtn.innerHTML = '<i class = "fas fa-times"></i>';
      }
  });


  // LIGHTBOX

  var lightbox = new SimpleLightbox(".gallery a", {
      
  });

  
// SCROLL TRIGGER 
  gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto",
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: 0, autoAlpha: 1 }, 
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto",
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
  });
});

// 
oo

// scroll event for header background picture

document.addEventListener('scroll', function() {
  var header = document.querySelector('.header');

  if (window.scrollY <= 10) {   
      header.classList.add('at-top');
  } else {
      header.classList.remove('at-top');
  }
});



});