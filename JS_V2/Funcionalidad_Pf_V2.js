
document.getElementById("Inf_Per").onclick = function (){
    document.getElementById("InfPer").scrollIntoView();
}
document.getElementById("Educ_").onclick = function (){
    document.getElementById("Educ").scrollIntoView();
}
document.getElementById("Cursos_").onclick = function (){
    document.getElementById("Cursos").scrollIntoView();
}
document.getElementById("Exp_Lab").onclick = function (){
    document.getElementById("ExpLab").scrollIntoView();
}

let volver = document.getElementById("volver");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        volver.style.display = "block";
    } else {
        volver.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }