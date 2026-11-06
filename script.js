const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuButton?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
  nav.style.position = 'absolute'; nav.style.top = '73px'; nav.style.left = '0'; nav.style.right = '0';
  nav.style.padding = '20px 7vw'; nav.style.background = '#f8f4ec'; nav.style.flexDirection = 'column'; nav.style.alignItems = 'flex-start';
});
