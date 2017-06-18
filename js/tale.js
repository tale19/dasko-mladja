function main() {
    var hello = "js running...";
    

    // To show submenu on hover (already coded in CSS) 
    $('.submenu-items').hide();
    $('.menu-item').mouseenter(function() {
        $('.submenu-items').hide();
        $(this).find('.submenu-items').show();       
    });
    $('.nav').mouseleave(function() {
        $('.submenu-items').hide();
    });

    // Disable underlined css links after click
    $('div a').click(function() {
        $(this).css('text-decoration', 'none');
        console.log('link clicked on');
    });
    
    // To toggle mobile menu on menu button click
//    $('.menu-items').hide();
    $('#menu-button').click(function(e) {
        $('#mobile-menu').toggle('800');
        $(this).toggleClass('displayed');
        $('.submenu').hide();
        console.log('toggle menu');
    });
    
    // To close the mobile menu when a menu item is clicked on
    $('.menu-item-no-submenu a').click(function(e) {
        $('#mobile-menu').hide('800');
        $('#menu-button').toggleClass('displayed');
        console.log('link clicked, close the menu');
    });
    
    // To toggle submenu items on click (mobile view only)
    $('.onclick-menu').click(function() {
       $('.submenu').toggle();
        console.log('toggle submenu');
    });
    
    
    // To display bank account details
    $('#bank').click(function() {
       $('#bank-popup').show();
    });
    
    // To close the bank popup on OK button
    $('#bank-popup button').click(function() {
        $('#bank-popup').hide();
    })
    
    
    
    // Audio play-pause
    var audio = document.getElementById('stream');
    $('#play-pause').click(function() {
        if ($('#play-pause').hasClass('glyphicon-play')) {
            $('#play-pause').removeClass('glyphicon-play');
            $('#play-pause').addClass('glyphicon-pause');
            audio.play();
            console.log('stream playing');
        } else if ($('#play-pause').hasClass('glyphicon-pause')) {
            $('#play-pause').removeClass('glyphicon-pause');
            $('#play-pause').addClass('glyphicon-play');
            audio.pause();
            console.log('stream paused');
        }
    })
    
    
    /*
    // carousel for heading slideshow
    var slideIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1} 
        x[slideIndex-1].style.display = "block"; 
        setTimeout(carousel, 4000); // Change image every 4 seconds
    }
    */
    //alert(hello);
};

$(document).ready(main);