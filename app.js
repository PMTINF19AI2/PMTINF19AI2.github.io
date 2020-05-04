// JavaScript source code
const navSlide = () => {
    const dropdown = document.querySelector('.dropdown');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const suchButton = document.querySelector('#searchIcon');
    const suchFeld = document.querySelector('#searchDiv');
    const logoTop = document.querySelector('img.logo');

    dropdown.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        dropdown.classList.toggle('toggle');

    });

    suchButton.addEventListener('click', () => {
        nav.classList.toggle('navLinks-active');
        suchFeld.style.display = 'block';
        suchFeld.style.width = '100%';
        logoTop.style.marginTop = '0px';
    });


    $('#logicPic').on({
        'mouseover': function () {
            timer = setTimeout(function () {
                logicPic.setAttribute("src", "images/logicBlock-Logo3d_glowing.png");
            }, 1000);
        },
        'mouseout' : function () {
            clearTimeout(timer);
            logicPic.setAttribute("src", "images/logicBlock-Logo3d2.png");
        }
    });


}

navSlide();



function glowingOn() {
    setTimeout(function() {
        const logicPic = document.querySelector('#logicPic');
        logicPic.setAttribute("src", "images/logicBlock-Logo3d_glowing.png");
    }, 1800);
}

function glowingOff() {
    setTimeout(function() {
        const logicPic = document.querySelector('#logicPic');
        logicPic.setAttribute("src", "images/logicBlock-Logo3d2.png");
    }, 3000);
}




