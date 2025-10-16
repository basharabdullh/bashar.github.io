// Basic interactivity — no frameworks, works on GitHub Pages
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
  // This is a demo — GitHub Pages is static, so we just show a message.
  result.textContent = `Thanks ${form.name.value}! I will contact you at ${form.email.value}.`;
  form.reset();
});
