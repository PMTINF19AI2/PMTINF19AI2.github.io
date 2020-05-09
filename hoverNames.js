$('#Glassscheibe').hover(function() {
    const material = document.getElementById('#Glassscheibe');
    const container = document.getElementsByClassName('.mausanzeige');
    container.innerText = Glassscheibe;
    $('.mausanzeige').css('display', 'block');
    $('.mausanzeige').css('top', window.event.screenY + document.body.scrollTop + 220 + "px");
    $('.mausanzeige').css('left', window.event.screenX + document.body.scrollLeft + "px");
});