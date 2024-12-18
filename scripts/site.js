
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
    {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.setItem('theme', 'dark');
            theme = 'dark';
        }
        else
        {
            localStorage.setItem('theme', 'light');
            theme = 'light';
        }
    }

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
    document.getElementById('toogleMode').classList.add('themeModeIconDark');
    document.getElementsByClassName('navbar')[0].classList.add('navbar-darkmode');
    document.getElementsByTagName('footer')[0].classList.add('footer-darkmode');

    for (const element of document.getElementsByClassName("imgFooter")){
        element.classList.add("imgFooter-darkmode");
    }

    //home
    if(document.getElementById("qrcode-en-resume") != null)
        document.getElementById('qrcode-en-resume').setAttribute('src', '../img/qrcode/qrcode-en-dark.png');
        
    if(document.getElementById("qrcode-pt-resume") != null)
        document.getElementById('qrcode-pt-resume').setAttribute('src', '../img/qrcode/qrcode-pt-dark.png');


    if(document.getElementById("linkCurriculum") != null)
        document.getElementById("linkCurriculum").classList.add("home-link-dark");

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
    document.getElementById('toogleMode').classList.remove('themeModeIconDark');
    document.getElementsByClassName('navbar')[0].classList.remove('navbar-darkmode');
    document.getElementsByTagName('footer')[0].classList.remove('footer-darkmode');

    for (const element of document.getElementsByClassName("imgFooter")){
        element.classList.remove("imgFooter-darkmode");
    }

    //home
    if(document.getElementById("qrcode-en-resume") != null)
        document.getElementById('qrcode-en-resume').setAttribute('src', '../img/qrcode/qrcode-en.png');
        
    if(document.getElementById("qrcode-pt-resume") != null)
        document.getElementById('qrcode-pt-resume').setAttribute('src', '../img/qrcode/qrcode-pt.png');

    if(document.getElementById("linkCurriculum") != null)
        document.getElementById("linkCurriculum").classList.remove("home-link-dark");

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


//Carousel
const carousel = document.getElementById('imgProfile');

let currentIndex = 1;
const totalImages = 3;
const swapInterval = 5000;

function updateCarousel(currentIndex) {

    if (carousel) {
        carousel.classList.add('hidden');
        
        setTimeout(() => {
            carousel.setAttribute('src', `../img/profile${currentIndex}.jpeg`);
            carousel.classList.remove('hidden');
        }, 1000);
    }
}

let autoSwap = setInterval(() => {
    currentIndex = (currentIndex < totalImages) ? currentIndex + 1 : 1;
    updateCarousel(currentIndex);
}, swapInterval);

