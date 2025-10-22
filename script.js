// ===============================
// Dynamic background animation
// ===============================
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
let w, h, particles;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  createParticles();
}
window.addEventListener("resize", resize);

function createParticles() {
  particles = [];
  for (let i = 0; i < 70; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 2 + 1
    });
  }
}

function draw() {
  ctx.fillStyle = "rgba(10,15,30,0.3)";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#6ee7b7";
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(draw);
}

resize();
draw();

// ===============================
// Main content interactivity
// ===============================
document.getElementById('year').textContent = new Date().getFullYear();

const projects = [
  {title: 'PhishGuardX (concept)', desc: 'Spear phishing detection app (React Native + Flask)'},
  {title: 'Malware Analysis Lab', desc: 'Guides & scripts for safe dynamic/static analysis'},
  {title: 'POS System (course)', desc: 'C++ project for class'}
];

const list = document.getElementById('project-list');
projects.forEach(p => {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${p.title}</strong><div style="font-size:13px;color:#9aa4b2;margin-top:6px">${p.desc}</div>`;
  list.appendChild(li);
});

document.getElementById('cta').addEventListener('click', () => {
  document.querySelector('#projects').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const result = document.getElementById('form-result');
  result.textContent = `Thanks ${form.name.value}! I will contact you at ${form.email.value}.`;
  form.reset();
});
