var ist = document.getElementById("ist");
var fete = document.getElementById("fete");
var nurse = document.getElementById("nurse");
var couple = document.getElementById("couple");
var personne = document.getElementById("personne");
var ist2 = document.getElementById("ist2");

ist.addEventListener('click', ()=>{
    fete.style.visibility = 'hidden';
    nurse.style.visibility = 'hidden';
    couple.style.visibility = 'hidden';
    personne.style.visibility = 'hidden'; 
    ist.style.transitionDuration = '500ms';
    ist.style.transform = 'translateX(400px) translateY(200px)';
    ist.style.backgroundColor = '#FFE3E1';
    ist.style.height = '500px';
    ist.style.hidden = 'hidden';
});

fete.addEventListener('click', ()=>{
    ist.style.visibility = 'hidden';
    nurse.style.visibility = 'hidden';
    couple.style.visibility = 'hidden';
    personne.style.visibility = 'hidden'; 
    fete.style.transitionDuration = '500ms';
    fete.style.transform = 'translateX(400px) translateY(-200px)';
    fete.style.backgroundColor = '#FFE3E1';
    fete.style.height = '500px';
    fete.style.hidden = 'hidden';
});

nurse.addEventListener('click', ()=>{
    ist.style.visibility = 'hidden';
    fete.style.visibility = 'hidden';
    couple.style.visibility = 'hidden';
    personne.style.visibility = 'hidden'; 
    nurse.style.transitionDuration = '500ms';
    nurse.style.transform = 'translateX(-400px) translateY(200px)';
    nurse.style.backgroundColor = '#FFE3E1';
    nurse.style.height = '500px';
    nurse.style.hidden = 'hidden';
});

personne.addEventListener('click', ()=>{
    ist.style.visibility = 'hidden';
    fete.style.visibility = 'hidden';
    couple.style.visibility = 'hidden';
    nurse.style.visibility = 'hidden'; 
    personne.style.transitionDuration = '500ms';
    personne.style.transform = 'translateX(-400px) translateY(-200px)';
    personne.style.backgroundColor = '#FFE3E1';
    personne.style.height = '500px';
    personne.style.hidden = 'hidden';
});

couple.addEventListener('click', ()=>{
    ist.style.visibility = 'hidden';
    fete.style.visibility = 'hidden';
    personne.style.visibility = 'hidden';
    nurse.style.visibility = 'hidden'; 
    couple.style.transitionDuration = '500ms';
    couple.style.backgroundColor = '#FFE3E1';
    couple.style.height = '500px';
    couple.style.hidden = 'hidden';
    window.location = 'jeu/code/main.html';
});
