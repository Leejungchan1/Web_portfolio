$(function(){
    $(".main_inner").slick({
        dots: true,
        arrows: true,
        draggable:false,
        slidesToShow: 1,
        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data();
            if (i == '0') {
                i = "Hanatour <br> ZEUS world";
            } else if (i == '1') {
                i = "DAOL <br> COMPANY";
            } else if (i == '2') {
                i = "McDonald";
            } else if (i == '3') {
                i = "Canon";
            } else if (i == '4') {
                i = "HOLLYS <br> COFFEE";
            } else if (i == '5') {
                i = "Coffine <br> Gurunaru";
            } else if (i == '6') {
                i = "INDIGO";
            } else if (i == '7') {
                i = "Green <br> Hospital";
            } else if (i == '8') {
                i = "Tcg 카드숍";
            } else if (i == '9') {
                i = "Architecture";
            } else if (i == '10') {
                i = "NEXON";
            } else if (i == '11') {
                i = "Nakwon";
            } else if (i == '12') {
                i = "Starbucks Korea";
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

    $(".link").click(function() {
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