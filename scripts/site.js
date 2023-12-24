

function load()
{
    let theme = localStorage.getItem('theme');

    if(theme == null)
        localStorage.setItem('theme', 'light');

    setThemeMode(theme);

}

function setThemeMode(themeAtual) {

    if (themeAtual == 'dark')
        darkMode();
    else
        lightMode();

}

function changeThemeMode() {

    let themeAtual = localStorage.getItem('theme');

    if (themeAtual == 'dark')
        lightMode();
    else
        darkMode();

}

function darkMode() {

    document.documentElement.setAttribute('data-bs-theme','dark')
    document.getElementById('toogleMode').classList.add('bi-sun-fill');
    document.getElementsByClassName('navbar')[0].classList.add('navbar-darkmode');
    document.getElementsByTagName('footer')[0].classList.add('footer-darkmode');

    for (const element of document.getElementsByClassName("imgFooter")){
        element.classList.add("imgFooter-darkmode");
    }

    if(document.getElementById("imgProfile") != null)
        document.getElementById("imgProfile").classList.add("img-profile-dark");


    //Skills
    if(document.getElementById("express") != null)
        document.getElementById('express').setAttribute('src', './img/skill/backend/express-dark.svg');

    if(document.getElementById("sqlserver") != null)
        document.getElementById('sqlserver').setAttribute('src', './img/skill/database/sql-server-dark.svg');


    localStorage.setItem('theme', 'dark');
}

function lightMode() {

    document.documentElement.setAttribute('data-bs-theme','light')
    document.getElementById('toogleMode').classList.remove('bi-sun-fill');
    document.getElementsByClassName('navbar')[0].classList.remove('navbar-darkmode');
    document.getElementsByTagName('footer')[0].classList.remove('footer-darkmode');

    for (const element of document.getElementsByClassName("imgFooter")){
        element.classList.remove("imgFooter-darkmode");
    }

    if(document.getElementById("imgProfile") != null)
        document.getElementById("imgProfile").classList.remove("img-profile-dark");

    //Skills
    if(document.getElementById("express") != null)
        document.getElementById('express').setAttribute('src', './img/skill/backend/express.svg');

    if(document.getElementById("sqlserver") != null)
        document.getElementById('sqlserver').setAttribute('src', './img/skill/database/sql-server.svg');

    localStorage.setItem('theme', 'light');
}