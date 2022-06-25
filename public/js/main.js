$(document).ready(function () {
    window.onload = init;
    function init() {
        // set-up regular buttons
        var menuItemElements = document.getElementsByClassName('menuItem');
        for (var i = 0; i < menuItemElements.length; i++) {
            menuItemElements[i].onclick = resetSubmenus;
        }
        // set-up buttons with submenu
        resetSubmenus();
    }

    function openSubmenu() {
        resetSubmenus();
        this.setAttribute('class', 'submenu active');
        this.onclick = resetSubmenus;
    }

    function resetSubmenus() {
        var submenuElements = document.getElementsByClassName('submenu');
        for (var i = 0; i < submenuElements.length; i++) {
            submenuElements[i].setAttribute('class', 'submenu');
            submenuElements[i].onclick = openSubmenu;
        }
    }

    function darkMode() {
        $('#wrapper').addClass("dark").removeClass("light");
        $('body').css("background-color", "#f0f2f5");
        $('.dark').css("background-color", "#18191a");
    }

    function lightMode() {
        $('#wrapper').removeClass("dark").addClass("light");
        $('body').css("background-color", "#18191a");
        $('.light').css("background-color", "#f0f2f5");
    }
    $('[name="checkbox"]').change(function () {
        if ($(this).is(':checked')) {
            darkMode();
        }
        else {
            lightMode();
        }
    });

    // $("#d-mode").click(function () {
    //     document.body.classList.toggle('dark');
    //     $("#wrapper").addClass("bgcolor");
    // })

    $("#bars").click(function () {
        $("#bar_wrapper").toggle(function () {
            $("#bar_wrapper").addClass('barMoblie');
        });
    });
    $("#bar").click(function () {
        $("#bar_wrapper").toggle(function () {
            $("#bar_wrapper").addClass('barMoblie');
        });
    });

    $("#user").click(function () {
        $("#user_dropdown").toggle();
    });


    var mouse_is_inside = false;
    $("body").mouseup(function(){
        // if(! mouse_is_inside) $('#user_dropdown').hide();
        if(! mouse_is_inside)
        {
            $( "div[dataset='dropdown']" ).hide();
        }
    });
}) 