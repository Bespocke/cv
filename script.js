(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  // ---------- Content ----------
  document.title = `${cvData.personal.firstName} ${cvData.personal.lastName} — Portfolio`;
  setText('.hero-first', cvData.personal.firstName);
  setText('.hero-last', cvData.personal.lastName);
  setText('.hero-meta p:first-child', cvData.personal.status);
  setText('.hero-meta p:last-child', cvData.personal.field);
  setText('.site-footer span:first-child', `© ${new Date().getFullYear()} ${cvData.personal.firstName} ${cvData.personal.lastName}`);
  setText('#year', new Date().getFullYear());

  const educationList = document.querySelector('#education-list');
  const experienceList = document.querySelector('#experience-list');

  const timelineTemplate = (item) => `
    <article class="timeline-item">
      <span class="timeline-period">${item.period}</span>
      <h3>${item.title}</h3>
      <p class="timeline-place">${item.place}</p>
      <p class="timeline-text">${item.text}</p>
    </article>`;

  educationList.innerHTML = cvData.education.map(timelineTemplate).join('');
  experienceList.innerHTML = cvData.experience.map(timelineTemplate).join('');

  const projectStage = document.querySelector('#projects-stage');
  projectStage.innerHTML = cvData.projects.map((project) => `
    <article class="project-scene">
      <div class="project-backdrop" style="background-image: url('${project.image}')"></div>
      <div class="project-overlay"></div>
      <div class="project-content">
        <div class="project-topline">
          <span>${project.number}</span>
          <span>${project.category}</span>
        </div>
        <h3>${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-bottomline">
          <div class="project-stack">${project.stack.map(tag => `<span>${tag}</span>`).join('')}</div>
          <a href="${project.link}" target="_blank" rel="noreferrer">Voir le projet <b>↗</b></a>
        </div>
      </div>
    </article>`).join('');

  const githubLink = document.querySelector('[data-contact="github"]');
  const emailLink = document.querySelector('[data-contact="email"]');
  const cvLink = document.querySelector('[data-contact="cv"]');
  githubLink.href = cvData.personal.github;
  emailLink.href = `mailto:${cvData.personal.email}`;
  cvLink.href = cvData.personal.cv;
  githubLink.querySelector('span').innerHTML = `<small>GitHub</small> ${cvData.personal.github.replace(/^https?:\/\/(www\.)?github\.com\//, '')}`;
  emailLink.querySelector('span').innerHTML = `<small>Email professionnel</small> ${cvData.personal.email}`;
  cvLink.querySelector('span').innerHTML =`<small>Curriculum Vitae</small> Télécharger mon CV`;
  
  // ---------- Navigation ----------
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  });

  // ---------- Motion ----------
  if (prefersReducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    document.body.classList.add('reduced-motion');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const cursorGlow = document.querySelector('.cursor-glow');
  window.addEventListener('pointermove', (event) => {
    gsap.to(cursorGlow, { x: event.clientX, y: event.clientY, duration: 0.6, ease: 'power3.out', overwrite: true });
  }, { passive: true });

  // Hero arrival.
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl
    .from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.8 })
    .from('.hero-first', { y: 90, opacity: 0, filter: 'blur(15px)', duration: 1.2 }, '-=0.4')
    .from('.hero-last', { y: 90, opacity: 0, filter: 'blur(15px)', duration: 1.2 }, '-=0.95')
    .from('.hero-meta p', { y: 18, opacity: 0, stagger: 0.08, duration: 0.7 }, '-=0.6')
    .from('.hero-bottom', { opacity: 0, y: 15, duration: 0.8 }, '-=0.3');

  gsap.to('.hero-content', {
    yPercent: -20,
    opacity: 0,
    scale: 0.97,
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.2 }
  });

  gsap.to('.hero-orbit-a', {
    rotation: 50,
    scale: 1.08,
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 }
  });

  gsap.to('.hero-orbit-b', {
    rotation: -30,
    yPercent: 20,
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 2 }
  });

  gsap.to('.nav-progress span', {
    scaleX: 1,
    ease: 'none',
    transformOrigin: 'left center',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true
    }
  });

  gsap.from('.intro-band .intro-copy', {
    y: 60,
    opacity: 0,
    scrollTrigger: { trigger: '.intro-band', start: 'top 80%', end: 'top 35%', scrub: 1 }
  });

  // Journey: pinned cinematic section + photo transitions.
  const journey = document.querySelector('.journey');
  const photos = gsap.utils.toArray('.journey-photo');
  const timelineItems = gsap.utils.toArray('.timeline-item');
  const journeyDuration = Math.max(1, Math.max(cvData.education.length, cvData.experience.length));

  gsap.set(photos.slice(1), { opacity: 0, scale: 1.06 });
  gsap.set(timelineItems, { opacity: 0, y: 45, filter: 'blur(8px)' });

  const journeyTl = gsap.timeline({
    scrollTrigger: {
      trigger: journey,
      start: 'top top',
      end: () => `+=${Math.max(2000, timelineItems.length * 430)}px`,
      pin: '.journey-pin',
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  });

  journeyTl
    .from('.journey-heading', { opacity: 0, y: 40, duration: 0.7 }, 0)
    .from('.column-label', { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 }, 0.1);

  const itemChunk = 0.72 / Math.max(4, timelineItems.length);
  timelineItems.forEach((item, index) => {
    journeyTl.to(item, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: itemChunk,
      ease: 'power3.out'
    }, 0.14 + index * itemChunk * 0.95);
  });

  photos.forEach((photo, index) => {
    if (index === 0) return;
    const point = 0.16 + (index / photos.length) * 0.72;
    journeyTl.to(photos[index - 1], { opacity: 0, scale: 1.015, duration: 0.12 }, point);
    journeyTl.to(photo, { opacity: 1, scale: 1, duration: 0.25 }, point + 0.04);
  });

  gsap.to('.journey-vignette', {
    opacity: 0.95,
    scrollTrigger: { trigger: journey, start: 'top top', end: 'bottom top', scrub: true }
  });

  // Projects: each scene is pinned in its own visual rhythm.
  const projectScenes = gsap.utils.toArray('.project-scene');
  projectScenes.forEach((scene, index) => {
    const backdrop = scene.querySelector('.project-backdrop');
    const overlay = scene.querySelector('.project-overlay');
    const content = scene.querySelector('.project-content');
    const title = scene.querySelector('h3');
    const desc = scene.querySelector('.project-description');
    const bottom = scene.querySelector('.project-bottomline');

    gsap.set(content, { y: 60, opacity: 0 });
    gsap.set([desc, bottom], { y: 28, opacity: 0 });
    gsap.set(backdrop, { scale: 1.12 });
    gsap.set(overlay, { opacity: 0.25 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scene,
        start: 'top 75%',
        end: 'bottom 25%',
        scrub: 1,
      }
    });

    tl.to(backdrop, { scale: 1.0, duration: 1 }, 0)
      .to(content, { y: 0, opacity: 1, duration: 0.35 }, 0.1)
      .to(title, { letterSpacing: '0.01em', duration: 0.35 }, 0.16)
      .to(desc, { y: 0, opacity: 1, duration: 0.25 }, 0.28)
      .to(bottom, { y: 0, opacity: 1, duration: 0.25 }, 0.38)
      .to(content, { y: -50, opacity: 0, duration: 0.28 }, 0.74)
      .to(overlay, { opacity: 0.45, duration: 0.25 }, 0.72);

    scene.querySelector('a').addEventListener('click', (e) => {
      if (scene.querySelector('a').getAttribute('href') === '#') e.preventDefault();
    });
  });

  gsap.from('.projects-heading', {
    y: 60,
    opacity: 0,
    scrollTrigger: { trigger: '.projects-heading', start: 'top 82%', end: 'top 45%', scrub: 1 }
  });

  gsap.from('.contact-grid', {
    y: 70,
    opacity: 0,
    scrollTrigger: { trigger: '.contact', start: 'top 80%', end: 'top 42%', scrub: 1 }
  });

  gsap.utils.toArray('.contact-link').forEach((link, index) => {
    gsap.from(link, {
      x: index % 2 ? 30 : -30,
      opacity: 0,
      scrollTrigger: { trigger: link, start: 'top 90%', end: 'top 70%', scrub: 1 }
    });
  });

  ScrollTrigger.refresh();
})();
