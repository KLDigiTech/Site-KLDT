// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== BURGER MOBILE =====
const navBurger = document.getElementById('navBurger');
const navMobile = document.getElementById('navMobile');

if (navBurger && navMobile) {
    navBurger.addEventListener('click', () => {
        navBurger.classList.toggle('open');
        navMobile.classList.toggle('open');
    });
    navMobile.querySelectorAll('.nav-link-mobile').forEach(link => {
        link.addEventListener('click', () => {
            navBurger.classList.remove('open');
            navMobile.classList.remove('open');
        });
    });
}

// ===== FORMULAIRE CONTACT =====
const textarea = document.getElementById('message');
const btnEnvoyer = document.getElementById('btnEnvoyer');
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const enveloppe = document.createElement('span');
        enveloppe.textContent = '✉️';
        const rect = btnEnvoyer.getBoundingClientRect();
        enveloppe.style.cssText = `
            position: fixed;
            font-size: 4rem;
            top: ${rect.top + rect.height/2}px;
            left: ${rect.left + rect.width/2}px;
            transform: translate(-50%, -50%);
            z-index: 9999;
            transition: all 1.5s ease-in;
        `;
        document.body.appendChild(enveloppe);
        btnEnvoyer.classList.add('sending');
        btnEnvoyer.querySelector('.btn-text').style.opacity = '0';
        setTimeout(() => {
            enveloppe.style.transform = 'translate(100vw, -100vh) scale(2)';
            enveloppe.style.opacity = '0';
        }, 100);
        setTimeout(() => {
            enveloppe.remove();
            btnEnvoyer.querySelector('.btn-text').textContent = 'Envoyé !';
            btnEnvoyer.querySelector('.btn-text').style.opacity = '1';
            btnEnvoyer.classList.add('sent');
            contactForm.reset();
        }, 2000);
    });
}

if (textarea) {
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
}