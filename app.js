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
        if (suchFeld.style.display == "block") {
            suchFeld.style.display == "none";
        } else {
            nav.classList.toggle('navLinks-active');
            suchFeld.style.display = 'block';
            suchFeld.style.width = '100%';
            logoTop.style.marginTop = '0px';
        }
    });


}

function randomPage() {
    var countPages = 13;
    const link = document.querySelector('#randomPage');
    const container = document.querySelector('li#randomPage');
    var pages = new Array(countPages);

    //page-declaration
    pages[0] = "/logicGate_wiki.html";
    pages[1] = "/card_wiki.html";
    pages[2] = "/inputCard_wiki.html";
    pages[3] = "/outputCard_wiki.html";
    pages[4] = "/workbench_wiki.html";
    pages[5] = "/pin_wiki.html";
    pages[6] = "/cable_wiki.html";
    pages[7] = "/resistance_wiki.html";
    pages[8] = "/sd_card_wiki.html";
    pages[9] = "/prozessor_wiki.html";
    pages[10] = "/setCard_wiki.html";
    pages[11] = "/resetCard_wiki.html";
    pages[12] = "/clockCard_wiki.html";

    var x = pages[parseInt(Math.random()*countPages)];
    soundManager.url = '/sounds/dudelduduStröti.mp3';

    soundManager.onready(function() {
        soundManager.createSound({
            id: 'mySound',
            url: '/sounds/dudelduduStröti.mp3'
        });

        // ...and play it
        soundManager.play('mySound');
    });
    setTimeout(function() {
        if (x != window.location.pathname) {
            window.location.replace(x);
        } else {
            randomPage();
        }
    }, 900);
}


function glowingOnLogic() {
    setTimeout(function() {
        $( '#logicPic' ).fadeTo("400", 0);
        $('#logicPic').css('display','none');
        $( '#logicVideo' ).fadeTo("400", 1);
        $('#logicVideo').css('display', 'inline');
        $('#logicGate').css('padding', '0');
        $('#logicGate').css('background-image','none');
    }, 1500);
}

function glowingOffLogic() {
    setTimeout(function() {
        $( '#logicVideo' ).fadeTo("400", 0);
        $('#logicVideo').css("display",'none');
        $( '#logicPic' ).fadeTo("400", 1);
        $('#logicPic').css("display", 'inline');
        $('#logicGate').css('padding', '5% 0');
        $('#logicGate').css('background-image','url(images/grasshintergrundklein.png)');
    }, 2000);
}

function glowingOnFlip() {
    setTimeout(function() {
        $( '#flipflopPic' ).fadeTo("400", 0);
        $('#flipflopPic').css('display','none');
        $( '#flipflopVideo' ).fadeTo("400", 1);
        $('#flipflop').css('background-image','none');
        $('#flipflopVideo').css('display', 'inline');
        $('#flipflop').css('padding', '0');
    }, 1500);
}

function glowingOffFlip() {
    setTimeout(function() {
        $( '#flipflopVideo' ).fadeTo("400", 0);
        $('#flipflopVideo').css("display",'none');
        $( '#flipflopPic' ).fadeTo("400", 1);
        $('#flipflop').css('background-image','url(images/grasshintergrundklein.png)');
        $('#flipflopPic').css("display", 'inline');
        $('#flipflop').css('padding', '5% 0');
    }, 2000);
}

function glowingOnWork() {
    setTimeout(function() {
        $( '#tutorialPic' ).fadeTo("400", 0);
        $('#tutorialPic').css('display','none');
        $('#tutorial').css("padding",'0%');
        $( '#tutotialVideo' ).fadeTo("400", 1);
        $('#tutorial').css('background-image','none');
        $('#tutotialVideo').css('display', 'inline');
        $('#tutotial').css('padding', '0');
    }, 1500);
}

function glowingOffWork() {
    setTimeout(function() {
        $( '#tutotialVideo' ).fadeTo("400", 0);
        $('#tutotialVideo').css("display",'none');
        $('#tutorial').css("padding",'5%');
        $( '#tutorialPic' ).fadeTo("400", 1);
        $('#tutorial').css('background-image','url(images/grasshintergrundklein.png)');
        $('#tutorialPic').css("display", 'inline');
        $('#tutotial').css('padding', '5% 0');
    }, 2000);
}

function glowingOnCode() {
    setTimeout(function() {
        $( '#testPic' ).fadeTo("400", 0);
        $('#testPic').css('display','none');
        $('#test').css("padding",'0%');
        $( '#testVideo' ).fadeTo("400", 1);
        $('#test').css('background-image','none');
        $('#testVideo').css('display', 'inline');
        $('#test').css('padding', '0');
    }, 1500);
}

function glowingOffCode() {
    setTimeout(function() {
        $( '#testVideo' ).fadeTo("400", 0);
        $('#testVideo').css("display",'none');
        $('#test').css("padding",'5%');
        $( '#testPic' ).fadeTo("400", 1);
        $('#test').css('background-image','url(images/grasshintergrundklein.png)');
        $('#testPic').css("display", 'inline');
        $('#test').css('padding', '5% 0');
    }, 2000);
}







navSlide();