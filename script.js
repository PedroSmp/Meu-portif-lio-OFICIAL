// Variáveis globais para controlar o carrossel
let currentImages = [];
let currentIndex = 0;

const data = {
  bemlar: {
    bar: 'Bem Lar — UI/UX Project',
    images: [
      './fotos/Agenda.png',
      './fotos/DASHBOARD.png',
      './fotos/FINANÇAS.png',
      './fotos/pagina inicial-mobile.png',
      './fotos/persona_bemlar.png'
    ],
    body: `
      <div class="case-layout">

        <div class="case-carousel-wrap">
          <div class="project-carousel">
            <button class="carousel-arrow left" onclick="prevImage(event)" aria-label="Imagem anterior"><i class="ti ti-chevron-left"></i></button>
            <img id="carousel-img" src="./fotos/capa_bemlar.png" alt="Case Bem Lar" onerror="this.style.opacity='0.3';">
            <button class="carousel-arrow right" onclick="nextImage(event)" aria-label="Próxima imagem"><i class="ti ti-chevron-right"></i></button>
            <div class="carousel-dots" id="carousel-dots"></div>
          </div>
        </div>

        <div class="case-content">

          <div class="case-header">
            <div class="case-header-left">
              <span class="case-type-badge">Mobile App</span>
              <h2 class="case-title">Bem Lar</h2>
              <p class="case-subtitle">Plataforma de contratação de limpeza doméstica segura e prática.</p>
            </div>
            <div class="case-actions-top">
              <a href="https://www.figma.com/design/msJsyd6SJ5BCiLVwOArvRh" target="_blank" class="case-btn case-btn-figma">
                <svg width="14" height="14" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z" fill="white"/><path d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 0 47.5 9.5 9.5 0 0 0 9.5 57Z" fill="white"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="white"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" fill="white"/><path d="M19 0V19H28.5A9.5 9.5 0 0 0 28.5 0Z" fill="white"/></svg>
                Figma
              </a>
              <a href="https://www.notion.so/Bemlar-309743033bb680d6a74de850882c672a" target="_blank" class="case-btn case-btn-notion">
                <svg width="14" height="14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 7.5C6 5 8 3 10.5 3H74l20 20v69.5c0 2.5-2 4.5-4.5 4.5H10.5C8 97 6 95 6 92.5V7.5Z" fill="currentColor" opacity=".15"/><path d="M74 3l20 20H78c-2.2 0-4-1.8-4-4V3Z" fill="currentColor" opacity=".3"/></svg>
                Notion
              </a>
            </div>
          </div>

          <div class="case-tags">
            <span class="case-tag">UI Design</span>
            <span class="case-tag">UX Research</span>
            <span class="case-tag">Mobile First</span>
            <span class="case-tag">Figma</span>
            <span class="case-tag">UX Writing</span>
          </div>

          <div class="case-blocks">

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">O que é</div>
                <div class="case-block-desc">Plataforma criada para auxiliar e ajudar diariamente profissionais diaristas, com foco em cuidado e profissionalismo.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">O Desafio</div>
                <div class="case-block-desc">Como conectar profissionais autônomos a contratantes garantindo segurança mútua, fluxos de agendamento claros e uma experiência confiável?</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">Meu papel</div>
                <div class="case-block-desc">UX Researcher e UI Designer, desde a pesquisa até os protótipos de alta fidelidade e testes de usabilidade e a implementação front-end da plataforma.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">Entregáveis de UX</div>
                <div class="case-block-desc">Benchmarking de concorrentes, criação de Personas, mapeamento da Jornada do Usuário e testes de usabilidade com IA.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">Destaques de UI</div>
                <div class="case-block-desc">Fluxo de agendamento simplificado e interface focada em acessibilidade e confiança visual, reduzindo atrito para os dois lados da plataforma.</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    `,
    footer: ``
  },

  agrirs: {
    bar: 'AgriRs',
    images: [
      './fotos/AgriRs_pgI.png',
      './fotos/AgriRs_Dest.png',
      './fotos/AgriRs_footer.png',
    ],
    body: `
      <div class="case-layout">

        <div class="case-carousel-wrap">
          <div class="project-carousel">
            <button class="carousel-arrow left" onclick="prevImage(event)" aria-label="Imagem anterior"><i class="ti ti-chevron-left"></i></button>
            <img id="carousel-img" src="./fotos/AgriRs.png" alt="Interface AgriRs";">
            <button class="carousel-arrow right" onclick="nextImage(event)" aria-label="Próxima imagem"><i class="ti ti-chevron-right"></i></button>
            <div class="carousel-dots" id="carousel-dots"></div>
          </div>
        </div>

        <div class="case-content">

          <div class="case-header">
            <div class="case-header-left">
              <span class="case-type-badge case-type-badge--web">Projeto universitário</span>
              <h2 class="case-title">AgriRs</h2>
              <p class="case-subtitle">Portal institucional para laboratório de Sensoriamento Remoto do INPE.</p>
            </div>
            <div class="case-actions-top">
              <a href="https://github.com/404NotFound-ABP/AgriRSLAB_Portal.git" target="_blank" class="case-btn case-btn-github">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0Z"/></svg>
                GitHub
              </a>
            </div>
          </div>

          <div class="case-tags">
            <span class="case-tag">UI/UX Design</span>
            <span class="case-tag">HTML/CSS/JS</span>
            <span class="case-tag">Scrum Master</span>
            <span class="case-tag">Metodologia Ágil</span>
            <span class="case-tag">Git</span>
          </div>

          <div class="case-blocks">

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">O que é</div>
                <div class="case-block-desc">Meu primeiro projeto acadêmico realizado durante o curso de Desenvolvimento de Software Multiplataforma na FATEC</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">O Desafio</div>
                <div class="case-block-desc">Criar um portal que comunicasse a credibilidade científica do laboratório com uma navegação clara e moderna, dentro de um processo acadêmico colaborativo.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">Meu papel</div>
                <div class="case-block-desc">Scrum Master, UI/UX Designer e desenvolvedor front-end, atuei em todas as frentes do projeto, da pesquisa ao código.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">Resultado</div>
                <div class="case-block-desc">Projeto escolhido pelo cliente para publicação no site oficial do INPE portal responsivo, funcional e aprovado pelos pesquisadores do laboratório.</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    `,
    footer: ``
  },

  aluramed: {
    bar: 'AluraMed — UI/UX Project',
    images: [
      './fotos/AluraMED.png',
      './fotos/double_diamond.png'
    ],
    body: `
      <div class="case-layout">

        <div class="case-carousel-wrap">
          <div class="project-carousel">
            <button class="carousel-arrow left" onclick="prevImage(event)" aria-label="Imagem anterior"><i class="ti ti-chevron-left"></i></button>
            <img id="carousel-img" src="./fotos/AluraMED.png" alt="AluraMed" onerror="this.style.opacity='0.3';">
            <button class="carousel-arrow right" onclick="nextImage(event)" aria-label="Próxima imagem"><i class="ti ti-chevron-right"></i></button>
            <div class="carousel-dots" id="carousel-dots"></div>
          </div>
        </div>

        <div class="case-content">

          <div class="case-header">
            <div class="case-header-left">
              <span class="case-type-badge case-type-badge--health">Mobile App</span>
              <h2 class="case-title">AluraMed</h2>
              <p class="case-subtitle">Aplicativo de agendamento de consultas médicas com foco em acessibilidade.</p>
            </div>
            <div class="case-actions-top">
              <a href="https://www.figma.com/board/BL9qfcUznNXiTXNXN1VrHd" target="_blank" class="case-btn case-btn-figma">
                <svg width="14" height="14" viewBox="0 0 38 57" fill="none"><path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z" fill="white"/><path d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 0 47.5 9.5 9.5 0 0 0 9.5 57Z" fill="white"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="white"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" fill="white"/><path d="M19 0V19H28.5A9.5 9.5 0 0 0 28.5 0Z" fill="white"/></svg>
                Figma
              </a>
              <a href="https://www.notion.so/Aluramed-1ca17d38ce1d813690b9f1a2549840ea" target="_blank" class="case-btn case-btn-notion">
                <svg width="14" height="14" viewBox="0 0 100 100" fill="none"><path d="M6 7.5C6 5 8 3 10.5 3H74l20 20v69.5c0 2.5-2 4.5-4.5 4.5H10.5C8 97 6 95 6 92.5V7.5Z" fill="currentColor" opacity=".15"/><path d="M74 3l20 20H78c-2.2 0-4-1.8-4-4V3Z" fill="currentColor" opacity=".3"/></svg>
                Notion
              </a>
            </div>
          </div>

          <div class="case-tags">
            <span class="case-tag">UX Research</span>
            <span class="case-tag">Figma</span>
            <span class="case-tag">Double Diamond</span>
            <span class="case-tag">Persona</span>
            <span class="case-tag">UI Design</span>
          </div>

          <div class="case-blocks">

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">O que é</div>
                <div class="case-block-desc">Aplicativo mobile de agendamento de consultas médicas, desenvolvido com foco em acessibilidade e experiência do paciente.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">O Desafio</div>
                <div class="case-block-desc">Simplificar o processo de agendamento médico reduzindo barreiras de acesso, tornando a plataforma intuitiva para usuários com diferentes níveis de familiaridade digital.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">Meu papel</div>
                <div class="case-block-desc">UX Researcher e UI Designer, condução das pesquisas, prototipação de alta fidelidade e refinamento baseado em testes de usabilidade.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">Entregáveis de UX</div>
                <div class="case-block-desc">Benchmarking de concorrentes, criação de Personas e mapeamento da Jornada do Usuário documentados no Notion.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">Destaques de UI</div>
                <div class="case-block-desc">Interface centrada em acessibilidade e confiança visual, com fluxo de agendamento em menos etapas e protótipos validados com usuários reais.</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    `,
    footer: ``
  },

  Autoatendimento: {
    bar: 'Faqtec ',
    images: [
      './fotos/faq.jpg',
      './fotos/faqtec.jpg',
      './fotos/logo-chat.svg',
      './fotos/PERGUNTAS.svg',
      './fotos/RELATORIOS.svg',
      './fotos/CRIANDO UMA PERGUNTA.svg',
    ],
    body: `
      <div class="case-layout">

        <div class="case-carousel-wrap">
          <div class="project-carousel">
            <button class="carousel-arrow left" onclick="prevImage(event)" aria-label="Imagem anterior"><i class="ti ti-chevron-left"></i></button>
            <img id="carousel-img">
            <button class="carousel-arrow right" onclick="nextImage(event)" aria-label="Próxima imagem"><i class="ti ti-chevron-right"></i></button>
            <div class="carousel-dots" id="carousel-dots"></div>
          </div>
        </div>

        <div class="case-content">

          <div class="case-header">
            <div class="case-header-left">
              <span class="case-type-badge case-type-badge--web">Projeto universitário</span>
              <h2 class="case-title">Faqtec</h2>
              <p class="case-subtitle">Chatbot acadêmico para a FATEC Jacareí autoatendimento inteligente para alunos.</p>
            </div>
            <div class="case-actions-top">
              <a href="https://www.figma.com/design/nxX4kUKGSKeNLARNj0iMDf/ChatBoot--Fatec?node-id=294-813&t=ta6jcEsL02Dcuyc8-1" target="_blank" class="case-btn case-btn-figma">
                <svg width="18" height="18" viewBox="0 0 38 57" fill="none"><path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z" fill="white"/><path d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 0 47.5 9.5 9.5 0 0 0 9.5 57Z" fill="white"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="white"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" fill="white"/><path d="M19 0V19H28.5A9.5 9.5 0 0 0 28.5 0Z" fill="white"/></svg>
                Figma
              </a>
              <a href="https://github.com/404NotFound-ABP/Autoatendimento_Academico.git" target="_blank" class="case-btn case-btn-github">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0Z"/></svg>
                GitHub
              </a>
            </div>
          </div>

          <div class="case-tags">
            <span class="case-tag">UX Research</span>
            <span class="case-tag">UI Design</span>
            <span class="case-tag">Figma</span>
            <span class="case-tag">Benchmarking</span>
            <span class="case-tag">IA</span>
          </div>

          <div class="case-blocks">

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">O que é</div>
                <div class="case-block-desc">Meu segundo projeto acadêmico desenvolvido para a FATEC Jacareí, um chatbot acadêmico, uma solução de autoatendimento inteligente para responder dúvidas de alunos de forma rápida e acessível.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">O Desafio</div>
                <div class="case-block-desc">Reduzir a sobrecarga de atendimento presencial da secretaria acadêmica com uma interface conversacional clara, confiável e fácil de usar por qualquer aluno.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">Meu papel</div>
                <div class="case-block-desc">UX Researcher e UI Designer, pesquisa de mercado, benchmarking, criação de protótipos de alta fidelidade e validação com usuários.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"></div>
              <div class="case-block-text">
                <div class="case-block-label">Resultado</div>
                <div class="case-block-desc">Projeto escolhido pelo cliente pela segunda vez consecutiva e com a solução aprovada e com protótipo validado em testes de usabilidade com alunos reais.</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    `,
    footer: ``
  },

  sobre: {
    bar: 'Perfil',
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
          <div class="perfil-bio">Descobri UI/UX por um canal do YouTube (Leon e Nilce) e me apaixonei por criar produtos digitais que fazem diferença. Busco unir a empatia do design com a viabilidade técnica.</div>
        </div>
      </div>`,
    footer: ``
  },

  skills: {
    bar: 'Habilidades técnicas',
    body: `<h3>Competências</h3>
      <div class="modal-tags" style="margin-top:16px;">
        <span class="modal-tag">UI Design</span>
        <span class="modal-tag">UX Research</span>
        <span class="modal-tag">Arquitetura de Informação</span>
        <span class="modal-tag">Prototipagem Avançada</span>
        <span class="modal-tag">Desenvolvimento Front-end</span>
        <span class="modal-tag">Wireframing</span>
        <span class="modal-tag">UX Writing</span>
      </div>`,
    footer: ``
  },

  contato: {
    bar: 'Contato',
    body: `<h3>Vamos criar algo incrível?</h3>
      <p>Estou em constante aprendizado e aberto a conversar sobre novos desafios, parcerias e projetos em UI/UX Design.</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:4px;">
        <div style="display:flex;align-items:center;gap:8px;font-size:13px;color:#4a5a40;">
          <i class="ti ti-mail" style="font-size:16px;color:#2d7d46;" aria-hidden="true"></i>
          <span>contato.pedro549@gmail.com</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;font-size:13px;color:#4a5a40;">
          <i class="ti ti-brand-linkedin" style="font-size:16px;color:#2d7d46;" aria-hidden="true"></i>
          <span>/in/pedro-sampaio-463a77375</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;font-size:13px;color:#4a5a40;">
          <i class="ti ti-brand-github" style="font-size:16px;color:#2d7d46;" aria-hidden="true"></i>
          <span>/PedroSmp</span>
        </div>
      </div>`,
    footer: `<a class="modal-btn primary" href="https://www.linkedin.com/in/pedro-sampaio-463a77375" target="_blank"><i class="ti ti-brand-linkedin" aria-hidden="true"></i>LinkedIn</a>
      <a class="modal-btn secondary" href="mailto:contato.pedro549@gmail.com"><i class="ti ti-mail" aria-hidden="true"></i>E-mail</a>
      <a class="modal-btn secondary" href="https://github.com/PedroSmp" target="_blank"><i class="ti ti-brand-github" aria-hidden="true"></i>GitHub</a>`
  },

  curriculo: {
    bar: 'Currículo — UX Designer',
    body: `<h3>Currículo UX</h3>
      <p>Baixe meu currículo atualizado com experiências acadêmicas, habilidades técnicas e projetos em UI/UX Design.</p>
      <div style="background:#e8eedc;border-radius:8px;padding:12px;border:1px solid #c0d0a0;margin-top:8px;">
        <div style="font-size:12px;font-weight:700;color:#4a6a38;">curriculo-UX.pdf</div>
        <div style="font-size:11px;color:#7a8c70;margin-top:2px;">Documento PDF · PT/BR</div>
      </div>`,
    footer: `<a class="modal-btn primary" href="https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/curriculo-UX.pdf" download target="_blank"><i class="ti ti-download" aria-hidden="true"></i>Baixar PDF</a>`
  }
};

// Variáveis para gerenciamento de foco e acessibilidade
let lastFocusedElement;

function openModal(id) {
  lastFocusedElement = document.activeElement; // Salva o elemento que abriu o modal

  const d = data[id]; if(!d) return;

  document.getElementById('win-titlebar-name').textContent = d.bar;
  document.getElementById('modal-body').innerHTML = d.body;
  
  const modal = document.getElementById('modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const mainContent = document.querySelector('.desktop'); // Elemento principal para esconder

  const modalFooter = document.getElementById('modal-footer');
  modalFooter.innerHTML = d.footer;
  modalFooter.style.display = d.footer ? 'flex' : 'none';

  if (d.images && d.images.length > 0) {
    currentImages = d.images;
    currentIndex = 0;
    updateCarousel();
  }

  const modalBody = document.getElementById('modal-body');
  // Adiciona/remove classe para controlar o padding do modal de perfil via CSS
  if (modalBody.querySelector('.perfil-wrap')) {
    modalBody.classList.add('no-padding');
  } else {
    modalBody.classList.remove('no-padding');
  }

  modalOverlay.classList.add('open');
  document.body.classList.add('modal-aberto');

  // Acessibilidade: Esconde o conteúdo de fundo dos leitores de tela
  if (mainContent) mainContent.setAttribute('aria-hidden', 'true');
  modal.setAttribute('aria-hidden', 'false');

  // Acessibilidade: Move o foco para o modal (para o botão de fechar)
  const closeButton = modal.querySelector('.win-btn-close');
  if (closeButton) closeButton.focus();
}

function closeModal(e) {
  if(!e || e.target.id==='modal-overlay' || e.target.closest('.win-btn-close') || e.target.closest('.win-btn')) {
    const modalOverlay = document.getElementById('modal-overlay');
    const mainContent = document.querySelector('.desktop');

    modalOverlay.classList.remove('open');
    document.body.classList.remove('modal-aberto');

    // Acessibilidade: Mostra o conteúdo de fundo novamente
    if (mainContent) mainContent.setAttribute('aria-hidden', 'false');
    document.getElementById('modal').setAttribute('aria-hidden', 'true');

    // Acessibilidade: Retorna o foco para o elemento que abriu o modal
    if (lastFocusedElement) lastFocusedElement.focus();
  }
}

function updateCarousel() {
  const imgElement = document.getElementById('carousel-img');
  const dotsContainer = document.getElementById('carousel-dots');
  const arrowLeft = document.querySelector('.carousel-arrow.left');
  const arrowRight = document.querySelector('.carousel-arrow.right');

  if (!imgElement || !dotsContainer) return;

  imgElement.classList.remove('fade-anim');
  void imgElement.offsetWidth;
  imgElement.classList.add('fade-anim');
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

  dotsContainer.innerHTML = '';
  currentImages.forEach((_, index) => {
    const dot = document.createElement('span');
    if (index === currentIndex) dot.classList.add('active');
    dot.style.cursor = 'pointer';
    dot.onclick = (e) => { e.stopPropagation(); currentIndex = index; updateCarousel(); };
    dotsContainer.appendChild(dot);
  });
}

function prevImage(e) {
  if(e) e.stopPropagation();
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateCarousel();
}

function nextImage(e) {
  if(e) e.stopPropagation();
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateCarousel();
}

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
    if (document.getElementById('modal-overlay').classList.contains('open')) {
      closeModal();
    }
  }

  // Acessibilidade: Trava de foco (Focus Trap)
  if (e.key === 'Tab' && document.getElementById('modal-overlay').classList.contains('open')) {
    const modal = document.getElementById('modal');
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) { // Shift + Tab
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else { // Tab
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }
});