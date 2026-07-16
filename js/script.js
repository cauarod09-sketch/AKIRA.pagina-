(function () {
  const iconWrap = (paths) =>
    `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0E9B47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

  const advantages = [
    { icon: iconWrap('<circle cx="10" cy="10" r="6"/><path d="M14.5 14.5 L20 20"/><path d="M7.5 11 L9.5 9 L11 10.5 L13 8"/>'), title: 'Análises com IA', desc: 'Relatórios claros e objetivos sobre ações, FIIs, ETFs e o mercado.' },
    { icon: iconWrap('<path d="M13 2 L4 14 L11 14 L10 22 L20 9 L13 9 Z"/>'), title: 'Respostas em segundos', desc: 'Pergunte o que quiser e Akira responde com dados e contexto.' },
    { icon: iconWrap('<path d="M12 2 L20 5 V11 C20 16 16.5 20 12 22 C7.5 20 4 16 4 11 V5 Z"/><path d="M9 12 L11 14 L15 9"/>'), title: 'Decisões mais seguras', desc: 'Dados confiáveis e visão completa para você investir com confiança.' },
    { icon: iconWrap('<path d="M18 8 A6 6 0 0 0 6 8 C6 15 3 17 3 17 H21 S18 15 18 8"/><path d="M10 21 A2 2 0 0 0 14 21"/>'), title: 'Alertas inteligentes', desc: 'Receba avisos sobre oportunidades e riscos relevantes para você.' },
  ];

  const steps = [
    { n: 1, title: 'Faça sua pergunta', desc: 'Pergunte sobre qualquer ativo, setor ou cenário.' },
    { n: 2, title: 'Akira analisa tudo', desc: 'Nossa IA cruza dados, notícias, indicadores e fundamentos.' },
    { n: 3, title: 'Você decide melhor', desc: 'Receba análises claras e objetivas para investir com mais confiança.' },
  ];

  const questions = [
    'Vale a pena aportar em PETR4 agora?',
    'Qual a diferença entre CDB e Tesouro Direto?',
    'Meus FIIs estão bem diversificados?',
    'O que aconteceu com o Ibovespa hoje?',
    'Como montar uma carteira para começar?',
    'Esse dividendo é sustentável?',
  ];

  const faqData = [
    { q: 'A Akira dá conselho de compra/venda?', a: 'A Akira não substitui o investidor. Ela mostra as opções com clareza; a decisão é sua.' },
    { q: 'É seguro? Meus dados ficam protegidos?', a: 'Sim. Seus dados são protegidos com criptografia e nunca são compartilhados. Você controla o que a Akira acessa.' },
    { q: 'Preciso pagar para usar?', a: 'Não. Você cria sua conta e começa a usar de graça, sem cartão de crédito. Recursos avançados são opcionais.' },
    { q: 'Funciona para iniciantes?', a: 'Sim. A Akira traduz o mercado em linguagem clara, ideal para quem está dando os primeiros passos.' },
  ];

  function renderAdvantages() {
    const grid = document.getElementById('advantages-grid');
    grid.innerHTML = advantages.map((adv) => `
      <div class="adv-card">
        <div class="adv-icon">${adv.icon}</div>
        <h3 class="adv-title">${adv.title}</h3>
        <p class="adv-desc">${adv.desc}</p>
      </div>
    `).join('');
  }

  function renderSteps() {
    const list = document.getElementById('steps-list');
    list.innerHTML = steps.map((step) => `
      <div class="step">
        <div class="step-marker">
          <div class="step-num">${step.n}</div>
          <div class="step-line"></div>
        </div>
        <div class="step-body">
          <h3 class="step-title">${step.title}</h3>
          <p class="step-desc">${step.desc}</p>
        </div>
      </div>
    `).join('');
  }

  function renderQuestions() {
    const wrap = document.getElementById('questions-wrap');
    wrap.innerHTML = questions.map((q) => `
      <div class="question-pill">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        ${q}
      </div>
    `).join('');
  }

  function renderFaq() {
    const list = document.getElementById('faq-list');
    list.innerHTML = faqData.map((item, i) => `
      <div class="faq-item" data-index="${i}">
        <button class="faq-question" type="button" aria-expanded="false">
          ${item.q}
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer-wrap">
          <p class="faq-answer">${item.a}</p>
        </div>
      </div>
    `).join('');

    list.querySelectorAll('.faq-item').forEach((el) => {
      const button = el.querySelector('.faq-question');
      button.addEventListener('click', () => {
        const isOpen = el.classList.contains('open');
        list.querySelectorAll('.faq-item.open').forEach((openEl) => {
          openEl.classList.remove('open');
          openEl.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          el.classList.add('open');
          button.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  renderAdvantages();
  renderSteps();
  renderQuestions();
  renderFaq();
})();
