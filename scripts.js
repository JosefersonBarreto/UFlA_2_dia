$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var toc = $("#TOC");
        if (scroll >= 100) {
            toc.addClass("fixed");
        } else {
            toc.removeClass("fixed");
        }
    });
});
