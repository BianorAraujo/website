
function start()
{
    var lang = navigator.language;
    var currentLocation = window.location.href;

    if (lang == 'pt-BR')
        currentLocation = currentLocation + "pt/index.html";
    else
        currentLocation = currentLocation + "en/index.html";

    window.location.href = currentLocation;

}


function load()
{
    let theme = localStorage.getItem('theme');

    if(theme == null)
        localStorage.setItem('theme', 'light');

    setThemeMode(theme);

    createSelectFlag();

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

    //aboutme
    if(document.getElementById("imgProfile") != null)
        document.getElementById("imgProfile").classList.add("img-profile-dark");


    //skills
    if(document.getElementById("express") != null)
        document.getElementById('express').setAttribute('src', '../img/skill/backend/express-dark.svg');

    if(document.getElementById("github") != null)
        document.getElementById('github').setAttribute('src', '../img/skill/github-dark.svg');
    
    //projects
    if(document.getElementById("div-projects") != null){
        for (const element of document.getElementsByClassName("img-projects")){
            element.classList.add("img-projects-dark");
        }
    }

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

    //aboutme
    if(document.getElementById("imgProfile") != null)
        document.getElementById("imgProfile").classList.remove("img-profile-dark");

    //skills
    if(document.getElementById("express") != null)
        document.getElementById('express').setAttribute('src', '../img/skill/backend/express.svg');

    if(document.getElementById("github") != null)
        document.getElementById('github').setAttribute('src', '../img/skill/github.svg');

    //projects
    if(document.getElementById("div-projects") != null){
        for (const element of document.getElementsByClassName("img-projects")){
            element.classList.remove("img-projects-dark");
        }
    }

    localStorage.setItem('theme', 'light');
}

function changeLanguage(lang){
    var currentLocation = window.location.href;

    if (lang == 'pt')
        currentLocation = currentLocation.replace('/en/', '/pt/');
    else if (lang == 'en')
        currentLocation = currentLocation.replace('/pt/', '/en/');

    window.location.href = currentLocation;
}

function createSelectFlag(){

    document.getElementById('selectedFlag').addEventListener('click', function() {
        showOptions();
    });

    document.getElementById('gb-flag').addEventListener('click', function() {
        changeLanguage('en');
    });

    document.getElementById('br-flag').addEventListener('click', function() {
        changeLanguage('pt');
    });
}

function showOptions() {

    var currentLocation = window.location.href;
    
    if(currentLocation.includes('/pt/'))
        document.getElementById("gb-flag").classList.toggle("show-options");
    else
        document.getElementById("br-flag").classList.toggle("show-options");
}