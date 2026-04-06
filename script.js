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
        desc: 'A BemLar nasceu da observação do cotidiano da minha mãe e de tantas outras mulheres ao meu redor que dedicam suas vidas ao trabalho doméstico. Decidi unir minha vivência pessoal às minhas habilidades de UI/UX para criar mais que um app: uma plataforma que valoriza essas profissionais. Com um design acolhedor e um fluxo de contratação simplificado, o foco é oferecer uma experiência eficiente, segura e, acima de tudo, humana para quem contrata e para quem presta o serviço.',
        role: 'Minha atuação na BemLar uniu pesquisa e execução. Como UX Researcher, realizei um Benchmarking profundo para entender o mercado de diaristas no Brasil e identificar lacunas em plataformas existentes. Como UX/UI Designer, projetei uma solução focada na realidade dessas profissionais, priorizando uma interface Mobile-First. O resultado é uma navegação fluida e acessível, garantindo que a tecnologia seja uma aliada simples e eficiente no dia a dia do usuário.',
        situation: 'Atualmente desenvolvendo os protótipos de alta fidelidade implementando responsividade e auto-layout.',
        techs: ['Figma', 'UI Design', 'UX Research', 'Prototipação', 'Notion'],
        link: 'https://www.figma.com/design/woCzpfIru8pB5rW3lDHcm9/E--TICKET?node-id=0-1',
        linkText: 'Ver Protótipo no Figma',
        notionLink: 'https://www.notion.so/Bemlar-309743033bb680d6a74de850882c672a' // Adicionado aqui!
    },
    agrirs: {
        title: 'AgriRs',
        images: [
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/AgriRs.png',

        ],
        tags: [{ label: 'Front-end', cls: '' }, { label: 'Scrum Master', cls: 'yellow' }],
        desc: 'O AgriRs é um portal institucional desenvolvido para o laboratório de pesquisas agrícolas do INPE. O desafio era criar uma plataforma que centralizasse dados científicos e informações sobre o laboratório de forma profissional e acessível, servindo como a principal vitrine digital para pesquisadores e parceiros.',
        role: 'Atuei com uma responsabilidade dupla: como Scrum Master, liderei a equipe na organização das sprints e cerimônias, garantindo que as entregas estivessem alinhadas às expectativas dos stakeholders. No design, fui responsável por transformar os requisitos técnicos em uma interface limpa e organizada, cuidando do protótipo no Figma e auxiliando na implementação Front-end (HTML/CSS/JS) para garantir a fidelidade visual.',
        situation: 'Projeto entregue e em breve disponível para acesso público. 🌟',
        techs: ['HTML', 'CSS', 'JavaScript', 'Scrum', 'Git'],
        link: 'https://github.com/404NotFound-ABP/AgriRSLAB_Portal.git',
        linkText: 'Ver Código no GitHub'
    },
    aluramed: {
        title: 'AluraMed',
        images: [
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/AluraMED.png',
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/persona.png',
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/double_diamond.png'
        ],
        tags: [{ label: 'UX Research', cls: '' }, { label: 'Figma', cls: 'green' }],
        desc: 'O AluraMed é uma solução de telemedicina projetada para simplificar a conexão entre médicos e pacientes. O projeto foca em remover as barreiras tecnológicas do atendimento remoto, priorizando a acessibilidade e a confiança durante a jornada de agendamento e consulta online.',
        role: 'Minha atuação foi focada em UX Research e estratégia. Conduzi um Benchmarking comparativo e utilizei o Mapeamento da Jornada do Usuário para identificar pontos de atrito no fluxo de agendamento. Com base nos dados coletados, propus funcionalidades que reduzem a carga cognitiva do usuário, como a organização clara de prontuários e históricos. Toda a documentação estratégica foi estruturada no Notion para guiar o design de alta fidelidade.',
        situation: 'Projeto entregue com protótipos de alta fidelidade disponíveis. 🌟',
        techs: ['Figma', 'UX Research', 'Jornada do Usuário'],
        link: 'https://www.figma.com/board/BL9qfcUznNXiTXNXN1VrHd?node-id=0-1',
        linkText: 'Ver Protótipo no Figma'
    },
    eticket: {
        title: 'E-Ticket',
        images: [
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/REI LEAO.svg',
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/Home.svg',
        ],
        tags: [{ label: 'UI Design', cls: '' }, { label: 'Figma', cls: 'green' }],
        desc: 'O E-Ticket é um aplicativo focado na venda e gestão de ingressos para eventos. O objetivo principal era criar um fluxo de compra extremamente rápido e visualmente atraente, capaz de suportar grandes volumes de informações (como datas, setores e preços) sem confundir o usuário.',
        role: 'Como UI Designer, foquei na criação de um Design System escalável, utilizando componentes atômicos e Auto-layout no Figma para garantir consistência em todas as telas. Desenvolvi um fluxo de checkout focado em Mobile-first, otimizando a hierarquia visual para que as informações mais importantes (preço e confirmação) estivessem sempre em destaque. O resultado é uma interface moderna, vibrante e focada em conversão.',
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
            // 1. Criamos um container individual para cada imagem
            const imgContainer = document.createElement('div');
            imgContainer.className = 'carousel-item-wrapper'; // Classe para o CSS

            // 2. Criamos a imagem
            const img = document.createElement('img');
            img.src = src;
            
            // 3. Montamos a estrutura: imagem dentro da div, div dentro do track
            imgContainer.appendChild(img);
            track.appendChild(imgContainer);
            
            // 4. Criamos os indicadores (dots) - permanece igual
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