/* -----------------------------------------------------------
   1. CONFIGURAÇÃO DOS PROJETOS (DADOS)
----------------------------------------------------------- */
const projects = {
    bemlar: {
        title: 'Bem Lar',
        images: [
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/DASHBOARD.png',
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/FINANÇAS.png',
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/persona_bemlar.png',
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/pagina inicial-mobile.png',
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/Agenda.png'
        ],
        tags: [{ label: 'UI/UX', cls: '' }, { label: 'Figma', cls: 'green' }],
        techs: ['Figma', 'UI Design', 'UX Research', 'Prototipação', 'Notion'],
        link: 'https://www.figma.com/design/woCzpfIru8pB5rW3lDHcm9/E--TICKET?node-id=0-1',
        notionLink: 'https://www.notion.so/Bemlar-309743033bb680d6a74de850882c672a',
        
        // Textos em Português
        pt: {
            desc: 'A BemLar nasceu da observação do cotidiano da minha mãe e de tantas outras mulheres ao meu redor que dedicam suas vidas ao trabalho doméstico. Decidi unir minha vivência pessoal às minhas habilidades de UI/UX para criar mais que um app: uma plataforma que valoriza essas profissionais. Com um design acolhedor e um fluxo de contratação simplificado, o foco é oferecer uma experiência eficiente, segura e, acima de tudo, humana.',
            role: 'Minha atuação uniu pesquisa e execução. Como UX Researcher, realizei um Benchmarking profundo para entender o mercado de diaristas e identificar lacunas. Como UI/UX Designer, projetei uma solução Mobile-First focada na acessibilidade, garantindo que a tecnologia seja uma aliada simples no dia a dia.',
            situation: 'Projeto concluído.🌟',
            linkText: 'Ver Protótipo no Figma'
        },

        // Textos em Inglês (Tradução)
        en: {
            desc: 'BemLar was born from observing the daily lives of my mother and many other women who dedicate their lives to domestic work. I combined my personal experience with UI/UX skills to create more than an app: a platform that values these professionals. With a welcoming design and simplified hiring flow, the focus is on providing an efficient, safe, and human experience.',
            role: 'My work combined research and execution. As a UX Researcher, I conducted deep Benchmarking to understand the market and identify gaps. As a UI/UX Designer, I designed a Mobile-First solution focused on accessibility, ensuring technology is a simple ally in daily life.',
            situation: 'Project completed.🌟',
            linkText: 'View Prototype on Figma'
        }
    },
    agrirs: {
        title: 'AgriRs',
        images: [
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/AgriRs.png',
        ],
        tags: [{ label: 'Front-end', cls: '' }, { label: 'Scrum Master', cls: 'yellow' }],
        techs: ['HTML', 'CSS', 'JavaScript', 'Scrum', 'Git'],
        link: 'https://github.com/404NotFound-ABP/AgriRSLAB_Portal.git',
        
        pt: {
            desc: 'O AgriRs é um portal institucional desenvolvido para o laboratório de pesquisas agrícolas do INPE. O desafio era criar uma plataforma que centralizasse dados científicos e informações sobre o laboratório de forma profissional e acessível, servindo como a principal vitrine digital para pesquisadores e parceiros.',
            role: 'Atuei com uma responsabilidade dupla: como Scrum Master, liderei a equipe na organização das sprints e cerimônias, garantindo que as entregas estivessem alinhadas às expectativas dos stakeholders. No design, fui responsável por transformar os requisitos técnicos em uma interface limpa e organizada, cuidando do protótipo no Figma e auxiliando na implementação Front-end (HTML/CSS/JS) para garantir a fidelidade visual.',
            situation: 'Projeto entregue e em breve disponível para acesso público. 🌟',
            linkText: 'Ver Código no GitHub'
        },

        en: {
            desc: 'AgriRs is an institutional portal developed for the INPE agricultural research laboratory. The challenge was to create a platform that centralized scientific data and information about the laboratory in a professional and accessible way, serving as the main digital showcase for researchers and partners.',
            role: 'I acted with a dual responsibility: as a Scrum Master, I led the team in organizing sprints and ceremonies, ensuring deliverables were aligned with stakeholder expectations. In design, I was responsible for transforming technical requirements into a clean and organized interface, taking care of the Figma prototype and assisting in Front-end implementation (HTML/CSS/JS) to ensure visual fidelity.',
            situation: 'Project delivered and soon available for public access. 🌟',
            linkText: 'View Code on GitHub'
        }
    },
    aluramed: {
        title: 'AluraMed',
        images: [
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/AluraMED.png',
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/persona.png',
            'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/double_diamond.png'
        ],
        tags: [{ label: 'UX Research', cls: '' }, { label: 'Figma', cls: 'green' }],
        techs: ['Figma', 'UX Research', 'Jornada do Usuário'],
        link: 'https://www.figma.com/board/BL9qfcUznNXiTXNXN1VrHd?node-id=0-1',
        notionLink:'https://www.notion.so/Aluramed-1ca17d38ce1d813690b9f1a2549840ea',
        
        pt: {
            desc: 'O AluraMed é uma solução de telemedicina projetada para simplificar a conexão entre médicos e pacientes. O projeto foca em remover as barreiras tecnológicas do atendimento remoto, priorizando a acessibilidade e a confiança durante a jornada de agendamento e consulta online.',
            role: 'Minha atuação foi focada em UX Research e estratégia. Conduzi um Benchmarking comparativo e utilizei o Mapeamento da Jornada do Usuário para identificar pontos de atrito no fluxo de agendamento. Com base nos dados coletados, propus funcionalidades que reduzem a carga cognitiva do usuário, como a organização clara de prontuários e históricos. Toda a documentação estratégica foi estruturada no Notion para guiar o design de alta fidelidade.',
            situation: 'Projeto entregue com protótipos de alta fidelidade disponíveis. 🌟',
            linkText: 'Ver Protótipo no Figma'
        },

        en: {
            desc: 'AluraMed is a telemedicine solution designed to simplify the connection between doctors and patients. The project focuses on removing technological barriers from remote care, prioritizing accessibility and trust during the scheduling and online consultation journey.',
            role: 'My role was focused on UX Research and strategy. I conducted comparative Benchmarking and used User Journey Mapping to identify friction points in the scheduling flow. Based on the collected data, I proposed features that reduce the user\'s cognitive load, such as the clear organization of medical records and histories. All strategic documentation was structured in Notion to guide high-fidelity design.',
            situation: 'Project delivered with high-fidelity prototypes available. 🌟',
            linkText: 'View Prototype on Figma'
        }
    },
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
/* -----------------------------------------------------------
   3. MODAL DE PROJETOS (VERSÃO À PROVA DE BALAS)
----------------------------------------------------------- */
function openProject(id) {
    const p = projects[id];
    if (!p) return;

    const lang = currentLang || 'pt';
    const langData = p[lang] || p;

    // Elementos do Modal (O JS vai procurar esses IDs no HTML)
    const track = document.getElementById('proj-modal-carousel');
    const indicators = document.getElementById('carousel-indicators');
    const titleEl = document.getElementById('proj-modal-title');
    const descEl = document.getElementById('proj-modal-desc');
    const roleEl = document.getElementById('proj-modal-role');
    const situationEl = document.getElementById('proj-modal-situation');
    const notionBtn = document.getElementById('proj-modal-notion');
    const btnLink = document.getElementById('proj-modal-link');

    // --- 1. PREENCHER TEXTOS (COM VERIFICAÇÃO) ---
    if (titleEl) titleEl.textContent = p.title;
    if (descEl) descEl.textContent = langData.desc || "Descrição não disponível.";
    if (roleEl) roleEl.textContent = langData.role;
    if (situationEl) situationEl.textContent = langData.situation || "Status não informado";

    // --- 2. CARREGAR CARROSSEL ---
    if (track && indicators) {
        track.innerHTML = '';
        indicators.innerHTML = '';
        if (p.images && Array.isArray(p.images)) {
            p.images.forEach((src, idx) => {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'carousel-item-wrapper';
                const img = document.createElement('img');
                img.src = src;
                imgContainer.appendChild(img);
                track.appendChild(imgContainer);
                
                const dot = document.createElement('div');
                dot.className = `dot ${idx === 0 ? 'active' : ''}`;
                indicators.appendChild(dot);
            });
        }
    }

    // --- 3. LÓGICA DO BOTÃO DO NOTION ---
    if (notionBtn) {
        if (p.notionLink) {
            notionBtn.href = p.notionLink;
            notionBtn.style.display = 'flex';
            
            // Verifica se o botão tem um <span> dentro antes de tentar mudar
            const spanInside = notionBtn.querySelector('span');
            if (spanInside) {
                spanInside.textContent = lang === 'pt' ? 'Ver no Notion' : 'View on Notion';
            } else {
                notionBtn.textContent = lang === 'pt' ? 'Ver no Notion' : 'View on Notion';
            }
        } else {
            notionBtn.style.display = 'none';
        }
    }

    // --- 4. LÓGICA DO BOTÃO PRINCIPAL ---
    if (btnLink) {
        btnLink.href = p.link;
        btnLink.textContent = langData.linkText || (lang === 'pt' ? 'Ver Projeto ↗' : 'View Project ↗');
        
        if (p.link.includes('github.com')) {
            btnLink.style.backgroundColor = '#24292e'; // Preto GitHub
        } else if (p.link.includes('figma.com')) {
            btnLink.style.backgroundColor = '#F24E1E'; // Laranja Figma
        } else {
            btnLink.style.backgroundColor = 'var(--blue)'; // Azul Padrão
        }
    }

    // --- 5. TAGS E TECNOLOGIAS ---
    const tagsEl = document.getElementById('proj-modal-tags');
    const techsEl = document.getElementById('proj-modal-techs');
    if (tagsEl && p.tags) {
        tagsEl.innerHTML = p.tags.map(t => `<span class="project-tag ${t.cls}">${t.label}</span>`).join('');
    }
    if (techsEl && p.techs) {
        techsEl.innerHTML = p.techs.map(t => `<span class="proj-modal-tech">${t}</span>`).join('');
    }

    // --- 6. EXIBIR MODAL ---
    if (track) track.scrollLeft = 0;
    const overlay = document.getElementById('proj-overlay');
    if (overlay) overlay.classList.add('open');
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