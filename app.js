$(document).ready(function () {

    //enter the page
    $('#enterButton').on("click", function () {
        $('.enterPage').css('display', "none");
        $('.homePage').css('visibility', 'visible')
    })

    var navOpen = false;;

    $('#openNav').on('click', function () {
        if (navOpen === true) {
            closeNav();
        } else {
            openNav();
        }
    })


    function openNav() {
        $('#mySidenav').css("width", "250px");
        $('#homePage').css('margin-left', 250);
        navOpen = true;
    }

    function closeNav() {
        $('#mySidenav').css("width", "0px");
        $('#homePage').css('margin-left', "0px");
        navOpen = false;
    }

});
