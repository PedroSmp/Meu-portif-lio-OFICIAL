// Variáveis globais para controlar o carrossel
let currentImages = [];
let currentIndex = 0;

const data = {
  bemlar: {
    bar: 'Bem Lar — UI/UX Project',
    images: [
      './fotos/Agenda.webp',
      './fotos/DASHBOARD.webp',
      './fotos/FINANCAS.webp',
      './fotos/pagina-inicial-mobile.webp',
      './fotos/persona_bemlar.webp'
    ],
    body: `
      <div class="case-layout">

        <div class="case-carousel-wrap">
          <div class="project-carousel">
            <button class="carousel-arrow left" onclick="prevImage(event)" aria-label="Imagem anterior"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg></button>
            <img id="carousel-img" src="./fotos/Agenda.webp" alt="Case Bem Lar" onerror="this.style.opacity='0.3';">
            <button class="carousel-arrow right" onclick="nextImage(event)" aria-label="Próxima imagem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></button>
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
                <svg width="16" height="16" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z" fill="white"/><path d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 0 47.5 9.5 9.5 0 0 0 9.5 57Z" fill="white"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="white"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" fill="white"/><path d="M19 0V19H28.5A9.5 9.5 0 0 0 28.5 0Z" fill="white"/></svg>
                Figma
              </a>
              <a href="https://www.notion.so/Bemlar-309743033bb680d6a74de850882c672a" target="_blank" class="case-btn case-btn-notion">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8.5 16.5V8l7 8.5V7.5"/></svg>
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
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></div>
              <div class="case-block-text">
                <div class="case-block-label">O que é</div>
                <div class="case-block-desc">Plataforma criada para auxiliar e ajudar diariamente profissionais diaristas, com foco em cuidado e profissionalismo.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
              <div class="case-block-text">
                <div class="case-block-label">O Desafio</div>
                <div class="case-block-desc">Como conectar profissionais autônomos a contratantes garantindo segurança mútua, fluxos de agendamento claros e uma experiência confiável?</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/></svg></div>
              <div class="case-block-text">
                <div class="case-block-label">Meu papel</div>
                <div class="case-block-desc">UX Researcher e UI Designer, desde a pesquisa até os protótipos de alta fidelidade e testes de usabilidade e a implementação front-end da plataforma.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg></div>
              <div class="case-block-text">
                <div class="case-block-label">Entregáveis de UX</div>
                <div class="case-block-desc">Benchmarking de concorrentes, criação de Personas, mapeamento da Jornada do Usuário e testes de usabilidade com IA.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg></div>
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
      './fotos/AgriRs_pgI.webp',
      './fotos/AgriRs_Dest.webp',
      './fotos/AgriRs_footer.webp',
    ],
    body: `
      <div class="case-layout">

        <div class="case-carousel-wrap">
          <div class="project-carousel">
            <button class="carousel-arrow left" onclick="prevImage(event)" aria-label="Imagem anterior"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg></button>
            <img id="carousel-img" src="./fotos/AgriRs_pgI.webp" alt="Interface AgriRs">
            <button class="carousel-arrow right" onclick="nextImage(event)" aria-label="Próxima imagem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></button>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0Z"/></svg>
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
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></div>
              <div class="case-block-text">
                <div class="case-block-label">O que é</div>
                <div class="case-block-desc">Meu primeiro projeto acadêmico realizado durante o curso de Desenvolvimento de Software Multiplataforma na FATEC</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
              <div class="case-block-text">
                <div class="case-block-label">O Desafio</div>
                <div class="case-block-desc">Criar um portal que comunicasse a credibilidade científica do laboratório com uma navegação clara e moderna, dentro de um processo acadêmico colaborativo.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/></svg></div>
              <div class="case-block-text">
                <div class="case-block-label">Meu papel</div>
                <div class="case-block-desc">Scrum Master, UI/UX Designer e desenvolvedor front-end, atuei em todas as frentes do projeto, da pesquisa ao código.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg></div>
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
      './fotos/AluraMED.webp',
      './fotos/double_diamond.webp'
    ],
    body: `
      <div class="case-layout">

        <div class="case-carousel-wrap">
          <div class="project-carousel">
            <button class="carousel-arrow left" onclick="prevImage(event)" aria-label="Imagem anterior"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg></button>
            <img id="carousel-img" src="./fotos/AluraMED.webp" alt="AluraMed" onerror="this.style.opacity='0.3';">
            <button class="carousel-arrow right" onclick="nextImage(event)" aria-label="Próxima imagem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></button>
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
                <svg width="16" height="16" viewBox="0 0 38 57" fill="none"><path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z" fill="white"/><path d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 0 47.5 9.5 9.5 0 0 0 9.5 57Z" fill="white"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="white"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" fill="white"/><path d="M19 0V19H28.5A9.5 9.5 0 0 0 28.5 0Z" fill="white"/></svg>
                Figma
              </a>
              <a href="https://www.notion.so/Aluramed-1ca17d38ce1d813690b9f1a2549840ea" target="_blank" class="case-btn case-btn-notion">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8.5 16.5V8l7 8.5V7.5"/></svg>
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
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></div>
              <div class="case-block-text">
                <div class="case-block-label">O que é</div>
                <div class="case-block-desc">Aplicativo mobile de agendamento de consultas médicas, desenvolvido com foco em acessibilidade e experiência do paciente.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
              <div class="case-block-text">
                <div class="case-block-label">O Desafio</div>
                <div class="case-block-desc">Simplificar o processo de agendamento médico reduzindo barreiras de acesso, tornando a plataforma intuitiva para usuários com diferentes níveis de familiaridade digital.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/></svg></div>
              <div class="case-block-text">
                <div class="case-block-label">Meu papel</div>
                <div class="case-block-desc">UX Researcher e UI Designer, condução das pesquisas, prototipação de alta fidelidade e refinamento baseado em testes de usabilidade.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg></div>
              <div class="case-block-text">
                <div class="case-block-label">Entregáveis de UX</div>
                <div class="case-block-desc">Benchmarking de concorrentes, criação de Personas e mapeamento da Jornada do Usuário documentados no Notion.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg></div>
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

  greener: {
    bar: 'GreenEr — Monitoramento sustentável',
    images: ['./fotos/GreenEr_1.png', './fotos/GreenEr_2.png', './fotos/GreenEr_3.png', './fotos/GreenEr_4.png', './fotos/GreenEr_5.png'],
    body: `
      <div class="case-layout">
        <div class="case-carousel-wrap">
          <div class="project-carousel">
            <button class="carousel-arrow left" onclick="prevImage(event)" aria-label="Imagem anterior"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
            <img id="carousel-img" alt="Telas do projeto GreenEr">
            <button class="carousel-arrow right" onclick="nextImage(event)" aria-label="Próxima imagem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
            <div class="carousel-dots" id="carousel-dots"></div>
          </div>
        </div>
        <div class="case-content">
          <div class="case-header">
            <div class="case-header-left">
              <span class="case-type-badge case-type-badge--web">Projeto universitário</span>
              <h2 class="case-title">GreenEr</h2>
              <p class="case-subtitle">Plataforma de monitoramento do consumo energético de serviços de software e estimativa de emissões de CO₂e.</p>
            </div>
            <div class="case-actions-top">
              <a href="https://www.figma.com/design/zPrdeRlYtzyWwmbuTiwQqE/GeenER?t=Z2x0y5xXYN2WRvLf-0" target="_blank" rel="noopener noreferrer" class="case-btn case-btn-figma"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a4 4 0 0 1 0 8H7a4 4 0 0 1 0-8Zm0 10h5a4 4 0 1 1 0 8H7a4 4 0 0 1 0-8Zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"/></svg>Figma</a>
              <a href="https://github.com/404NotFound-ABP/greener.git" target="_blank" rel="noopener noreferrer" class="case-btn case-btn-github"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.24-5.1 5.51.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>GitHub</a>
              <a href="https://app.notion.com/p/GreenER-3e7743033bb680da9917e19e9146a74d?source=copy_link" target="_blank" rel="noopener noreferrer" class="case-btn case-btn-notion"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.5 3.2 16.9 2c1.5-.1 1.9.4 2.7 1l2.2 1.7c.4.3.5.5.5 1.1v15.4c0 1-.4 1.6-1.6 1.7L6.3 24c-1 .1-1.5-.1-2-.8l-1.6-2.1c-.4-.5-.6-.9-.6-1.6V5.1c0-1.1.5-1.8 2.4-1.9ZM8 7.1v.2c1.2.3 1.5.7 1.5 2.1v8.1c0 1.1-.3 1.4-1.4 1.5v.3h4.2V19c-1.2-.1-1.5-.4-1.5-1.5V9.8l6 9.5 2.2-.2V8.8c0-1.1.3-1.4 1.4-1.5V7h-4.2v.3c1.2.1 1.5.4 1.5 1.5v6.7l-5.3-8.4H8Z"/></svg>Notion</a>
            </div>
          </div>
          <div class="case-tags">
            <span class="case-tag">UI/UX Design</span><span class="case-tag">Front-end</span><span class="case-tag">React</span><span class="case-tag">TypeScript</span><span class="case-tag">Tailwind CSS</span><span class="case-tag">Sustentabilidade</span>
          </div>
          <div class="case-blocks">
            <div class="case-block"><div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg></div><div class="case-block-text"><div class="case-block-label">O que é</div><div class="case-block-desc">GreenEr é um projeto acadêmico de TI voltado ao acompanhamento do consumo energético de serviços de software e à visualização de indicadores ambientais, como emissões de CO₂e.</div></div></div>
            <div class="case-block"><div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/></svg></div><div class="case-block-text"><div class="case-block-label">O desafio</div><div class="case-block-desc">Organizar informações técnicas de diferentes serviços em uma interface clara, permitindo acompanhar disponibilidade, localização, consumo e métricas de infraestrutura.</div></div></div>
            <div class="case-block"><div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/></svg></div><div class="case-block-text"><div class="case-block-label">Minha contribuição</div><div class="case-block-desc">Atuo no projeto com UI/UX e desenvolvimento front-end, trabalhando na estrutura das telas, hierarquia das informações e implementação da interface.</div></div></div>
            <div class="case-block"><div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z"/><path d="m9 12 2 2 4-4"/></svg></div><div class="case-block-text"><div class="case-block-label">Destaques da solução</div><div class="case-block-desc">Mapa de serviços, filtros por estado, painel de serviços monitorados, configuração dos intervalos de coleta e dashboard com histórico de energia e estimativa de CO₂e.</div></div></div>
          </div>
        </div>
      </div>`,
    footer: ''
  },

  Autoatendimento: {
    bar: 'Faqtec ',
    images: [
      './fotos/faq.jpg',
      './fotos/faqtec.jpg',
      './fotos/logo-chat.svg',
      './fotos/PERGUNTAS.svg',
      './fotos/RELATORIOS.svg',
      './fotos/CRIANDO UMA RESPOSTA.svg',
    ],
    body: `
      <div class="case-layout">

        <div class="case-carousel-wrap">
          <div class="project-carousel">
            <button class="carousel-arrow left" onclick="prevImage(event)" aria-label="Imagem anterior"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg></button>
            <img id="carousel-img">
            <button class="carousel-arrow right" onclick="nextImage(event)" aria-label="Próxima imagem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></button>
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
                <svg width="16" height="16" viewBox="0 0 38 57" fill="none"><path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z" fill="white"/><path d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 0 47.5 9.5 9.5 0 0 0 9.5 57Z" fill="white"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="white"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" fill="white"/><path d="M19 0V19H28.5A9.5 9.5 0 0 0 28.5 0Z" fill="white"/></svg>
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
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></div>
              <div class="case-block-text">
                <div class="case-block-label">O que é</div>
                <div class="case-block-desc">Meu segundo projeto acadêmico desenvolvido para a FATEC Jacareí, um chatbot acadêmico, uma solução de autoatendimento inteligente para responder dúvidas de alunos de forma rápida e acessível.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
              <div class="case-block-text">
                <div class="case-block-label">O Desafio</div>
                <div class="case-block-desc">Reduzir a sobrecarga de atendimento presencial da secretaria acadêmica com uma interface conversacional clara, confiável e fácil de usar por qualquer aluno.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/></svg></div>
              <div class="case-block-text">
                <div class="case-block-label">Meu papel</div>
                <div class="case-block-desc">UX Researcher e UI Designer, pesquisa de mercado, benchmarking, criação de protótipos de alta fidelidade e validação com usuários.</div>
              </div>
            </div>

            <div class="case-block">
              <div class="case-block-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg></div>
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
            <img src="./fotos/euu.jpg" alt="Pedro Sampaio" onerror="this.style.display='none';this.parentElement.innerHTML='<div class=\\'perfil-foto-placeholder\\'><svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' aria-hidden=\\'true\\'><circle cx=\\'12\\' cy=\\'8\\' r=\\'4\\'/><path d=\\'M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1\\'/></svg></div>'">
          </div>
        </div>
        <div class="perfil-info-col">
          <div class="perfil-nome">Pedro Sampaio</div>
          <div class="perfil-email">UI/UX Designer · FATEC DSM</div>
          <div class="perfil-stats-grid">
            <div class="perfil-stat"><div class="perfil-stat-num">4</div><div class="perfil-stat-lbl">projetos</div></div>
            <div class="perfil-stat"><div class="perfil-stat-num">UX+UI</div><div class="perfil-stat-lbl">pesquisa e design</div></div>
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
      <div class="skill-groups">
        <div class="skill-group"><div class="skill-head"><span class="skill-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></span><span class="skill-name">Design de interface</span></div><div class="modal-tags"><span class="modal-tag">UI Design</span><span class="modal-tag">Wireframing</span><span class="modal-tag">Prototipagem Avançada</span><span class="modal-tag">Arquitetura de Informação</span></div></div>
        <div class="skill-group"><div class="skill-head"><span class="skill-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></span><span class="skill-name">Pesquisa e estratégia</span></div><div class="modal-tags"><span class="modal-tag">UX Research</span><span class="modal-tag">UX Writing</span><span class="modal-tag">Persona</span><span class="modal-tag">Double Diamond</span></div></div>
        <div class="skill-group"><div class="skill-head"><span class="skill-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94Z"/></svg></span><span class="skill-name">Ferramentas</span></div><div class="modal-tags"><span class="modal-tag">Figma</span><span class="modal-tag">Notion</span><span class="modal-tag">Git</span></div></div>
        <div class="skill-group"><div class="skill-head"><span class="skill-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span><span class="skill-name">Front-end</span></div><div class="modal-tags"><span class="modal-tag">HTML</span><span class="modal-tag">CSS</span><span class="modal-tag">JavaScript</span></div></div>
        <div class="skill-group"><div class="skill-head"><span class="skill-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span><span class="skill-name">Colaboração</span></div><div class="modal-tags"><span class="modal-tag">Scrum Master</span><span class="modal-tag">Metodologia Ágil</span></div></div>
      </div>`,
    footer: ``
  },

  contato: {
    bar: 'Contato',
    body: `<h3>Vamos criar algo incrível?</h3>
      <p>Estou em constante aprendizado e aberto a conversar sobre novos desafios, parcerias e projetos em UI/UX Design.</p>
      <div class="contact-list">
        <div class="contact-row"><a class="contact-link" href="mailto:contato.pedro549@gmail.com"><span class="contact-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span><span>contato.pedro549@gmail.com</span></a><button type="button" class="copy-btn" onclick="copyEmail(this)" aria-label="Copiar e-mail"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg><span>Copiar</span></button></div>
        <div class="contact-row"><a class="contact-link" href="https://www.linkedin.com/in/pedro-sampaio-463a77375" target="_blank" rel="noopener"><span class="contact-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></span><span>/in/pedro-sampaio-463a77375</span></a></div>
        <div class="contact-row"><a class="contact-link" href="https://github.com/PedroSmp" target="_blank" rel="noopener"><span class="contact-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></span><span>/PedroSmp</span></a></div>
      </div>`,
    footer: `<a class="modal-btn primary" href="https://www.linkedin.com/in/pedro-sampaio-463a77375" target="_blank"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>LinkedIn</a>
      <a class="modal-btn secondary" href="mailto:contato.pedro549@gmail.com"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>E-mail</a>
      <a class="modal-btn secondary" href="https://github.com/PedroSmp" target="_blank"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>GitHub</a>`
  },

  curriculo: {
    bar: 'Currículo — UX Designer',
    body: `<h3>Currículo UX</h3>
      <p>Baixe meu currículo atualizado com experiências acadêmicas, habilidades técnicas e projetos em UI/UX Design.</p>
      <div style="background:#241c1c;border-radius:8px;padding:12px;border:1px solid #382a2a;margin-top:8px;">
        <div style="font-size:12px;font-weight:700;color:#ff6b6b;">curriculo-UX.pdf</div>
        <div style="font-size:11px;color:#a89f9f;margin-top:2px;">Documento PDF · PT/BR</div>
      </div>`,
    footer: `<a class="modal-btn primary" href="https://pedrosmp.github.io/Meu-portif-lio-OFICIAL/curriculo-UX.pdf" download target="_blank"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>Baixar PDF</a>`
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

  document.getElementById('modal').classList.remove('maximized');
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

  if(arrowLeft) arrowLeft.style.display = 'flex';
  if(arrowRight) arrowRight.style.display = 'flex';
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

// Maximizar / restaurar a janela
function toggleMax(e) {
  if (e) e.stopPropagation();
  document.getElementById('modal').classList.toggle('maximized');
}

// Copiar e-mail (aba Contato)
function copyEmail(btn) {
  const email = 'contato.pedro549@gmail.com';
  const done = () => { const s = btn.querySelector('span'); s.textContent = 'Copiado!'; btn.classList.add('ok'); setTimeout(() => { s.textContent = 'Copiar'; btn.classList.remove('ok'); }, 1800); };
  if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(email).then(done).catch(() => {}); }
  else { const t = document.createElement('textarea'); t.value = email; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); done(); } catch (e) {} t.remove(); }
}

// Teclado: Enter/Espaço abre pastas e itens do dock
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('.icon, .dock-item')) { e.preventDefault(); e.target.click(); }
});