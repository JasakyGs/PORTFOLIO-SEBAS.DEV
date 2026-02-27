/* ============================================
   SCRIPT.JS - FUNCIONALIDADES DEL PORTAFOLIO
   ============================================ */

// ============================================
// 1. AÑO DINÁMICO EN FOOTER
// Obtiene el año actual y lo muestra automáticamente
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const añoElemento = document.getElementById('año-actual');
    if (añoElemento) {
        const añoActual = new Date().getFullYear();
        añoElemento.textContent = añoActual;
    }
});

// ============================================
// 2. ANIMACIONES FADE-IN AL HACER SCROLL
// Usa IntersectionObserver para detectar cuando
// los elementos entran en la vista
// ============================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const elementosFadeIn = document.querySelectorAll('.fade-in');
    elementosFadeIn.forEach(el => observer.observe(el));
});

// ============================================
// 3. NAVBAR RESPONSIVE - MENÚ HAMBURGUESA
// Alterna la visibilidad del menú en móviles
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// ============================================
// 4. CAMBIO DE ESTILO DEL NAVBAR AL HACER SCROLL
// Añade sombra cuando se hace scroll
// ============================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// 5. SUAVIZADO DE SCROLL PARA ENLACES INTERNOS
// (Opcional - ya implementado en CSS con scroll-behavior)
// ============================================

// ============================================
// 6. ANIMACIÓN DE CARGADA INICIAL
// Añade clase para animación del Hero
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.hero .fade-in');
    heroElements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.2}s`;
        el.classList.add('visible');
    });
});