<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bashar | Personal Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <canvas id="bg"></canvas> <!-- animated background -->

  <header class="site-header">
    <div class="container">
      <h1 class="logo">Bashar</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <main class="container">
    <section class="hero">
      <h2>Hello — I build things on the web</h2>
      <p>Student • Security enthusiast • Learner</p>
      <button id="cta">View Projects</button>
    </section>

    <section id="about">
      <h3>About Me</h3>
      <p>I’m Bashar — I study computing and like reverse engineering, malware analysis, and web projects.</p>
    </section>

    <section id="projects">
      <h3>Projects</h3>
      <ul id="project-list"></ul>
    </section>

    <section id="contact">
      <h3>Contact</h3>
      <form id="contact-form">
        <label>Name <input type="text" name="name" required></label>
        <label>Email <input type="email" name="email" required></label>
        <label>Message <textarea name="message" required></textarea></label>
        <button type="submit">Send</button>
      </form>
      <p id="form-result" style="margin-top:10px;color:var(--accent)"></p>
    </section>
  </main>

  <footer class="site-footer">
    © <span id="year"></span> Bashar — Hosted on GitHub Pages
  </footer>

  <script src="script.js"></script>
</body>
</html>
