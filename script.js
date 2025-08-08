// Scroll suave para as seções ao clicar nos botões do menu
document.getElementById('btn-projetos').addEventListener('click', function() {
    document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btn-sobre').addEventListener('click', function() {
    document.getElementById('sobre-mim').scrollIntoView({ behavior: 'smooth' });
});

// Seção "Minha experiência" e "Contato" só se existirem no HTML
if (document.getElementById('btn-experiencia') && document.getElementById('minhas-habilidades')) {
    document.getElementById('btn-experiencia').addEventListener('click', function() {
        document.getElementById('minhas-habilidades').scrollIntoView({ behavior: 'smooth' });
    });
}
if (document.getElementById('btn-contato') && document.getElementById('contato')) {
    document.getElementById('btn-contato').addEventListener('click', function() {
        document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
    });
}

// Botão para voltar ao topo
const btnTopo = document.getElementById('btn-topo');
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});
btnTopo.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('modo');
    const body = document.body;

    // Função para aplicar o tema salvo ou padrão
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    // Aplica o tema ao carregar a página
    applySavedTheme();

    // Adiciona o evento de clique ao botão
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode'); // Adiciona/remove a classe 'dark-mode'
        
        // Salva a preferência do usuário no armazenamento local
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Ativa modo escuro para landing page
    const modoLanding = document.querySelector('.modo-escuro-');
    if (modoLanding) {
        modoLanding.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            // Salva preferência
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
        // Aplica tema salvo ao carregar
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
});