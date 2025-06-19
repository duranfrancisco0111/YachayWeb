/**
 * YachayWeb - Script Principal Optimizado
 * Funcionalidades mejoradas para accesibilidad, rendimiento y UX
 */

(function() {
    'use strict';

    // Configuración
    const CONFIG = {
        lazyLoadThreshold: 0.1,
        scrollOffset: 100,
        animationDuration: 300
    };

    // Clase principal para gestionar la aplicación
    class YachayWebApp {
        constructor() {
            this.init();
        }

        init() {
            this.setupEventListeners();
            this.initializeLazyLoading();
            this.setupNavigation();
            this.setupAccessibility();
            this.setupPerformanceOptimizations();
        }

        setupEventListeners() {
            // Event listener para cuando el DOM esté listo
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
            } else {
                this.onDOMReady();
            }

            // Event listeners para scroll y resize
            window.addEventListener('scroll', this.debounce(this.handleScroll.bind(this), 16));
            window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
        }

        onDOMReady() {
            console.log('YachayWeb - Aplicación inicializada');
            this.setupSmoothScrolling();
            this.setupFormValidation();
            this.setupInteractiveElements();
        }

        // Navegación mejorada
        setupNavigation() {
            const menuItems = document.querySelectorAll('.menu > li > a[aria-haspopup="true"]');
            
            menuItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.toggleSubmenu(item);
                });

                // Soporte para teclado
                item.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.toggleSubmenu(item);
                    }
                });
            });

            // Cerrar submenús al hacer clic fuera
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.menu')) {
                    this.closeAllSubmenus();
                }
            });
        }

        toggleSubmenu(item) {
            const submenu = item.nextElementSibling;
            const isExpanded = item.getAttribute('aria-expanded') === 'true';
            
            // Cerrar todos los submenús primero
            this.closeAllSubmenus();
            
            if (!isExpanded) {
                item.setAttribute('aria-expanded', 'true');
                submenu.style.opacity = '1';
                submenu.style.visibility = 'visible';
                submenu.style.transform = 'translateY(0)';
            }
        }

        closeAllSubmenus() {
            const menuItems = document.querySelectorAll('.menu > li > a[aria-haspopup="true"]');
            menuItems.forEach(item => {
                item.setAttribute('aria-expanded', 'false');
                const submenu = item.nextElementSibling;
                if (submenu) {
                    submenu.style.opacity = '0';
                    submenu.style.visibility = 'hidden';
                    submenu.style.transform = 'translateY(-10px)';
                }
            });
        }

        // Lazy loading optimizado
        initializeLazyLoading() {
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            this.loadImage(entry.target);
                            observer.unobserve(entry.target);
                        }
                    });
                }, {
                    rootMargin: `${CONFIG.lazyLoadThreshold * 100}%`
                });

                const lazyImages = document.querySelectorAll('img[data-src]');
                lazyImages.forEach(img => imageObserver.observe(img));
            } else {
                // Fallback para navegadores antiguos
                this.loadAllImages();
            }
        }

        loadImage(img) {
            const src = img.dataset.src;
            if (src) {
                img.src = src;
                img.classList.remove('lazy');
                img.classList.add('loaded');
                img.removeAttribute('data-src');
            }
        }

        loadAllImages() {
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => this.loadImage(img));
        }

        // Scroll suave mejorado
        setupSmoothScrolling() {
            const links = document.querySelectorAll('a[href^="#"]');
            
            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    const href = link.getAttribute('href');
                    if (href === '#') return;
                    
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        this.scrollToElement(target);
                    }
                });
            });
        }

        scrollToElement(element) {
            const offsetTop = element.offsetTop - CONFIG.scrollOffset;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }

        // Accesibilidad mejorada
        setupAccessibility() {
            // Skip link functionality
            const skipLink = document.querySelector('.skip-link');
            if (skipLink) {
                skipLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(skipLink.getAttribute('href'));
                    if (target) {
                        target.focus();
                        this.scrollToElement(target);
                    }
                });
            }

            // Focus management
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    document.body.classList.add('keyboard-navigation');
                }
            });

            document.addEventListener('mousedown', () => {
                document.body.classList.remove('keyboard-navigation');
            });

            // ARIA live regions
            this.setupLiveRegions();
        }

        setupLiveRegions() {
            // Crear región live para notificaciones
            const liveRegion = document.createElement('div');
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.className = 'sr-only';
            document.body.appendChild(liveRegion);
        }

        // Validación de formularios
        setupFormValidation() {
            const forms = document.querySelectorAll('form');
            
            forms.forEach(form => {
                form.addEventListener('submit', (e) => {
                    if (!this.validateForm(form)) {
                        e.preventDefault();
                    }
                });

                // Validación en tiempo real
                const inputs = form.querySelectorAll('input, select, textarea');
                inputs.forEach(input => {
                    input.addEventListener('blur', () => this.validateField(input));
                    input.addEventListener('input', () => this.clearFieldError(input));
                });
            });
        }

        validateForm(form) {
            const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isValid = false;
                }
            });

            return isValid;
        }

        validateField(field) {
            const value = field.value.trim();
            const isRequired = field.hasAttribute('required');
            
            if (isRequired && !value) {
                this.showFieldError(field, 'Este campo es obligatorio');
                return false;
            }

            // Validaciones específicas
            if (field.type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    this.showFieldError(field, 'Ingrese un email válido');
                    return false;
                }
            }

            if (field.type === 'tel' && value) {
                const phoneRegex = /^[0-9]{8,9}$/;
                if (!phoneRegex.test(value)) {
                    this.showFieldError(field, 'Ingrese un teléfono válido');
                    return false;
                }
            }

            this.clearFieldError(field);
            return true;
        }

        showFieldError(field, message) {
            this.clearFieldError(field);
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'field-error';
            errorDiv.textContent = message;
            errorDiv.setAttribute('role', 'alert');
            
            field.parentNode.appendChild(errorDiv);
            field.classList.add('error');
        }

        clearFieldError(field) {
            const errorDiv = field.parentNode.querySelector('.field-error');
            if (errorDiv) {
                errorDiv.remove();
            }
            field.classList.remove('error');
        }

        // Elementos interactivos
        setupInteractiveElements() {
            // Botones con estados de carga
            const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .button-action');
            
            buttons.forEach(button => {
                button.addEventListener('click', (e) => {
                    if (button.classList.contains('loading')) {
                        e.preventDefault();
                        return;
                    }
                    
                    // Agregar estado de carga si es necesario
                    if (button.type === 'submit') {
                        this.setButtonLoading(button, true);
                    }
                });
            });

            // Tarjetas interactivas
            const cards = document.querySelectorAll('.service-card, .consultoria-card, .nosotros-card, .info-card');
            
            cards.forEach(card => {
                card.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        const link = card.querySelector('a');
                        if (link) {
                            link.click();
                        }
                    }
                });
            });
        }

        setButtonLoading(button, loading) {
            if (loading) {
                button.classList.add('loading');
                button.disabled = true;
                const originalText = button.textContent;
                button.dataset.originalText = originalText;
                button.textContent = 'Cargando...';
            } else {
                button.classList.remove('loading');
                button.disabled = false;
                const originalText = button.dataset.originalText;
                if (originalText) {
                    button.textContent = originalText;
                }
            }
        }

        // Optimizaciones de rendimiento
        setupPerformanceOptimizations() {
            // Preload de recursos críticos
            this.preloadCriticalResources();
            
            // Optimización de imágenes
            this.optimizeImages();
            
            // Cache de elementos frecuentemente usados
            this.cacheElements();
        }

        preloadCriticalResources() {
            const criticalResources = [
                'pagina denuncias/index.html',
                'pagina mapa/index.html',
                'pagina guias/index.html'
            ];

            criticalResources.forEach(resource => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = resource;
                document.head.appendChild(link);
            });
        }

        optimizeImages() {
            const images = document.querySelectorAll('img');
            
            images.forEach(img => {
                // Agregar loading lazy nativo si está disponible
                if ('loading' in HTMLImageElement.prototype) {
                    img.loading = 'lazy';
                }
                
                // Agregar atributos de accesibilidad
                if (!img.alt) {
                    img.alt = 'Imagen descriptiva';
                }
            });
        }

        cacheElements() {
            // Cache de elementos frecuentemente usados
            this.cachedElements = {
                nav: document.querySelector('nav'),
                header: document.querySelector('header'),
                main: document.querySelector('main'),
                footer: document.querySelector('footer')
            };
        }

        // Event handlers
        handleScroll() {
            // Implementar funcionalidades de scroll si es necesario
            // Por ejemplo, mostrar/ocultar navegación, animaciones, etc.
        }

        handleResize() {
            // Manejar cambios de tamaño de ventana
            this.closeAllSubmenus();
        }

        // Utilidades
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        // Métodos públicos para uso externo
        showNotification(message, type = 'info') {
            const liveRegion = document.querySelector('[aria-live="polite"]');
            if (liveRegion) {
                liveRegion.textContent = message;
            }
        }

        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    // Inicializar la aplicación cuando el script se carga
    const app = new YachayWebApp();

    // Exponer la aplicación globalmente para uso externo
    window.YachayWebApp = app;

})(); 