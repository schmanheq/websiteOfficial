
var more  = document.getElementById("more");
var dots = document.getElementById("dots");

function change() {
    if (dots.style.display === "block") {
        dots.style.display = "none";
        more.style.display = "block";
    }

    else {
        dots.style.display = "block";
        more.style.display = "none";
    }
}