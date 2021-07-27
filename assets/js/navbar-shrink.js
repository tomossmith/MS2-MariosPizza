//$('.navTrigger').click(function () {
   // $(this).toggleClass('active');
   // console.log("Clicked menu");
//});

//Function used to shrink nav bar removing paddings and adding black background

        $(window).scroll(function() {
            if ($(document).scrollTop() > 10) {
                $('#home').fadeOut();
                $('#page-nav').fadeIn();
                console.log("OK");  

            } else {
                $('#home').fadeIn();
                $('#page-nav').hide();
            }
        });