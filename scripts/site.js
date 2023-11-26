function changeThemeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("toogleMode").classList.toggle("bi-sun-fill");
    document.getElementById("toogleMode").classList.toggle("themeModeIconDark");
    navbarDarkMode(element);
 }


 function navbarDarkMode(element) {
    element.getElementsByClassName("navbar")[0].classList.toggle("dark-mode");
    element.getElementsByClassName("navbar-brand")[0].classList.toggle("dark-mode");
    element.getElementsByClassName("navbar-toggler")[0].classList.toggle("dark-mode");
    
    var listItem = element.getElementsByClassName("nav-link");
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].classList.toggle("dark-mode");
    }
    
 }