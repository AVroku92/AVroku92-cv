
function left() {
    console.log("hello");
    var element = document.querySelector('.slide');
    var width = document.querySelector('.slide').offsetWidth;
    element.style.transform = "translateX(-"+ 400 +"px)";
}