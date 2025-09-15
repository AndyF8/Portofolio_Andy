$(document).ready(function(){

    $(".button").click(function(){
        $(this).addClass("active").siblings().removeClass("active");

        var filter = $(this).attr("data-filter");
    
        if (filter == "all"){
            $(".gallery .image").show(400);
        }
        else{
            $(".gallery .image").not("."+filter).hide(200);
            $(".gallery .image").filter("."+filter).show(400);
        }
    });

    // MAGNIFIC-POPUP dengan group berdasarkan rel
    $('a[rel]').each(function () {
        var rel = $(this).attr('rel');
        $('a[rel="' + rel + '"]').magnificPopup({
            type: 'image',
            gallery: { enabled: true },
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            closeOnContentClick: true,
            midClick: true
        });
    });

});
