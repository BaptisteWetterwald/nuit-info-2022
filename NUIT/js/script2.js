var ist = document.getElementById("ist");
var fete = document.getElementById("fete");
var nurse = document.getElementById("nurse");
var couple = document.getElementById("couple");
var personne = document.getElementById("personne");
var ist2 = document.getElementById("ist2");
var btn = document.getElementById("btn-play");
var span = document.getElementById("span");
var span2 = document.getElementById("span2");
var screen = document.getElementById("screen-load");

btn.addEventListener('click', ()=>{
    span.style.visibility = 'hidden';
    span2.style.visibility = 'hidden';
    btn.style.visibility = 'hidden';
    screen.style.visibility = 'hidden';
});

ist.addEventListener('click', ()=>{
    window.open('jeu/code_IST/main.html', '_blank');
});

fete.addEventListener('click', ()=>{
    window.open('jeu/code_soiree/main.html', '_blank');
});

nurse.addEventListener('click', ()=>{
    window.open('jeu/code_avortement/main.html', '_blank');
});

personne.addEventListener('click', ()=>{
    window.open('jeu/code_parent1/main.html', '_blank');
});

couple.addEventListener('click', ()=>{
    window.open('jeu/code_couple/main.html', '_blank');
});
