document.addEventListener('DOMContentLoaded', function() {
    // Seleciona apenas links de âncora (#) na nav para o scroll suave
    const links = document.querySelectorAll('nav a[href^="#"], .nav-mobile-menu a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const id = this.getAttribute('href').substring(1);
            const alvo = document.getElementById(id);

            if (alvo) {
                event.preventDefault();
                alvo.scrollIntoView({ behavior: 'smooth' });
                if(document.getElementById('mobile-menu').classList.contains('open')) {
                    closeMenu();
                }
            }
        });
    });
});

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
        situation: 'Atualmente ainda estou desenvolvendo os protótipos de alta fidelidade implementando a responsividade e aplicando o auto-layout mas já possuimos toda a parte de pesquisa estruturação e experiência do usuário pronta',
        techs: ['Figma', 'UI Design', 'UX Research', 'Prototipação', 'Notion'],
        link: 'https://www.figma.com/design/woCzpfIru8pB5rW3lDHcm9/E--TICKET?node-id=0-1',
    },
    agrirs: {
        title: 'AgriRs',
        images: [
        'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/AgriRs.png',
        'link-da-foto-2.png',
        'link-da-foto-3.png'
    ],
        tags: [{ label: 'Front-end', cls: '' }, { label: 'Scrum Master', cls: 'yellow' }],
        desc: 'Site institucional desenvolvido para o laboratório AgriRs que está dentro do INPE durante o primeiro semestre da faculdade.',
        role: 'Assumi o papel de Scrum Master, organizando as cerimônias do Scrum e contribuindo no desenvolvimento front-end e UI/UX Design onde fiz o protótipo do projeto atendendo o que o stakeholder nos requisitou.',
        situation: 'Projeto entregue e em breve disponível para o acesso público.🌟',
        techs: ['HTML', 'CSS', 'JavaScript', 'Scrum', 'Git'],
        link: 'https://github.com/404NotFound-ABP/AgriRSLAB_Portal.git',
    },
    aluramed: {
    title: 'AluraMed',
    images: [
        'https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/fotos/AluraMED.png',
        'link-da-foto-2.png',
        'link-da-foto-3.png'
    ],
    tags: [{ label: 'UX Research', cls: '' }, { label: 'Figma', cls: 'green' }],
    desc: 'Produto de telemedicina focado em consultas online. Atuei como UX Researcher identificando melhorias e adicionando funcionalidades essenciais para médicos e pacientes, utiliazando técnicas de pesquisa como o Benchmarkin, e o mapa de jornada do usuário para entender as necessidades e dores dos usuários e documentando tudo no Notion.',
    role: 'Conduzi pesquisas com usuários e mapeamento de jornada para propor melhorias na interface de agendamento.',
    situation: 'Projeto entregue, com protótipos de alta fidelidade disponíveis para visualizaçãoe toda a pesquisa documentada no Notion.🌟🌟',
    techs: ['Figma', 'UX Research', 'Jornada do Usuário'],
    link: 'https://www.figma.com/board/BL9qfcUznNXiTXNXN1VrHd/Untitled?node-id=0-1',
    },
    eticket: {
    title: 'E-Ticket',
    
    tags: [{ label: 'UI Design', cls: '' }, { label: 'Figma', cls: 'green' }],
    desc: 'App de venda de ingressos para shows e eventos. Atuei como UI Designer criando protótipos de alta fidelidade.',
    role: 'Responsável pelo Design System, criação de componentes e fluxo de checkout mobile-first.',
    situation: 'Projeto em desenvolvimento, com protótipos de alta fidelidade disponíveis para visualização.',
    techs: ['Figma', 'UI Design', 'Prototipação', 'Mobile First'],
    link: 'https://www.figma.com/design/woCzpfIru8pB5rW3lDHcm9/E--TICKET?node-id=0-1',
},
    
};

function openProject(id) {
    const p = projects[id];
    if (!p) return;

    // --- PARTE DAS IMAGENS (Já resolvemos) ---
    const track = document.getElementById('proj-modal-carousel');
    const indicators = document.getElementById('carousel-indicators');
    track.innerHTML = '';
    indicators.innerHTML = '';

    if (p.images && Array.isArray(p.images)) {
        p.images.forEach((imgSrc, index) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            track.appendChild(img);
            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            indicators.appendChild(dot);
        });
    }

    // --- PARTE DOS TEXTOS (Onde está o B.O.) ---
    
    // Debug: Vamos ver no console o que o JS está tentando escrever
    console.log("Tentando carregar descrição do projeto:", id, p.desc);

    const descEl = document.getElementById('proj-modal-desc');
    const titleEl = document.getElementById('proj-modal-title');
    const roleEl = document.getElementById('proj-modal-role');
    const situationEl = document.getElementById('proj-modal-situation');

    if (titleEl) titleEl.textContent = p.title;
    
    // Se o elemento de descrição existir, ele escreve. Se não, avisa no console.
    if (descEl) {
        descEl.textContent = p.desc || "Descrição não disponível."; 
    } else {
        console.error("ERRO: Não achei o elemento HTML com id='proj-modal-desc'");
    }

    if (roleEl) roleEl.textContent = p.role;

    if (situationEl) {
        situationEl.textContent = p.situation || "Status não informado";
    }
    
    document.getElementById('proj-modal-link').href = p.link;

    // Tags e Techs
    const tagsEl = document.getElementById('proj-modal-tags');
    tagsEl.innerHTML = p.tags.map(t => `<span class="project-tag ${t.cls}">${t.label}</span>`).join('');

    const techsEl = document.getElementById('proj-modal-techs');
    techsEl.innerHTML = p.techs.map(t => `<span class="proj-modal-tech">${t}</span>`).join('');

    // Abrir
    track.scrollLeft = 0;
    document.getElementById('proj-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function moveCarousel(direction) {
    const track = document.getElementById('proj-modal-carousel');
    const width = track.offsetWidth;
    track.scrollLeft += (direction * width);
    
    // Atualiza os dots após o scroll
    setTimeout(updateDots, 300);
}

function updateDots() {
    const track = document.getElementById('proj-modal-carousel');
    const index = Math.round(track.scrollLeft / track.offsetWidth);
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function closeProjModal(e) {
    // Fecha apenas se clicar no fundo escuro (overlay)
    if (e.target.id === 'proj-overlay') {
        document.getElementById('proj-overlay').classList.remove('open');
        document.body.style.overflow = '';
    }
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const ham = document.getElementById('hamburger');
    menu.classList.toggle('open');
    ham.classList.toggle('open');
}

function closeMenu() {
    document.getElementById('mobile-menu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
}

let currentLang = 'pt';
function toggleLang() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    const label = document.getElementById('lang-label');
    const flag = document.querySelector('.lang-flag');
    
    if (currentLang === 'en') {
        flag.textContent = '🇧🇷';
        label.textContent = 'PT';
    } else {
        flag.textContent = '🇺🇸';
        label.textContent = 'EN';
    }
    
    document.querySelectorAll('[data-pt]').forEach(el => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (text) el.innerHTML = text;
    });
}