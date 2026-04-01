/* -----------------------------------------------------------
   1. CONFIGURAÇÃO DOS PROJETOS (DADOS)
----------------------------------------------------------- */
const projects = {
    bemlar: {
        title: 'Bem Lar',
        images: [
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/BemLAR.png',
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/DASHBOARD.png',
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/FINANÇAS.png',
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/persona_bemlar.png'
        ],
        tags: [{ label: 'UI/UX', cls: '' }, { label: 'Figma', cls: 'green' }],
        desc: 'A BemLar nasceu da observação do cotidiano da minha mãe e de tantas outras mulheres ao meu redor que dedicam suas vidas ao trabalho doméstico...',
        role: 'Minha atuação na BemLar uniu pesquisa e execução. Como UX Researcher, realizei um Benchmarking profundo...',
        situation: 'Atualmente desenvolvendo os protótipos de alta fidelidade implementando responsividade e auto-layout.',
        techs: ['Figma', 'UI Design', 'UX Research', 'Prototipação', 'Notion'],
        link: 'https://www.figma.com/design/woCzpfIru8pB5rW3lDHcm9/E--TICKET?node-id=0-1',
        linkText: 'Ver Protótipo no Figma',
        notionLink: 'https://www.notion.so/Bemlar-309743033bb680d6a74de850882c672a' // Adicionado aqui!
    },
    agrirs: {
        title: 'AgriRs',
        images: ['https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/AgriRs.png'],
        tags: [{ label: 'Front-end', cls: '' }, { label: 'Scrum Master', cls: 'yellow' }],
        desc: 'Site institucional desenvolvido para o laboratório AgriRs dentro do INPE.',
        role: 'Assumi o papel de Scrum Master e contribuí no desenvolvimento front-end e UI/UX Design.',
        situation: 'Projeto entregue e em breve disponível para acesso público. 🌟',
        techs: ['HTML', 'CSS', 'JavaScript', 'Scrum', 'Git'],
        link: 'https://github.com/404NotFound-ABP/AgriRSLAB_Portal.git',
        linkText: 'Ver Código no GitHub'
    },
    aluramed: {
        title: 'AluraMed',
        images: ['https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/AluraMED.png'],
        tags: [{ label: 'UX Research', cls: '' }, { label: 'Figma', cls: 'green' }],
        desc: 'Produto de telemedicina focado em consultas online. Atuei identificando melhorias essenciais.',
        role: 'Conduzi pesquisas com usuários e mapeamento de jornada para o agendamento.',
        situation: 'Projeto entregue com protótipos de alta fidelidade disponíveis. 🌟',
        techs: ['Figma', 'UX Research', 'Jornada do Usuário'],
        link: 'https://www.figma.com/board/BL9qfcUznNXiTXNXN1VrHd?node-id=0-1',
        linkText: 'Ver Protótipo no Figma'
    },
    eticket: {
        title: 'E-Ticket',
        tags: [{ label: 'UI Design', cls: '' }, { label: 'Figma', cls: 'green' }],
        desc: 'App de venda de ingressos para shows e eventos.',
        role: 'Responsável pelo Design System, componentes e fluxo mobile-first.',
        situation: 'Projeto em desenvolvimento, protótipos disponíveis.',
        techs: ['Figma', 'UI Design', 'Prototipação', 'Mobile First'],
        link: 'https://www.figma.com/design/woCzpfIru8pB5rW3lDHcm9/E--TICKET?node-id=0-1',
        linkText: 'Ver Protótipo no Figma'
    }
};

