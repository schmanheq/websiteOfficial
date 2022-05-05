function showMore() {
    var moreText = document.getElementById("showmore1");
    var Btn = document.getElementById("showMoreBtn");
    var showmoreSpan = document.getElementById("showmoreSpan");
    var arrow = document.getElementById("arrow2")

    if (arrow.style.transform = "rotate(90deg)") {
        moreText.style.display = "none";
    }

    else {
        moreText.style.display = "inline";
        arrow.style.transform = "rotate(90deg)";
    }
}