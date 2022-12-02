var btn = document.getElementById("play");
var perso = document.getElementById("perso");
var retour = document.getElementById("return");
var fond = document.getElementById("image-fond");
var all = document.getElementById("header");
var perso1 = document.getElementById("perso1");
var perso2 = document.getElementById("perso2");

btn.addEventListener('click', ()=>{
    btn.style.transform = 'translateY(200px)';
    setTimeout(visible, 250);
});

perso1.addEventListener('click', ()=>{
    btn.style.transition = 'none';
    all.style.visibility = 'hidden';
    perso.style.visibility = 'hidden';
    fond.style.filter = 'none';
    window.location = 'jeu.html';
});

perso2.addEventListener('click', ()=>{
    btn.style.transition = 'none';
    all.style.visibility = 'hidden';
    perso.style.visibility = 'hidden';
    fond.style.filter = 'none';
    window.location = 'jeu.html';
});

retour.addEventListener('click', ()=>{
    perso.style.visibility = 'hidden';
    btn.style.transform = 'translateY(0px)';
})

function visible(){
    perso.style.visibility = 'visible'
}

