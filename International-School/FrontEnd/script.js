document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.nav a');
   
    navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
    event.preventDefault();
    var targetId = link.getAttribute('href');
    var target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
    
    });window.scrollBy(0, 1000);
    });
   });