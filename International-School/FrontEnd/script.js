function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetElementId = urlParams.get('target');

    const targetElement = document.getElementById(targetElementId);

    if (targetElement) {
        var targetId = targetElement.getAttribute('href');
        var target = document.querySelector(targetId);
        window.scrollTo(0, 0);

        sleep(2000);
        console.log("Slept");

        target.scrollIntoView({ behavior: 'smooth' });
        
        window.scrollBy(0, 1000);
    }

    var navLinks = document.querySelectorAll('.nav a');
   
    navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
    event.preventDefault();
    var targetId = link.getAttribute('href');
    if (!window.location.href.includes(link.getAttribute('id').replace('.', ''))) {
        if (window.location.href.includes("?")) {
            if (!window.location.href.includes(link.getAttribute('id').replace(".", "")+"?target="+window.location.href.split('?')[1].replace("target=", ""))){
                window.location.href = link.getAttribute('id')+"?target="+targetId;
            }
        } else {
            window.location.href = link.getAttribute('id')+"?target="+targetId;
        }
    }
    var target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
    
    });window.scrollBy(0, 1000);
    });
   });