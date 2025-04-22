const answer = document.getElementById('answer');

document.getElementById("yes").addEventListener("click", function() {
    answer.innerHTML = 'PARTY DIE POG FÄLLT AUS!!!'; 
});
document.getElementById("no").addEventListener("click", function() {
    answer.innerHTML = 'Ich glaube du musst dich mal besser Informieren... Versuch nochmal!!'; 
});
document.getElementById("maybe").addEventListener("click", function() {
    answer.innerHTML = 'Mit vielleicht kann niemand was anfangen... Versuch nochmal!!'; 
});




