function changeThemeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("toogleMode").classList.toggle('bi-sun-fill');
    document.getElementById("toogleMode").classList.toggle('themeModeIconDark');

 }