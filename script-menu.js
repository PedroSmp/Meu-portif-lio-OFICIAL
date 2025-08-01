// Menu hamburguer para mobile
// Exibe/oculta o menu lateral e overlay

document.addEventListener('DOMContentLoaded', function() {
    const btnHamburguer = document.getElementById('menu-hamburguer');
    const nav = document.getElementById('barra-nav');
    let overlay = document.getElementById('overlay-menu');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'overlay-menu';
        document.body.appendChild(overlay);
    }
    function abrirMenu() {
        nav.classList.add('menu-aberto');
        overlay.classList.add('ativo');
    }
    function fecharMenu() {
        nav.classList.remove('menu-aberto');
        overlay.classList.remove('ativo');
    }
    btnHamburguer.addEventListener('click', abrirMenu);
    overlay.addEventListener('click', fecharMenu);
    // Fecha o menu ao clicar em qualquer item do menu
    nav.querySelectorAll('.menu, .menu-contato').forEach(btn => {
        btn.addEventListener('click', fecharMenu);
    });
    // Fecha o menu ao redimensionar para desktop
    window.addEventListener('resize', function() {
        if(window.innerWidth > 412) fecharMenu();
    });
});
