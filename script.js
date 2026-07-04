// Variáveis globais para controlar o carrossel
let currentImages = [];
let currentIndex = 0;

const data = {
  bemlar: {
    bar: 'Bem Lar — UI/UX Project',
    // 1. TODAS AS SUAS NOVAS IMAGENS ENTRARAM AQUI NA LISTA:
    images: [
      './fotos/Agenda.png',
      './fotos/DASHBOARD.png',
      './fotos/FINANÇAS.png',
      './fotos/pagina inicial-mobile.png',
      './fotos/persona_bemlar.png'
    ],
    body: `
      <div class="project-container">
        <div class="project-top-grid">
          <div class="project-carousel">
            <button class="carousel-arrow left" onclick="prevImage(event)">‹</button>
            
            <img id="carousel-img" src="./fotos/capa_bemlar.png" alt="Case Bem Lar" onerror="this.style.opacity='0.5';">
            
            <button class="carousel-arrow right" onclick="nextImage(event)">›</button>
            <div class="carousel-dots" id="carousel-dots"></div>
          </div>

          <div class="project-info">
            <h2>Bem Lar</h2>
            <p>Plataforma pensada em conectar profissionais de limpeza doméstica a clientes, com foco em valorização profissional, impacto social e acessibilidade.</p>
            <div class="project-tags-grid">
              <span class="tag-new">UI/UX</span>
              <span class="tag-new">Figma</span>
              <span class="tag-new">Mobile First</span>
              <span class="tag-new">UX Writing</span>
            </div>
          </div>
        </div>

        <div class="project-bottom-row">
          <div class="project-role-desc">
            A bem lar surgiu através do meu convivio com pessoas que são domésticas, percebi que essa pessoas não possuem uma ferramenta que possa ajuda-las, foi então que criei a bem lar, uma plataforma que conecta profissionais de limpeza doméstica a clientes, com foco em valorização profissional, impacto social e acessibilidade. Minha atuação foi no desenvolvimento e construção de toda a interface do aplicativo, desde a concepção dos protótipos no Figma até a implementação completa mais também, pesquisas de UX Research utilizando ferramentas de IA para auxiliar na criação de personas, jornadas do usuário e testes de usabilidade e assim entregar um produto final que atenda as necessidades do usuário e do cliente.
          </div>
          <div class="project-actions">
            <a href="https://www.figma.com/design/msJsyd6SJ5BCiLVwOArvRh" target="_blank" class="btn-custom btn-figma-orange">Figma</a>
            <a href="https://www.notion.so/Bemlar-309743033bb680d6a74de850882c672a" target="_blank" class="btn-custom btn-notion-gray">Notion</a>
          </div>
        </div>
      </div>
    `,
    footer: ``
  },
  agrirs: {
    bar: 'Projeto entregue com sucesso !',
    images: [
      './fotos/AgriRs.png'
    ],
    body: `
      <div class="project-container">
        <div class="project-top-grid">
          <div class="project-carousel">
            <button class="carousel-arrow left" onclick="prevImage(event)">‹</button>
            <img id="carousel-img" src="./fotos/AgriRs.png" alt="Interface AgriRs" onerror="this.style.opacity='0.5';">
            <button class="carousel-arrow right" onclick="nextImage(event)">›</button>
            <div class="carousel-dots" id="carousel-dots"></div>
          </div>

          <div class="project-info">
            <h2>AgriRs</h2>
            <p>Portal institucional desenvolvido para o laboratório ade Sensoriamento Remoto do INPE, integrando uma experiência visual moderna à organization de metodologias ágeis.</p>
            <div class="project-tags-grid">
              <span class="tag-new">UI/UX Design</span>
              <span class="tag-new">HTML/CSS/JS</span>
              <span class="tag-new">Scrum Master</span>
              <span class="tag-new">Metodolia Àgil</span>
              <span class="tag-new">Git</span>
            </div>
          </div>
        </div>

        <div class="project-bottom-row">
          <div class="project-role-desc">
            Esse foi o meu primeiro projeto durante o curso de Desenvolvimento de Software Multiplaforna na FATEC, onde eu atuei como Scrum Master, UI/UX Designer e desenvolvedor front-end. O projeto consistiu em criar um portal institucional para o laboratório de Sensoriamento Remoto do INPE, utilizando metodologias ágeis e ferramentas de versionamento de código como GitHub. O resultado final foi um portal moderno, funcional e responsivo, que atende às necessidades do laboratório e proporciona uma experiência agradável aos usuários, terminando com o cliente satisfeito e escolhendo o projeto para ser publicado no site oficial do INPE.
          </div>
          <div class="project-actions">
            <a href="https://github.com/404NotFound-ABP/AgriRSLAB_Portal.git" target="_blank" class="btn-custom" style="background:#24292e; color:white;">GitHub</a>
          </div>
        </div>
      </div>
    `,
    footer: ``
  },
  Autoatendimento: {
    bar: 'Projeto entregue com sucesso !',
    images: [
      './fotos/double_diamond.jpg',
      './fotos/persona_aluramed.jpg'
    ],
    body: `
      <div class="project-container">
        <div class="project-top-grid">
          <div class="project-carousel">
            <button class="carousel-arrow left" onclick="prevImage(event)">‹</button>
            <img id="carousel-img" src="./fotos/double_diamond.jpg" alt="Persona AluraMed" onerror="this.style.opacity='0.5';">
            <button class="carousel-arrow right" onclick="nextImage(event)">›</button>
            <div class="carousel-dots" id="carousel-dots"></div>
          </div>

          <div class="project-info">
            <h2>AluraMed</h2>
            <p> Chatboot academico da FATEC Jacareí </p>
            <div class="project-tags-grid">
              <span class="tag-new">UX Research</span>
              <span class="tag-new">Figma</span>
              <span class="tag-new">UI Design</span>
              <span class="tag-new">IA</span>
            </div>
          </div>
        </div>

        <div class="project-bottom-row">
          <div class="project-role-desc">
            Este é o segundo projeto que realizei durante o curso de Desenvolvimento de Software Multiplataforma na FATEC, onde atuei como UX Researcher e UI Designer. O projeto consistiu em criar um chatbot acadêmico para a FATEC Jacareí, utilizando metodologias de UX Research e ferramentas de design como Figma. Realizei pesquisas de mercado (Benchmarking) para entender suas necessidades e expectativas em relação ao chatbot, e com base nos resultados, desenvolvi protótipos de alta fidelidade com o auxílio de Inteligencia artificial que foram testados e refinados até chegarmos a uma solução final que atende às necessidades dos usuários e proporciona uma experiência agradável e intuitiva, e pela segunda vez o projeto foi escolhido pelo cliente.
          </div>
          <div class="project-actions">
            <a href="https://www.figma.com/design/nxX4kUKGSKeNLARNj0iMDf/ChatBoot--Fatec?node-id=294-813&t=ta6jcEsL02Dcuyc8-1" target="_blank" class="btn-custom btn-figma-orange">Figma</a>
            <a href="https://github.com/404NotFound-ABP/Autoatendimento_Academico.git" target="_blank" class="btn-custom btn-notion-gray">Github</a>
          </div>
        </div>
      </div>
    `,
    footer: ``
  },
  aluramed: {
    bar: 'Projeto entregue com sucesso !',
    images: [
      './fotos/double_diamond.jpg',
      './fotos/persona_aluramed.jpg'
    ],
    body: `
      <div class="project-container">
        <div class="project-top-grid">
          <div class="project-carousel">
            <button class="carousel-arrow left" onclick="prevImage(event)">‹</button>
            <img id="carousel-img" src="./fotos/double_diamond.jpg" alt="Persona AluraMed" onerror="this.style.opacity='0.5';">
            <button class="carousel-arrow right" onclick="nextImage(event)">›</button>
            <div class="carousel-dots" id="carousel-dots"></div>
          </div>

          <div class="project-info">
            <h2>AluraMed</h2>
            <p>Aplicativo de agendamento de consultas médicas.</p>
            <div class="project-tags-grid">
              <span class="tag-new">UX Research</span>
              <span class="tag-new">Figma</span>
              <span class="tag-new">Double diamond</span>
              <span class="tag-new">Persona</span>
            </div>
          </div>
        </div>

        <div class="project-bottom-row">
          <div class="project-role-desc">
            Atuei como UX Researcher e UI Designer no projeto AluraMed, um aplicativo de agendamento de consultas médicas. Realizei pesquisas de UX Research utilizando ferramentas de IA para auxiliar na criação de personas, jornadas do usuário e testes de usabilidade. Com base nos resultados das pesquisas, desenvolvi protótipos de alta fidelidade no Figma, aplicando princípios de design centrado no usuário e garantindo uma experiência intuitiva e agradável para os usuários finais.
          </div>
          <div class="project-actions">
            <a href="https://www.figma.com/board/BL9qfcUznNXiTXNXN1VrHd" target="_blank" class="btn-custom btn-figma-orange">Figma</a>
            <a href="https://www.notion.so/Aluramed-1ca17d38ce1d813690b9f1a2549840ea" target="_blank" class="btn-custom btn-notion-gray">Notion</a>
          </div>
        </div>
      </div>
    `,
    footer: ``
  },
  sobre: {
    bar: 'Pedro Sampaio — Perfil',
    body: `
      <div class="perfil-wrap">
        <div class="perfil-foto-col">
          <div class="perfil-foto">
            <img src="./fotos/euu.jpg" alt="Pedro Sampaio" onerror="this.style.display='none';this.parentElement.innerHTML='<div class=\\'perfil-foto-placeholder\\'><i class=\\'ti ti-user\\'></i></div>'">
          </div>
        </div>
        <div class="perfil-info-col">
          <div class="perfil-nome">Pedro Sampaio</div>
          <div class="perfil-email">UI/UX Designer · FATEC DSM</div>
          <div class="perfil-stats-grid">
            <div class="perfil-stat"><div class="perfil-stat-num">3</div><div class="perfil-stat-lbl">projetos</div></div>
            <div class="perfil-stat"><div class="perfil-stat-num">#1</div><div class="perfil-stat-lbl">Figma</div></div>
            <div class="perfil-stat"><div class="perfil-stat-num">2+</div><div class="perfil-stat-lbl">anos UX</div></div>
            <div class="perfil-stat"><div class="perfil-stat-num">DSM</div><div class="perfil-stat-lbl">FATEC</div></div>
          </div>
          <div class="perfil-bio">Descobri UI/UX pelo YouTube e me apaixonei por criar produtos digitais que fazem diferença. Busco unir empatia do design com viabilidade técnica.</div>
          <div class="perfil-social-row">
            <a class="perfil-social-btn" href="https://www.linkedin.com/in/pedro-sampaio-463a77375" target="_blank"><i class="ti ti-brand-linkedin"></i>LinkedIn</a>
            <a class="perfil-social-btn" href="https://github.com/PedroSmp" target="_blank"><i class="ti ti-brand-github"></i>GitHub</a>
            <a class="perfil-social-btn" href="mailto:pedro@email.com"><i class="ti ti-mail"></i>E-mail</a>
          </div>
        </div>
      </div>`,
    footer: ``
  },
  skills: {
    bar: 'Habilidades técnicas',
    body: `<h3>Skills</h3>
      <div style="margin-bottom:10px;">
        <div style="font-size:11px;font-weight:800;color:#4a6a38;margin-bottom:6px;">UI/UX Design</div>
        <div class="modal-tags"><span class="modal-tag">UX Research</span><span class="modal-tag">Benchmarking</span><span class="modal-tag">Prototipação</span><span class="modal-tag">Design Systems</span></div>
      </div>
      <div style="margin-bottom:10px;">
        <div style="font-size:11px;font-weight:800;color:#4a6a38;margin-bottom:6px;">Dev</div>
        <div class="modal-tags"><span class="modal-tag">HTML/CSS</span><span class="modal-tag">JavaScript</span><span class="modal-tag">TypeScript</span><span class="modal-tag">React</span></div>
      </div>
      <div>
        <div style="font-size:11px;font-weight:800;color:#4a6a38;margin-bottom:6px;">Ferramentas</div>
        <div class="modal-tags"><span class="modal-tag">Figma</span><span class="modal-tag">Scrum</span><span class="modal-tag">Trello</span><span class="modal-tag">Double Diamond</span></div>
      </div>`,
    footer: ``
  },
  contato: {
    bar: 'Contato',
    body: `<h3>Vamos criar algo incrível?</h3>
      <p>Estou em constante aprendizado e aberto a conversar sobre novos desafios, parcerias e projetos in UI/UX Design.</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:4px;">
        <div style="display:flex;align-items:center;gap:8px;font-size:13px;color:#4a5a40;">
          <i class="ti ti-brand-linkedin" style="font-size:16px;color:#2d7d46;" aria-hidden="true"></i>
          <span>pedro-sampaio-463a77375</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;font-size:13px;color:#4a5a40;">
          <i class="ti ti-brand-github" style="font-size:16px;color:#2d7d46;" aria-hidden="true"></i>
          <span>github.com/PedroSmp</span>
        </div>
      </div>`,
    footer: `<a class="modal-btn primary" href="https://www.linkedin.com/in/pedro-sampaio-463a77375" target="_blank"><i class="ti ti-brand-linkedin" aria-hidden="true"></i>LinkedIn</a>
      <a class="modal-btn secondary" href="https://github.com/PedroSmp" target="_blank"><i class="ti ti-brand-github" aria-hidden="true"></i>GitHub</a>`
  },
  curriculo: {
    bar: 'Currículo — UX Designer',
    body: `<h3>Currículo UX</h3>
      <p>Baixe meu currículo updated com experiências acadêmicas, habilidades técnicas e projetos em UI/UX Design.</p>
      <div style="background:#e8eedc;border-radius:8px;padding:12px;border:1px solid #c0d0a0;margin-top:8px;">
        <div style="font-size:12px;font-weight:700;color:#4a6a38;">currículo- UX .pdf</div>
        <div style="font-size:11px;color:#7a8c70;margin-top:2px;">Documento PDF · PT/BR</div>
      </div>`,
    footer: `<a class="modal-btn primary" href="https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/currículo- UX .pdf" download target="_blank"><i class="ti ti-download" aria-hidden="true"></i>Baixar PDF</a>`
  }
};

