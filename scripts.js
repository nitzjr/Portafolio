let showmenu = false;
function show_hide_menu() {
    if (showmenu) {
        document.getElementById("menu").classList = "";
        showmenu = false;
    } else {
        document.getElementById("menu").classList = "responsive";
        showmenu = true;
    }
}

function select() {
    document.getElementById("menu").classList = "";
    showmenu = false;
}

function skills_efect() {
    var skills = document.getElementById("skills");
    var skills_distance = window.innerHeight - skills.getBoundingClientRect().top;
    if (skills_distance >= 300) {
        let abilities = document.getElementsByClassName("progress");
        abilities[0].classList.add("htmlcss");
        abilities[1].classList.add("javascript");
        abilities[2].classList.add("python");
        abilities[3].classList.add("java");
        abilities[4].classList.add("idiomas");
        abilities[5].classList.add("trabajoenequipo");
        abilities[6].classList.add("comunicacion");
        abilities[7].classList.add("adaptabilidad");
        abilities[8].classList.add("creatividad");
        abilities[9].classList.add("dedicacion");
    }
}

window.onscroll = function() {
    skills_efect();
}