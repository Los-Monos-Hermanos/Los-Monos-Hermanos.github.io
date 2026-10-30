const starsEl = document.getElementById('stars');
for (let i = 0; i < 120; i++) {
  const s = document.createElement('span');
  const size = Math.random() * 2 + 0.5;
  s.style.cssText = `
    width:${size}px;height:${size}px;
    top:${Math.random() * 100}%;
    left:${Math.random() * 100}%;
    --d:${3 + Math.random() * 5}s;
    --delay:${Math.random() * 6}s;
    --op:${0.3 + Math.random() * 0.6};
  `;
  starsEl.appendChild(s);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
