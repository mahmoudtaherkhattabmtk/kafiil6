window.addEventListener('load', function () { const toggleButton = document.querySelector('.toggle-button'); const navbarLinks = document.querySelector('.navbar-links'); const navbarLinks2 = document.querySelector('.navbar-links-2'); const bodytag = document.body; const arabicbodytag = document.getElementById("right_to_left"); const preloader = document.getElementById('preloader'); toggleButton.addEventListener('click', () => { navbarLinks.classList.toggle('active'); navbarLinks2.classList.toggle('active'); }); preloader.style.transition = 'opacity 0.5s'; preloader.style.opacity = '0'; preloader.addEventListener('transitionend', function () { preloader.parentNode.removeChild(preloader); }); document.getElementById('dark-mode').addEventListener('click', function () { bodytag.classList.toggle("dark-theme"); }); }); const dropDownMenuToggle = document.getElementById("dropdown-menu"); function dropDownMenuToggleFun() { dropDownMenuToggle.classList.toggle("active"); }