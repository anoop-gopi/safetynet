const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (toggleBtn && nav) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });
}
