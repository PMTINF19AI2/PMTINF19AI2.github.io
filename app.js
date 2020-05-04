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


}

navSlide();


function glowingOn() {
    setTimeout(function() {
        $( '#logicPic' ).fadeTo("400", 0);
        $('#logicPic').css('display','none');
        $( '#logicVideo' ).fadeTo("400", 1);
        $('#logicVideo').css('display', 'inline');
        $('#logicGate').css('padding', '0');
        
    }, 1500);
}

function glowingOff() {
    setTimeout(function() {
        $( '#logicVideo' ).fadeTo("400", 0);
        $('#logicVideo').css("display",'none');
        $( '#logicPic' ).fadeTo("400", 1);
        $('#logicPic').css("display", 'inline');
        $('#logicGate').css('padding', '5% 0');
    }, 2000);
}





