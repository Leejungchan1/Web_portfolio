$(function(){
    $(".main_inner").slick({
        rows:1,
        dots: true,
        arrows: true,
        draggable:false,
    });

    $(".r_slide").slick({
        arrows: true,
        draggable:false,
        fade: true,
        autoplay:1500,
    });

    $(".popup").hide();

    $(".bottom").click(function() {
        var index = $(this).attr('class').match(/\d+/)[0];
        $(".popup-" + index).fadeIn();
    });

    $(".button").click(function(){
        $(".popup").fadeOut();
    })


    $(document).mouseup(function (e) { 
        var container = $(".popup");
        if (!container.is(e.target) && container.has(e.target).length === 0){
            container.css("display","none");
        }	
    });

})