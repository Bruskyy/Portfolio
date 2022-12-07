// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var nav = document.getElementsByTagName('nav');

// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
} 

function linkButtonwp(){
    window.open('https://contate.me/vitor-bruschi-wp', '_blank');
}

function linkButtonlk(){
    window.open('https://www.linkedin.com/in/vitor-bruschi/', '_blank')
}

function linkButtongit(){
    window.open('https://github.com/Bruskyy', '_blank')
}

function subtitleButton() {
    window.open('https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/a-traducao-de-per-aspera-ad-astra/14360', '_blank')
}