/* -----------------------------------------------------------
   2. NAVEGAÇÃO E MENU
----------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a[href^="#"], .nav-mobile-menu a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = document.getElementById(this.getAttribute('href').substring(1));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                closeMenu();
            }
        });
    });
});

function toggleMenu() {
    document.getElementById('mobile-menu').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open');
}

function closeMenu() {
    document.getElementById('mobile-menu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
}

/* -----------------------------------------------------------
   3. MODAL DE PROJETOS
----------------------------------------------------------- */
function openProject(id) {
    const p = projects[id];
    if (!p) return;

    // Elementos do Modal
    const track = document.getElementById('proj-modal-carousel');
    const indicators = document.getElementById('carousel-indicators');
    const titleEl = document.getElementById('proj-modal-title');
    const descEl = document.getElementById('proj-modal-desc');
    const roleEl = document.getElementById('proj-modal-role');
    const situationEl = document.getElementById('proj-modal-situation');
    const notionBtn = document.getElementById('proj-modal-notion');
    const btnLink = document.getElementById('proj-modal-link');

    // 1. Limpar e carregar carrossel
    track.innerHTML = '';
    indicators.innerHTML = '';
    if (p.images && Array.isArray(p.images)) {
        p.images.forEach((src, idx) => {
            const img = document.createElement('img');
            img.src = src;
            track.appendChild(img);
            
            const dot = document.createElement('div');
            dot.className = `dot ${idx === 0 ? 'active' : ''}`;
            indicators.appendChild(dot);
        });
    }

    // 2. Preencher Textos
    if (titleEl) titleEl.textContent = p.title;
    if (descEl) descEl.textContent = p.desc || "Descrição não disponível.";
    if (roleEl) roleEl.textContent = p.role;
    if (situationEl) situationEl.textContent = p.situation || "Status não informado";

    // 3. Lógica do Botão do Notion
    if (notionBtn) {
        if (p.notionLink) {
            notionBtn.href = p.notionLink;
            notionBtn.style.display = 'flex';
        } else {
            notionBtn.style.display = 'none';
        }
    }

    // 4. Lógica do Botão Principal (Figma vs GitHub)
    if (btnLink) {
        btnLink.href = p.link;
        btnLink.textContent = p.linkText || 'Ver Projeto ↗';
        
        // Estilização dinâmica baseada no link
        if (p.link.includes('github.com')) {
            btnLink.style.backgroundColor = '#24292e'; // Preto GitHub
        } else if (p.link.includes('figma.com')) {
            btnLink.style.backgroundColor = '#F24E1E'; // Laranja Figma
        } else {
            btnLink.style.backgroundColor = 'var(--blue)';
        }
    }

    // 5. Tags e Tecnologias
    const tagsEl = document.getElementById('proj-modal-tags');
    const techsEl = document.getElementById('proj-modal-techs');
    if (tagsEl) tagsEl.innerHTML = p.tags.map(t => `<span class="project-tag ${t.cls}">${t.label}</span>`).join('');
    if (techsEl) techsEl.innerHTML = p.techs.map(t => `<span class="proj-modal-tech">${t}</span>`).join('');

    // 6. Exibir Modal
    track.scrollLeft = 0;
    document.getElementById('proj-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProjModal(e) {
    // Fecha apenas se clicar no fundo (overlay) ou se a função for chamada diretamente
    if (!e || e.target.id === 'proj-overlay') {
        document.getElementById('proj-overlay').classList.remove('open');
        document.body.style.overflow = '';
    }
}

/* -----------------------------------------------------------
   4. CARROSSEL (LOGICA DE MOVIMENTO)
----------------------------------------------------------- */
function moveCarousel(direction) {
    const track = document.getElementById('proj-modal-carousel');
    track.scrollLeft += (direction * track.offsetWidth);
    setTimeout(updateDots, 300);
}

function updateDots() {
    const track = document.getElementById('proj-modal-carousel');
    const index = Math.round(track.scrollLeft / track.offsetWidth);
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

/* -----------------------------------------------------------
   5. IDIOMA (SISTEMA DE TRADUÇÃO)
----------------------------------------------------------- */
let currentLang = 'pt';
function toggleLang() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    const label = document.getElementById('lang-label');
    const flag = document.querySelector('.lang-flag');
    
    flag.textContent = currentLang === 'en' ? '🇧🇷' : '🇺🇸';
    label.textContent = currentLang === 'en' ? 'PT' : 'EN';
    
    document.querySelectorAll('[data-pt]').forEach(el => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (text) el.innerHTML = text;
    });
}