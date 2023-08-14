document.addEventListener('DOMContentLoaded', function () {
    const divv = document.getElementById('undiv');
  
    divv.addEventListener('click', function () {
      alert('Hola! Soy el div');
    });
  
    const button = document.querySelector('button');
  
    button.addEventListener('click', function (event) {
      event.stopPropagation(); // Detener la propagación del evento del botón
      alert('Hola!'); // Alerta del botón
    });
  
    // Agregar un nuevo listener para el evento click en el div que no propague
    const divWithoutPropagation = document.getElementById('divWithoutPropagation');
    
    divWithoutPropagation.addEventListener('click', function (event) {
      event.stopPropagation();
      alert('Hola! Soy el div sin propagación');
    });
  });
  
  
  
  