function openModal(id) {
  const d = data[id]; if(!d) return;

  document.getElementById('win-titlebar-name').textContent = d.bar;
  document.getElementById('modal-body').innerHTML = d.body;
  document.getElementById('modal-footer').innerHTML = d.footer;

  // INICIANDO O CARROSSEL SE HOUVER IMAGENS
  if (d.images && d.images.length > 0) {
    currentImages = d.images;
    currentIndex = 0;
    updateCarousel();
  }

  // AJUSTE DE PADDING DO MODAL
  const modalBody = document.getElementById('modal-body');
  if(modalBody.querySelector('.perfil-wrap')) {
    modalBody.style.padding = '0';
  } else {
    modalBody.style.padding = ''; 
  }

  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal(e) {
  if(!e || e.target.id==='modal-overlay' || e.target.closest('.win-btn-close') || e.target.closest('.win-btn')) {
    document.getElementById('modal-overlay').classList.remove('open');
  }
}


/* ── FUNÇÕES DO CARROSSEL ── */
function updateCarousel() {
  const imgElement = document.getElementById('carousel-img');
  const dotsContainer = document.getElementById('carousel-dots');
  const arrowLeft = document.querySelector('.carousel-arrow.left');
  const arrowRight = document.querySelector('.carousel-arrow.right');

  if (!imgElement || !dotsContainer) return;

  // 1. Aplica a animação removendo e adicionando a classe rapidamente
  imgElement.classList.remove('fade-anim');
  void imgElement.offsetWidth; // Pequeno truque do JS para forçar o navegador a reiniciar a animação
  imgElement.classList.add('fade-anim');

  // 2. Troca o endereço da imagem
  imgElement.src = currentImages[currentIndex];

  if (currentImages.length <= 1) {
    if(arrowLeft) arrowLeft.style.display = 'none';
    if(arrowRight) arrowRight.style.display = 'none';
    dotsContainer.style.display = 'none';
    return;
  }

  if(arrowLeft) arrowLeft.style.display = 'block';
  if(arrowRight) arrowRight.style.display = 'block';
  dotsContainer.style.display = 'flex';

  // Desenha as bolinhas (dots) dinamicamente
  dotsContainer.innerHTML = '';
  currentImages.forEach((_, index) => {
    const dot = document.createElement('span');
    if (index === currentIndex) dot.classList.add('active');
    
    dot.style.cursor = 'pointer';
    dot.onclick = (e) => {
      e.stopPropagation();
      currentIndex = index;
      updateCarousel();
    };
    dotsContainer.appendChild(dot);
  });
}

// Volta 1 imagem
function prevImage(e) {
  if(e) e.stopPropagation();
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateCarousel();
}

// Avança 1 imagem
function nextImage(e) {
  if(e) e.stopPropagation();
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateCarousel();
}
/* ────────────────────────── */

function tick() {
  const now = new Date();
  const timeStr = now.getHours().toString().padStart(2,'0')+':'+now.getMinutes().toString().padStart(2,'0');
  const dateStr = now.toLocaleDateString('pt-BR', { day:'2-digit', month:'2-digit', year:'numeric' });
  document.getElementById('clock-time').textContent = timeStr;
  document.getElementById('clock-date').textContent = dateStr;
}
tick();
setInterval(tick, 10000);

document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') {
    document.getElementById('modal-overlay').classList.remove('open');
  }
});