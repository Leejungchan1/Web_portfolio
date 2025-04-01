$(function(){
    $(".main_inner").slick({
        dots: true,
        arrows: true,
        draggable:false,
        slidesToShow: 1,
        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data();
            if (i == '0') {
                i = "UI / UX <br> DESIGN";
            } else if (i == '1') {
                i = "UI / UX <br> DESIGN";
            }
            return '<a class="dot"><span>' + i + '</span></a>';
        }
    });

    $(".r_slide").slick({
        infinite : true,
        pauseOnFocus: false,
        arrows: true,
        draggable:false,
        fade: true,
        autoplay:true,
        autoplaySpeed : 2500,
    });

    $(".popup").hide();

    
    $(".button").click(function(){
        $(".popup").fadeOut();
    })
    
    $(".link").click(function() {
        var index = $(this).attr('class').match(/\d+/)[0];
        $(".popup-" + index).fadeIn();
    });

    $(document).mouseup(function (e) { 
        var container = $(".popup");
        if (!container.is(e.target) && container.has(e.target).length === 0){
            container.css("display","none");
        }	
    });

})
