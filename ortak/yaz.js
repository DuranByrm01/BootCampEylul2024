document.body.style.backgroundColor = "black";
document.body.style.color = "white";
document.body.style.fontSize = "3rem";

function yaz (html = ""){
    document.body.innerHTML += html + "<br>";
};

function ciz(html = "") {
    document.body.innerHTML += html + "<hr>";
}