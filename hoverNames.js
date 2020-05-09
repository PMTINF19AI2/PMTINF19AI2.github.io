function showName (idOfItem) {
    const material = document.getElementById(idOfItem);
    const container = document.getElementsByClassName('.mausanzeige');
    $(".mausanzeige").text(idOfItem);
    $('.mausanzeige').css('display', 'block');
    $('.mausanzeige').css('top', window.event.screenY + document.body.scrollTop + 220 + "px");
    $('.mausanzeige').css('left', window.event.screenX + document.body.scrollLeft + "px");
}


function hideName () {
    $(".mausanzeige").css("display", "none");
}

