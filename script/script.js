window.onload = function () {
    var backgroundImg = ["./wallpaper1.jpg", "./wallpaper2.jpg"]

    setInterval(changeImage, 10000);
    function changeImage() {
        var i = Math.floor((Math.random() * 2));

        document.body.style.backgroundImage = "url('" + backgroundImg[i] + "')";

    }
}

function openMenu() {
    document.getElementById('container').style.right = '0%';
    document.getElementById('menu').style.opacity = '1';
    document.getElementById('container').style.display = 'block';
    document.getElementById('main').style.opacity = '0'

    const sobre = document.getElementById('body')
    sobre.remove()

    const menu = document.getElementById('containerProjetos')
    menu.remove()

    const hamburger = document.getElementById('hamburger')
    hamburger.remove()

}
function closeMenu() {
    document.getElementById('container').style.right = '-100%';
    document.getElementById('menu').style.opacity = '0';
    document.getElementById('container').style.display = 'none';
    window.location.reload();
}

function GitHub() {
    window.open('https://github.com/Bruskyy');
}

function WhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=5511948123807&text=Ol%C3%A1,%20dei%20uma%20olhada%20no%20seu%20portf%C3%B3lio%20e%20quero%20entrar%20em%20contato!')
}

function Linkedin() {
    window.open('https://www.linkedin.com/in/vitor-bruschi/')
}

const astra = () => {
    window.open('https://translate.google.com/?hl=pt&sl=la&tl=pt&text=per%20aspera%20ad%20astra&op=translate')
}

function Reset() {
    window.location.href = './main.html'
}


function BaixarCV() {
    window.location.href = './assets/CV/Vitor Bruschi Currículo Fullstack.pdf'
}

function Projeto1(){
    window.open('https://www.mktabacaria.com.br')
}