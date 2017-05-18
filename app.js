$(document).ready(function () {

    //enter the page
    $('#enterButton').on("click", function () {
        $('.enterPage').css('display', "none");
        $('.homePage').css('visibility', 'visible');
    })

    var navOpen = false;

    $('#mySidenav').hover(function () {
        if (navOpen === true) {
            closeNav();
            rotateBack();
        } else {
            openNav();
            rotateText();
        }
    })

    function rotateText() {
        $('.vertical-text').addClass('rotateText');
    }
    
    function rotateBack() {
        $('.vertical-text').removeClass('rotateText');
    }
    
    function openNav() {
        $('#mySidenav').css("width", "250px");
        $('#homePage').css('margin-left', 250);
        navOpen = true;
    }

    function closeNav() {
        $('#mySidenav').css("width", "70px");
        $('#homePage').css('margin-left', "70px");
        navOpen = false;
    }

});
