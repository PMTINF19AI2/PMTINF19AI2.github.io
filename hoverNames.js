function showName (e, idOfItem) {
    const material = document.getElementById(idOfItem);
    const container = document.getElementsByClassName('.mausanzeige');
    $(".mausanzeige").text(idOfItem);
    $('.mausanzeige').css('display', 'block');
    $('.mausanzeige').css('top', e.pageY + "px");
    $('.mausanzeige').css('left', e.pageX + 20 +"px");
}


function hideName () {
    $(".mausanzeige").css("display", "none");
}

