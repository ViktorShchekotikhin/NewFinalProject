let offset = 20;

$('.navbar li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});



$(document).ready(function(){
    $("body header #scrl").on("click","a",function (event){
        event.preventDefault();
        let id = $(this).attr('href'),
        top = $(id).offset().top();
        $('body,html').animate({scrollTop: top}, 1500);
    });
});