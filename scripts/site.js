function changeThemeMode() {

    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
        
    }
    document.getElementById("toogleMode").classList.toggle("bi-sun-fill");
    document.getElementsByClassName("navbar")[0].classList.toggle("navbar-darkmode");
    document.getElementsByTagName("footer")[0].classList.toggle("footer-darkmode");
    document.getElementById("imgProfile").classList.toggle("img-profile-dark");

    for (const element of document.getElementsByClassName("imgFooter")){
        element.classList.toggle("imgFooter-darkmode");
     }
    
}

