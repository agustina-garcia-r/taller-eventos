document.addEventListener('DOMContentLoaded', function () {
    const divv = document.getElementById('undiv');
  
    divv.addEventListener('click', function () {
      alert('Hola! Soy el div');
    });
  
    const button = document.querySelector('button');
  
    button.addEventListener('click', function (event) {
      event.stopPropagation(); 
      alert('Hola!'); 
    });
  
   
    const divsinpropagacion = document.getElementById('divsinpropagacion');
    
    divsinpropagacion.addEventListener('click', function (event) {
      event.stopPropagation();
      alert('Hola! Soy el div sin propagación');
    });
  });
  
  
  
  