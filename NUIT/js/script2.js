var ist = document.getElementById("ist");
var fete = document.getElementById("fete");
var nurse = document.getElementById("nurse");
var couple = document.getElementById("couple");
var personne = document.getElementById("personne");
var ist2 = document.getElementById("ist2");
var btn = document.getElementById("btn-play");
var span = document.getElementById("span");
var screen = document.getElementById("screen-load");

btn.addEventListener('click', ()=>{
    span.style.visibility = 'hidden';
    btn.style.visibility = 'hidden';
    screen.style.visibility = 'hidden';
});

ist.addEventListener('click', ()=>{

});

fete.addEventListener('click', ()=>{
    window.open('jeu/code_soiree/main.html', '_blank');
});

nurse.addEventListener('click', ()=>{

});

personne.addEventListener('click', ()=>{

});

couple.addEventListener('click', ()=>{
    window.open('jeu/code/main.html', '_blank');
});
