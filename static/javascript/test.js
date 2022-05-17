/*
var more  = document.getElementById("more");
var dots = document.getElementById("dots");

function showMore() {
    if (dots.style.display === "block") {
        dots.style.display = "none";
        more.style.display = "block";
    }

    else {
        dots.style.display = "block";
        more.style.display = "none";
    }
} */

let i = 10;

function myFunction() {
  var btn = document.getElementById("mybtn");
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (i > 9) {
    btn.id = "testButton";
    dots.style.display = "inline";
    moreText.style.display = "none";
    i=8;
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    i=11;
    btn.id = "mybtn";
  }
}

 /*  
function change() {
  var i=0;
  var btn = document.getElementById("btn");
  var more = document.getElementById("more");
  var test = document.getElementById("test");
  
  if (!i) {
    more.style.display = "inline";
    test.style.display = "none";
    i=1;
    console.log(i);
  } 
  
  else {
    more.style.display = "none";
    test.style.display = "inline";
    i=0;
  }
}*/
