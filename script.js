// Accessible mobile navigation shared by the home and project pages.
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav') || document.querySelector('.site-header nav');

if (menuButton && nav) {
  const closeMenu = () => {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    menuButton.textContent = '☰';
  };

  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    menuButton.textContent = isOpen ? '✕' : '☰';
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeMenu();
  });
}

const printChecklistButton = document.querySelector('.print-checklist');
printChecklistButton?.addEventListener('click', () => {
  window.print();
});

// Prepare a project enquiry locally; the visitor chooses whether to send it in WhatsApp.
const projectEnquiryForm = document.querySelector('#project-enquiry-form');
projectEnquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const requestType = projectEnquiryForm.querySelector('#enquiry-purpose')?.value;
  const notes = (projectEnquiryForm.querySelector('#enquiry-note')?.value || '')
    .trim().replace(/\s+/g, ' ').slice(0, 240);
  const requests = {
    'site-visit': 'Please help me schedule a site visit.',
    inventory: 'Please share the current plot inventory and a written price sheet.',
    documents: 'Please share RERA documentation and the applicable approved-layout reference.',
    'call-back': 'Please contact me to discuss the project.'
  };
  const selectedRequest = requests[requestType] || requests['site-visit'];
  const message = [
    'Namaste Balaji Properties Jaipur,',
    'I am enquiring about Riyasat Paradise, Village Vatika, Jaipur (RERA RAJ/P/2025/3745).',
    selectedRequest,
    notes ? 'Additional question: ' + notes : '',
    'Please help me verify the latest project details before booking.'
  ].filter(Boolean).join('\n');

  window.location.assign('https://wa.me/919116990932?text=' + encodeURIComponent(message));
});
