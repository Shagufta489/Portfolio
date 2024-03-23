function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  document.addEventListener('DOMContentLoaded', function () {
   
    var controller = new ScrollMagic.Controller();

    var elements = document.querySelectorAll('.animate-me');

    elements.forEach(function(element) {
        var scene = new ScrollMagic.Scene({
            triggerElement: element, 
            triggerHook: 0.8, 
        })
        .setClassToggle(element, 'animated')
        .addTo(controller);
    });
});
  