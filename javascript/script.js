function ouvrirNav() {
    document.getElementById("navOpen").style.width = "280px";
    document.getElementById("main").style.marginLeft = "280px";
    document.getElementById("main").style.transition = "1s";

}

function closeNav() {
    document.getElementById("navOpen").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}