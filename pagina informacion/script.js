// SLIDER MEJORADO - Una imagen a la vez con indicadores
let index = 0;
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track a');
const indicators = document.querySelectorAll('.slider-indicator');
const totalSlides = slides.length;

function showSlide(i) {
  index = (i + totalSlides) % totalSlides;
  const translateX = -index * 100;
  track.style.transform = `translateX(${translateX}%)`;
  
  // Actualizar indicadores
  indicators.forEach((indicator, idx) => {
    if (idx === index) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

// Event listeners para los botones
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

// Event listeners para los indicadores
indicators.forEach((indicator, idx) => {
  indicator.addEventListener('click', () => {
    showSlide(idx);
  });
});

// Auto-play del slider
let autoPlayInterval = setInterval(nextSlide, 5000);

// Pausar auto-play al hacer hover
const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', () => {
  clearInterval(autoPlayInterval);
});

slider.addEventListener('mouseleave', () => {
  autoPlayInterval = setInterval(nextSlide, 5000);
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  }
});

// FILTRADO DE NOTICIAS MEJORADO
document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('[data-category]');
  const noticias = document.querySelectorAll('.noticia');
  const slider = document.querySelector('.slider');

  // Función para filtrar noticias
  function filtrarNoticias(categoriaSeleccionada) {
    let mostrarSlider = categoriaSeleccionada === 'General';
    
    // Mostrar/ocultar slider
    if (mostrarSlider) {
      slider.classList.remove('oculto');
    } else {
      slider.classList.add('oculto');
    }

    // Filtrar noticias
    noticias.forEach(noticia => {
      const categorias = noticia.getAttribute('data-category');
      
      if (categoriaSeleccionada === 'General' || categorias.includes(categoriaSeleccionada)) {
        noticia.classList.remove('hidden');
        // Animación de entrada
        noticia.style.opacity = '0';
        noticia.style.transform = 'translateY(20px)';
        setTimeout(() => {
          noticia.style.transition = 'all 0.3s ease';
          noticia.style.opacity = '1';
          noticia.style.transform = 'translateY(0)';
        }, 100);
      } else {
        noticia.classList.add('hidden');
      }
    });
  }

  // Event listeners para los botones de filtro
  botones.forEach(boton => {
    boton.addEventListener('click', e => {
      e.preventDefault();

      // Remover clase activa de todos los botones
      botones.forEach(b => b.classList.remove('active'));
      
      // Agregar clase activa al botón clickeado
      boton.classList.add('active');

      const categoriaSeleccionada = boton.getAttribute('data-category');
      filtrarNoticias(categoriaSeleccionada);
    });
  });

  // Mostrar todas las noticias por defecto
  filtrarNoticias('General');
  
  // Marcar el botón "Todo" como activo por defecto
  const botonGeneral = document.querySelector('[data-category="General"]');
  if (botonGeneral) {
    botonGeneral.classList.add('active');
  }
});

// Mejorar la experiencia del dropdown menu
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    const dropdownLink = dropdown.querySelector('a');
    
    // Toggle dropdown al hacer clic
    dropdownLink.addEventListener('click', (e) => {
      e.preventDefault();
      const isVisible = dropdownMenu.style.opacity === '1';
      
      if (isVisible) {
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.transform = 'translateY(-10px)';
        dropdownMenu.style.pointerEvents = 'none';
      } else {
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.visibility = 'visible';
        dropdownMenu.style.transform = 'translateY(0)';
        dropdownMenu.style.pointerEvents = 'auto';
      }
    });
    
    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.transform = 'translateY(-10px)';
        dropdownMenu.style.pointerEvents = 'none';
      }
    });
    
    // Manejar teclado para accesibilidad
    dropdown.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isVisible = dropdownMenu.style.opacity === '1';
        
        if (isVisible) {
          dropdownMenu.style.opacity = '0';
          dropdownMenu.style.visibility = 'hidden';
          dropdownMenu.style.transform = 'translateY(-10px)';
          dropdownMenu.style.pointerEvents = 'none';
        } else {
          dropdownMenu.style.opacity = '1';
          dropdownMenu.style.visibility = 'visible';
          dropdownMenu.style.transform = 'translateY(0)';
          dropdownMenu.style.pointerEvents = 'auto';
        }
      }
    });
  });
});


