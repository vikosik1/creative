$(document).ready(function() {
    $('.ba-menu-btn').on('click', function(){
        $('.ba-menu').toggle();
    });

    $(window).on('resize', function() {
        
        if ($(this).width() > 991 ) {
            $('.ba-menu').show();
        } else {
            $('.ba-menu').hide();
        }

    })
})