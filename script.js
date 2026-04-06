/* ============================================
   SCRIPT.JS - FUNCIONALIDADES DEL PORTAFOLIO
   ============================================ */

// ============================================
// 1. TRADUCCIONES (i18n)
// ============================================
const translations = {
    es: {
        'nav.inicio': 'Inicio',
        'nav.sobre_mi': 'Sobre Mí',
        'nav.stack': 'Stack',
        'nav.proyectos': 'Proyectos',
        'nav.formacion': 'Formación',
        'nav.contacto': 'Contacto',
        'hero.descripcion': 'Perfil analítico orientado al aprendizaje continuo y mejora constante. Comprometido con el desarrollo web y el análisis de sistemas.',
        'hero.ver_proyectos': 'Ver Proyectos',
        'sobre_mi.titulo': 'Sobre Mí',
        'sobre_mi.texto1': 'Soy un desarrollador en formación con enfoque analítico y Disciplinado. Me comprometo con el aprendizaje continuo y la mejora constante en cada proyecto.',
        'sobre_mi.texto2': 'Mi interés se centra en el <strong>desarrollo web</strong> y el <strong>análisis de sistemas</strong>, buscando siempre soluciones eficientes y bien estructuradas.',
        'sobre_mi.texto3': 'Actualmente me encuentro en la <strong>etapa productiva</strong> de mi formación, buscando oportunidades para aplicar mis conocimientos y seguir creciendo profesionalmente.',
        'stack.titulo': 'Herramientas y tecnologías',
        'stack.frontend': 'Frontend',
        'stack.database': 'Base de Datos',
        'stack.version': 'Control de Versiones',
        'stack.ofimatica': 'Ofimática',
        'stack.ia': 'IA Aplicada',
        'stack.metodologias': 'Metodologías',
        'proyectos.titulo': 'Mis Trabajos',
        'proyectos.ver_detalles': 'Ver Detalles',
        'proyectos.inventario.desc': 'Sistema de gestión de inventario para tienda de ropa con control de stock y productos.',
        'proyectos.geekoh.desc': 'Página web para un juego de terror interactivo. Contiene información del juego y espacio para futuras descargas.',
        'proyectos.poderpedia.desc': 'Enciclopedia interactiva de un mundo de fantasía en constante desarrollo.',
        'formacion.titulo': 'Educación continua',
        'formacion.academica': 'Formación Académica',
        'formacion.presente': 'Presente',
        'formacion.tecnologo': 'Tecnólogo en Análisis y Desarrollo de Software',
        'formacion.analisis': 'Análisis de sistemas',
        'formacion.bd': 'Bases de datos',
        'formacion.qa': 'QA Testing',
        'formacion.documentacion': 'Documentación técnica',
        'formacion.metodologias': 'Metodologías de desarrollo',
        'formacion.estado': 'Estado: Etapa productiva en búsqueda',
        'formacion.certificaciones': 'Certificaciones',
        'cert.ingles': 'Inglés Niveles 2 y 3',
        'cert.marketing': 'Marketing Digital',
        'cert.powerbi': 'Power BI',
        'cert.ia': 'Creación de Contenido con IA',
        'cert.community': 'Community Manager',
        'cert.excel': 'Excel Desde Cero',
        'cert.freecodecamp': 'Full Stack Developer — FreeCodeCamp',
        'cert.en_progreso': 'En progreso (~60%)',
        'contacto.titulo': 'Conectemos',
        'contacto.texto': '¿Buscas un desarrollador comprometido y en formación? ¡Contáctame! Estoy disponible para nuevas oportunidades laborales.',
        'contacto.nombre': 'Nombre',
        'contacto.email': 'Email',
        'contacto.asunto': 'Asunto',
        'contacto.mensaje': 'Mensaje',
        'contacto.enviar': 'Enviar mensaje'
    },
    en: {
        'nav.inicio': 'Home',
        'nav.sobre_mi': 'About Me',
        'nav.stack': 'Stack',
        'nav.proyectos': 'Projects',
        'nav.formacion': 'Education',
        'nav.contacto': 'Contact',
        'hero.descripcion': 'Analytical profile oriented toward continuous learning and constant improvement. Committed to web development and systems analysis.',
        'hero.ver_proyectos': 'View Projects',
        'sobre_mi.titulo': 'About Me',
        'sobre_mi.texto1': 'I am a developer in training with an analytical and disciplined approach. I am committed to continuous learning and constant improvement in every project.',
        'sobre_mi.texto2': 'My interest is focused on <strong>web development</strong> and <strong>systems analysis</strong>, always seeking efficient and well-structured solutions.',
        'sobre_mi.texto3': 'I am currently in the <strong>productive stage</strong> of my training, seeking opportunities to apply my knowledge and continue growing professionally.',
        'stack.titulo': 'Tools and Technologies',
        'stack.frontend': 'Frontend',
        'stack.database': 'Database',
        'stack.version': 'Version Control',
        'stack.ofimatica': 'Office',
        'stack.ia': 'Applied AI',
        'stack.metodologias': 'Methodologies',
        'proyectos.titulo': 'My Work',
        'proyectos.ver_detalles': 'View Details',
        'proyectos.inventario.desc': 'Inventory management system for a clothing store with stock and product control.',
        'proyectos.geekoh.desc': 'Website for an interactive horror game. Contains game information and space for future downloads.',
        'proyectos.poderpedia.desc': 'Interactive encyclopedia of a fantasy world in constant development.',
        'formacion.titulo': 'Continuing Education',
        'formacion.academica': 'Academic Background',
        'formacion.presente': 'Present',
        'formacion.tecnologo': 'Technology Analyst in Software Development',
        'formacion.analisis': 'Systems Analysis',
        'formacion.bd': 'Databases',
        'formacion.qa': 'QA Testing',
        'formacion.documentacion': 'Technical Documentation',
        'formacion.metodologias': 'Development Methodologies',
        'formacion.estado': 'Status: Productive stage looking for opportunities',
        'formacion.certifications': 'Certifications',
        'cert.ingles': 'English Levels 2 and 3',
        'cert.marketing': 'Digital Marketing',
        'cert.powerbi': 'Power BI',
        'cert.ia': 'AI Content Creation',
        'cert.community': 'Community Manager',
        'cert.excel': 'Excel From Scratch',
        'cert.freecodecamp': 'Full Stack Developer — FreeCodeCamp',
        'cert.en_progreso': 'In progress (~60%)',
        'contacto.titulo': "Let's Connect",
        'contacto.texto': 'Looking for a committed developer in training? Contact me! I am available for new job opportunities.',
        'contacto.nombre': 'Name',
        'contacto.email': 'Email',
        'contacto.asunto': 'Subject',
        'contacto.mensaje': 'Message',
        'contacto.enviar': 'Send Message'
    },
    de: {
        'nav.inicio': 'Startseite',
        'nav.sobre_mi': 'Über mich',
        'nav.stack': 'Stack',
        'nav.proyectos': 'Projekte',
        'nav.formacion': 'Ausbildung',
        'nav.contacto': 'Kontakt',
        'hero.descripcion': 'Analytisches Profil mit Fokus auf kontinuierliches Lernen und ständige Verbesserung. Engagiert für Webentwicklung und Systemanalyse.',
        'hero.ver_proyectos': 'Projekte ansehen',
        'sobre_mi.titulo': 'Über mich',
        'sobre_mi.texto1': 'Ich bin ein Entwickler in Ausbildung mit analytischem und diszipliniertem Ansatz. Ich setze mich für kontinuierliches Lernen und ständige Verbesserung in jedem Projekt ein.',
        'sobre_mi.texto2': 'Mein Interesse gilt der <strong>Webentwicklung</strong> und der <strong>Systemanalyse</strong>, wobei ich stets effiziente und gut strukturierte Lösungen anstrebe.',
        'sobre_mi.texto3': 'Ich befinde mich derzeit in der <strong>produktiven Phase</strong> meiner Ausbildung und suche nach Möglichkeiten, mein Wissen anzuwenden und beruflich weiterzuwachsen.',
        'stack.titulo': 'Werkzeuge und Technologien',
        'stack.frontend': 'Frontend',
        'stack.database': 'Datenbank',
        'stack.version': 'Versionskontrolle',
        'stack.ofimatica': 'Bürosoftware',
        'stack.ia': 'Angewandte KI',
        'stack.metodologias': 'Methoden',
        'proyectos.titulo': 'Meine Arbeiten',
        'proyectos.ver_detalles': 'Details ansehen',
        'proyectos.inventario.desc': 'Inventarverwaltungssystem für einen Bekleidungsladen mit Bestands- und Produktkontrolle.',
        'proyectos.geekoh.desc': 'Webseite für ein interaktives Horrorspiel. Enthält Spielinformationen und Platz für zukünftige Downloads.',
        'proyectos.poderpedia.desc': 'Interaktive Enzyklopädie einer sich ständig entwickelnden Fantasiewelt.',
        'formacion.titulo': 'Weiterbildung',
        'formacion.academica': 'Akademische Ausbildung',
        'formacion.presente': 'Heute',
        'formacion.tecnologo': 'Technologe für Softwareanalyse und -entwicklung',
        'formacion.analisis': 'Systemanalyse',
        'formacion.bd': 'Datenbanken',
        'formacion.qa': 'QA-Tests',
        'formacion.documentacion': 'Technische Dokumentation',
        'formacion.metodologias': 'Entwicklungsmethoden',
        'formacion.estado': 'Status: Produktive Phase auf Jobsuche',
        'formacion.certifications': 'Zertifizierungen',
        'cert.ingles': 'Englisch Stufen 2 und 3',
        'cert.marketing': 'Digitales Marketing',
        'cert.powerbi': 'Power BI',
        'cert.ia': 'KI-Inhaltserstellung',
        'cert.community': 'Community Manager',
        'cert.excel': 'Excel von Null',
        'cert.freecodecamp': 'Full Stack Developer — FreeCodeCamp',
        'cert.en_progreso': 'In Bearbeitung (~60%)',
        'contacto.titulo': 'Verbinden wir uns',
        'contacto.texto': 'Suchen Sie einen engagierten Entwickler in Ausbildung? Kontaktieren Sie mich! Ich stehe für neue berufliche Möglichkeiten zur Verfügung.',
        'contacto.nombre': 'Name',
        'contacto.email': 'E-Mail',
        'contacto.asunto': 'Betreff',
        'contacto.mensaje': 'Nachricht',
        'contacto.enviar': 'Nachricht senden'
    },
    ru: {
        'nav.inicio': 'Главная',
        'nav.sobre_mi': 'Обо мне',
        'nav.stack': 'Стек',
        'nav.proyectos': 'Проекты',
        'nav.formacion': 'Образование',
        'nav.contacto': 'Контакт',
        'hero.descripcion': 'Аналитический профиль, ориентированный на непрерывное обучение и постоянное совершенствование. Связан с веб-разработкой и анализом систем.',
        'hero.ver_proyectos': 'Смотреть проекты',
        'sobre_mi.titulo': 'Обо мне',
        'sobre_mi.texto1': 'Я начинающий разработчик с аналитическим и дисциплинированным подходом. Я привержен непрерывному обучению и постоянному совершенствованию в каждом проекте.',
        'sobre_mi.texto2': 'Мой интерес сосредоточен на <strong>веб-разработке</strong> и <strong>анализе систем</strong>, всегда стремясь к эффективным и хорошо структурированным решениям.',
        'sobre_mi.texto3': 'В настоящее время я нахожусь в <strong>продуктивной стадии</strong> своей подготовки, ищу возможности применить свои знания и продолжать профессионально расти.',
        'stack.titulo': 'Инструменты и технологии',
        'stack.frontend': 'Фронтенд',
        'stack.database': 'База данных',
        'stack.version': 'Контроль версий',
        'stack.ofimatica': 'Офисные программы',
        'stack.ia': 'Прикладной ИИ',
        'stack.metodologias': 'Методологии',
        'proyectos.titulo': 'Мои работы',
        'proyectos.ver_detalles': 'Подробнее',
        'proyectos.inventario.desc': 'Система управления запасами для магазина одежды с контролем склада и продуктов.',
        'proyectos.geekoh.desc': 'Веб-сайт для интерактивной игры ужасов. Содержит информацию об игре и место для будущих загрузок.',
        'proyectos.poderpedia.desc': 'Интерактивная энциклопедия постоянно развивающегося фантастического мира.',
        'formacion.titulo': 'Непрерывное образование',
        'formacion.academica': 'Образование',
        'formacion.presente': 'По настоящее время',
        'formacion.tecnologo': 'Технолог анализа и разработки ПО',
        'formacion.analisis': 'Анализ систем',
        'formacion.bd': 'Базы данных',
        'formacion.qa': 'QA тестирование',
        'formacion.documentacion': 'Техническая документация',
        'formacion.metodologias': 'Методологии разработки',
        'formacion.estado': 'Статус: Продуктивный этап в поиске работы',
        'formacion.certifications': 'Сертификаты',
        'cert.ingles': 'Английский уровни 2 и 3',
        'cert.marketing': 'Цифровой маркетинг',
        'cert.powerbi': 'Power BI',
        'cert.ia': 'Создание контента с ИИ',
        'cert.community': 'Менеджер сообщества',
        'cert.excel': 'Excel с нуля',
        'cert.freecodecamp': 'Full Stack Developer — FreeCodeCamp',
        'cert.en_progreso': 'В процессе (~60%)',
        'contacto.titulo': 'Свяжитесь со мной',
        'contacto.texto': 'Ищете ответственного разработчика на этапе обучения? Свяжитесь со мной! Я доступен для новых карьерных возможностей.',
        'contacto.nombre': 'Имя',
        'contacto.email': 'Эл. почта',
        'contacto.asunto': 'Тема',
        'contacto.mensaje': 'Сообщение',
        'contacto.enviar': 'Отправить сообщение'
    }
};

const langFlags = {
    es: '🇪🇸',
    en: '🇺🇸',
    de: '🇩🇪',
    ru: '🇷🇺'
};

let currentLang = localStorage.getItem('lang') || 'es';

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.innerHTML = `<i class="fas fa-globe"></i> ${lang.toUpperCase()}`;
    }
    
    document.querySelectorAll('.lang-menu button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function initLanguage() {
    translatePage(currentLang);
    
    const langDropdown = document.getElementById('langDropdown');
    const langBtn = document.getElementById('langBtn');
    
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });
    }
    
    document.querySelectorAll('.lang-menu button').forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = btn.dataset.lang;
            currentLang = newLang;
            localStorage.setItem('lang', newLang);
            translatePage(newLang);
            langDropdown.classList.remove('open');
        });
    });
    
    document.addEventListener('click', () => {
        langDropdown.classList.remove('open');
    });
}

// ============================================
// 2. CAMBIO DE TEMA (LIGHT/DARK)
// ============================================
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}

// ============================================
// 3. AÑO DINÁMICO EN FOOTER
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
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
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
    
    initTheme();
    initLanguage();
});