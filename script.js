function greet(name) {
  return "Hello, " + name + "!";
}

// Toggle navigation menu visibility
function toggleMenu() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('visible');
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Filter projects by category (example implementation)
function filterProjects(category) {
  document.querySelectorAll('#projects article').forEach(article => {
    if (category === 'all' || article.dataset.category === category) {
      article.style.display = '';
    } else {
      article.style.display = 'none';
    }
  });
}

// Lightbox effect for project images
document.querySelectorAll('#projects img').forEach(img => {
  img.addEventListener('click', function() {
    let modal = document.createElement('div');
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
      <div class="lightbox-content">
        <img src="${this.src}" alt="${this.alt}" />
        <span class="lightbox-close">&times;</span>
      </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector('.lightbox-close').onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  });
});

// Form validation for contact form
document.querySelector('form').addEventListener('submit', function(e) {
  let valid = true;
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name) {
    valid = false;
    alert('Please enter your name.');
  } else if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    valid = false;
    alert('Please enter a valid email.');
  } else if (!message) {
    valid = false;
    alert('Please enter your message.');
  }

  if (!valid) e.preventDefault();
});