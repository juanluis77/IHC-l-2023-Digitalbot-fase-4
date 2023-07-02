// Agrega un evento de carga para ejecutar el código cuando la página esté lista
window.addEventListener('DOMContentLoaded', (event) => {
    // Obtiene todos los elementos del menú que tienen un submenú desplegable
    const dropdowns = document.querySelectorAll('.dropdown');
  
    // Itera sobre cada elemento y agrega los eventos de mouse necesarios
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('mouseenter', () => {
        dropdown.classList.add('active');
      });
  
      dropdown.addEventListener('mouseleave', () => {
        dropdown.classList.remove('active');
      });
    });
  });
  