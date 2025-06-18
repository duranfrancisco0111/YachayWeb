// SLIDER
let index = 0;
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track a');
const totalSlides = slides.length;

function showSlide(i) {
  index = (i + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(index - 1);
});

document.querySelector('.next').addEventListener('click', () => {
  showSlide(index + 1);
});

setInterval(() => {
  showSlide(index + 1);
}, 5000);

// FILTRADO DE NOTICIAS
document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('[data-category]');
  const noticias = document.querySelectorAll('.noticia');
  const slider = document.querySelector('.slider');

  botones.forEach(boton => {
    boton.addEventListener('click', e => {
      e.preventDefault();

      const categoriaSeleccionada = boton.getAttribute('data-category');

      let mostrarSlider = categoriaSeleccionada === 'General';
      slider.classList.toggle('oculto', !mostrarSlider);

      noticias.forEach(noticia => {
        const categorias = noticia.getAttribute('data-category');

        if (
          categoriaSeleccionada === 'General' ||
          categorias.includes(categoriaSeleccionada)
        ) {
          noticia.classList.remove('hidden');
        } else {
          noticia.classList.add('hidden');
        }
      });
    });
  });
});


