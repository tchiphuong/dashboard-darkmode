$(document).ready(function () {
    $('input[type="file"]').change(function (e) {
        if (e.target.accept == "image/*") {
            $('label[for="' + e.target.id + '"] .file-review').append(`
                <img class="" src="https://picsum.photos/200/300?random=`+ parseInt(Math.random() * 100) + `" alt="` + e.target.files[0].name + `">
            `);
        }
        console.log(e.target.files)
    });
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

window.onload = init;
document.querySelector(".nav-toggle").addEventListener('click', function() {
    let result = document.querySelector(".menu-mobile").classList.toggle("menu-toggle");
    resetSubmenus();
});

document.querySelector(".nav-close").addEventListener('click', function() {
    let result = document.querySelector(".menu-mobile").classList.toggle("menu-toggle");
});

document.querySelector(".profile").addEventListener('click', function() {
    let result = document.querySelector(".profile-dropdown").classList.toggle("dropdown");
    resetSubmenus();
});

function init() {
    // set-up regular buttons
    var menuItemElements = document.querySelectorAll(".menu_list--item");
    for (var i = 0; i < menuItemElements.length; i++) {
        menuItemElements[i].onclick = resetSubmenus;
    }
    // set-up buttons with submenu
    resetSubmenus();
}

function openSubmenu() {
    this.setAttribute('class', 'menu_list--item');
    this.onclick = this.setAttribute('class', 'menu_list--item active');
    this.onclick = function(){
        if(this.classList == "menu_list--item active")
        {
            this.setAttribute('class', 'menu_list--item');
        }
        else{
            this.setAttribute('class', 'menu_list--item active');
        }
    }
}

function resetSubmenus() {
    var submenuElements = document.querySelectorAll(".menu_list--item");
    for (var i = 0; i < submenuElements.length; i++) {
        submenuElements[i].setAttribute('class', 'menu_list--item');
        submenuElements[i].onclick = openSubmenu;
    }
}


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme);
