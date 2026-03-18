 // Typing Effect
    const textArr = "Expertise in HTML5, CSS3, JavaScript, and Bootstrap 5.";
    let charIndex = 0;
    function typeEffect() {
      if (charIndex < textArr.length) {
        document.getElementById("typing").innerHTML += textArr.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 40);
      }
    }
    window.onload = typeEffect;

    // Smooth Collapse on Mobile when link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { if(window.innerWidth < 992) { bsCollapse.hide(); } });
    }); // Typing Effect
    const textArr = "Expertise in HTML5, CSS3, JavaScript, and Bootstrap 5.";
    let charIndex = 0;
    function typeEffect() {
      if (charIndex < textArr.length) {
        document.getElementById("typing").innerHTML += textArr.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 40);
      }
    }
    window.onload = typeEffect;

    // Smooth Collapse on Mobile when link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { if(window.innerWidth < 992) { bsCollapse.hide(); } });
    });