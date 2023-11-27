function changeThemeMode() {

    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
        
    }
    document.getElementById("toogleMode").classList.toggle("bi-sun-fill");
    document.getElementsByClassName("navbar")[0].classList.toggle("navbar-darkmode");
 }
