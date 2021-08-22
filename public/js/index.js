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
