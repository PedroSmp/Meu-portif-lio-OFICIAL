document.addEventListener('DOMContentLoaded', function() {

    const links = document.querySelectorAll('.nav-link'); // Seleciona os elementos que tem a classe 'nav-link'

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link

            const id = this.getAttribute('href').substring(1); // Obtém o ID do destino do link
            const alvo = document.getElementById(id); // Seleciona o elemento alvo pelo ID

            if (alvo) {
                alvo.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até o elemento alvo
            }
        })
    });
});