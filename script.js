const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.textContent = open ? '×' : '☰';
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.textContent = '☰';
}));

const programs = {
  explorers: {
    title: 'Canto & Music Explorers',
    sub: 'Un program de dezvoltare prin voce, muzică și mișcare',
    chips: ['Clasele I–VIII', '90 minute', 'Maximum 10 cursanți', '500 lei / 4 ședințe'],
    intro: 'Programul îi ajută pe copii să își descopere vocea, să își dezvolte aptitudinile muzicale și să capete încredere în propriile resurse. Activitățile sunt gândite ca o călătorie artistică și personală.',
    sections: [
      ['Ce oferă programul', [
        'Canto de grup și armonie — cursanții învață să cânte împreună, să se asculte și să își sincronizeze vocile.',
        'Tehnică vocală sănătoasă — respirație corectă și folosirea vocii fără efort.',
        'Ritm și educație muzicală prin joc.',
        'Mișcare și expresie corporală pentru transmiterea emoției.',
        'Pregătire pentru scenă și gestionarea emoțiilor în fața publicului.'
      ]],
      ['Experiența scenei inclusă', [
        'Spectacol de final de semestru.',
        'Participări la evenimente tematice și activități conexe, incluse în abonament.'
      ]],
      ['Organizare', [
        'Junior Explorers: clasele I–IV.',
        'Teen Explorers: clasele V–VIII.',
        'Abonamentul cuprinde 4 ședințe și este valabil 31 de zile.'
      ]]
    ]
  },
  canto: {
    title: 'Canto individual',
    sub: 'Tehnică vocală, intonație și interpretare',
    chips: ['6+ ani', '1 cursant : 1 profesor', '50 minute', '600 lei / lună'],
    intro: 'Cursul se adresează copiilor, adolescenților și adulților care vor să învețe să cânte corect sau să își perfecționeze tehnica. Obiectivul este formarea unui aparat fonator sănătos, controlul vocii și dezvoltarea auzului muzical.',
    sections: [
      ['Specificul cursului', [
        'Controlul respirației și postură.',
        'Emisie vocală și intonație.',
        'Studiu pe repertoriu personalizat.',
        'Interpretare și expresivitate.'
      ]],
      ['Beneficii incluse', [
        'Atelier lunar de canto cu ceilalți cursanți, pentru gestionarea emoțiilor și acomodarea cu un public real.',
        'Acces la audiții interne și activități practice organizate de școală.'
      ]],
      ['Organizare', [
        'Pachetul lunar include 4 ședințe individuale și 1 atelier de grup.',
        'Valabilitate: 31 de zile de la achiziție.'
      ]]
    ]
  },
  pian: {
    title: 'Curs individual de pian',
    sub: 'Dezvoltare muzicală prin tehnică, interpretare și comunitate',
    chips: ['6+ ani', '1 cursant : 1 profesor', '50 minute', '600 lei / lună'],
    intro: 'Cursul oferă îndrumare 1 la 1, iar ritmul de învățare este adaptat fiecărui cursant. Scopul este dezvoltarea sensibilității muzicale, nu doar a execuției tehnice.',
    sections: [
      ['Ce oferă cursul', [
        'Tehnică și postură corectă.',
        'Teorie muzicală aplicată.',
        'Repertoriu personalizat.',
        'Dezvoltare cognitivă și înțelegerea logicii muzicale.'
      ]],
      ['Comunitate și evenimente', [
        'Atelier lunar de grup pentru schimb de experiență și depășirea emoțiilor într-un mediu sigur.',
        'Participări la activități, audiții colegiale și evenimente tematice.'
      ]],
      ['Organizare', [
        'Pachetul lunar include 4 ședințe individuale și 1 atelier de grup.',
        'Valabilitate: 31 de zile de la achiziție.'
      ]]
    ]
  }
};

const modal = document.getElementById('programModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function openProgram(key) {
  const p = programs[key];
  if (!p) return;
  modalContent.innerHTML = `
    <h2 id="modalTitle">${p.title}</h2>
    <div class="modal-sub">${p.sub}</div>
    <div class="detail-chips">${p.chips.map(c => `<span>${c}</span>`).join('')}</div>
    <p>${p.intro}</p>
    ${p.sections.map(s => `
      <h3>${s[0]}</h3>
      <ul>${s[1].map(item => `<li>${item}</li>`).join('')}</ul>
    `).join('')}
    <a href="#contact" class="btn btn-primary modal-cta">Rezervă o lecție de probă</a>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => modalClose.focus(), 20);
  modalContent.querySelector('.modal-cta').addEventListener('click', closeModal);
}
function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
document.querySelectorAll('[data-program]').forEach(el => el.addEventListener('click', () => openProgram(el.dataset.program)));
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

const stageSlides = [
  {
    title: 'Spectacole de final de semestru',
    text: 'Un moment special în care cursanții îmbină cântecul, ritmul, mișcarea și bucuria de a fi pe scenă, într-un cadru pregătit cu grijă.',
    items: ['Winter Show și Summer Show', 'Pregătire pentru prezență scenică', 'Gestionarea emoțiilor în fața publicului']
  },
  {
    title: 'Audiții și evenimente tematice',
    text: 'Participările periodice îi ajută pe cursanți să își testeze progresul, să capete experiență și să rămână conectați la mediul artistic.',
    items: ['Audiții interne și micro-spectacole', 'Participări la concursuri și festivaluri', 'Activități tematice pe parcursul anului']
  },
  {
    title: 'Workshopuri și masterclass-uri',
    text: 'Sesiuni practice alături de profesioniști, concepute pentru a deschide perspective noi și pentru a transforma teoria în experiență reală.',
    items: ['Întâlniri cu profesioniști din domeniu', 'Exerciții practice și feedback aplicat', 'Comunitate și socializare artistică']
  }
];
let stageIndex = 0;
function renderStage() {
  const s = stageSlides[stageIndex];
  const card = document.getElementById('stageCard');
  card.style.opacity = '.25';
  card.style.transform = 'scale(.985)';
  setTimeout(() => {
    document.getElementById('stageTitle').textContent = s.title;
    document.getElementById('stageText').textContent = s.text;
    document.getElementById('stageList').innerHTML = s.items.map(i => `<span><b>✓</b>${i}</span>`).join('');
    card.style.opacity = '1';
    card.style.transform = 'scale(1)';
  }, 150);
}
document.getElementById('stagePrev').addEventListener('click', () => { stageIndex = (stageIndex - 1 + stageSlides.length) % stageSlides.length; renderStage(); });
document.getElementById('stageNext').addEventListener('click', () => { stageIndex = (stageIndex + 1) % stageSlides.length; renderStage(); });

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('success').style.display = 'block';
  e.currentTarget.reset();
});
