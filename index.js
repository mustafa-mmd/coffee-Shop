


            let menuToggle = document.getElementById("toggleMenu");
            let iconChange = document.getElementById("menu");
            let toggleMode = 'on';
    
            function toggleMenu() {
    
                if (toggleMode == 'off') {
                    menuToggle.style.display = "none";
                    toggleMode = 'on';
                    iconChange.name = 'menu-outline';
                }
                else if (toggleMode == 'on') {
                    menuToggle.style.display = "block";
                    toggleMode = 'off';
                    iconChange.name = 'close-outline';
                }
            }
        