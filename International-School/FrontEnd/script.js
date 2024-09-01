document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.nav a:not(#NOT)');
    var headerHeight = document.querySelector('.header').offsetHeight;

    if (window.location.href.includes("?scroll=")){
      console.log(window.location.href.split("?scroll=")[1]);
      var target = document.querySelector(window.location.href.split("?scroll=")[1]);
      var targetPosition = target.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }

    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var targetId = link.getAttribute('href');
        var target = document.querySelector(targetId);
        var targetPosition = target.offsetTop - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      });
    });
  });