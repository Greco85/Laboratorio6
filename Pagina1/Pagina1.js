 // Obtén las referencias a los elementos que necesitas
 const BotonFusionar = document.querySelector('.btn-warning');
 const ImagenDelCarrusel = document.querySelectorAll('.carousel-item');
 const DivDescripciones = document.querySelector('.Descripcion-De-Transformacion');


 
 // Agrega un evento de clic al botón "FUSIONAR"
 BotonFusionar.addEventListener('click', fusionarImagenes);

 function fusionarImagenes() {
   // Encuentra el elemento activo en el carrusel
   const Imagen = document.querySelector('.carousel-item.active img');

    // Obtiene todos los elementos del carrusel, Encuentra el índice del elemento activo y lo guarda
const carruselItems = document.querySelectorAll('.carousel-item');
let indiceActivo = -1; 
carruselItems.forEach((elemento, indice) => {
  if (elemento.classList.contains('active')) {
    indiceActivo = indice;
  }
});

   switch (indiceActivo) {
    case 0:
        
        DivDescripciones.innerHTML = ''; 
        DivDescripciones.innerHTML = `
        <div class="col-6 card-body text-bg-dark d-flex flex-column justify-content-between">
        <p class="card-title text-center h5">Transfromacion: Kirby Congelado</p>
            <p class="card-text text-center"> El cuerpo de Kirby genera un aura de hielo, congelando a quien toque.</p> <!--AQUI VA IR LAS DESCRIPCIONES-->
            <BR>
            <p class="card-text text-center"> Los enemigos congelados se transfoman en bloques de hielo que pueden ser lanzados como proyectiles.</p> 
          </div>

          <div class="col-6 imagen-transformacion card-body text-bg-dark text-center">
            <img src="../imgs/Kirbycongelado.jpg" alt="KirbyCongelao">
          </div>
        
          <div class="card-header col-12" ></div>
        `;

      break;
    case 1:
        DivDescripciones.innerHTML = ''; 
        DivDescripciones.innerHTML = `
        <div class="col-6 card-body text-bg-dark d-flex flex-column justify-content-between">
        <p class="card-title text-center h5">Transfromacion: Kirby Erizo</p>
            <p class="card-text text-center"> El cuerpo de Kirby se recubre de enormes espinas, causando daño a quien lo toque, en este estado Kirby es inmóvil, aunque vuelve a la normalidad presionando B nuevamente.</p> <!--AQUI VA IR LAS DESCRIPCIONES-->
            <BR>
            <p class="card-text text-center"> Destruye a bloques y enemigos al mínimo contacto.</p> 
          </div>

          <div class="col-6 imagen-transformacion card-body text-bg-dark text-center">
            <img src="../imgs/Kirbyerizo.jpg" alt="KirbyErizo">
          </div>
        
          <div class="card-header col-12" ></div>
        `;
      break;
    case 2:
        DivDescripciones.innerHTML = ''; 
        DivDescripciones.innerHTML = `
        <div class="col-6 card-body text-bg-dark d-flex flex-column justify-content-between">
        <p class="card-title text-center h5">Transfromacion: Kirby Dormido</p>
            <p class="card-text text-center"> Kirby se toma una siesta y queda inmóvil durante un tiempo.</p> <!--AQUI VA IR LAS DESCRIPCIONES-->
            <p class="card-text text-center"> Es un poder inútil.</p> 
          </div>

          <div class="col-6 imagen-transformacion card-body text-bg-dark text-center">
            <img src="../imgs/Kirbydormir.jpg" alt="KirbyDormido">
          </div>
        
          <div class="card-header col-12" ></div>
        `;
      break;
    case 3:
        DivDescripciones.innerHTML = ''; 
        DivDescripciones.innerHTML = `
        <div class="col-6 card-body text-bg-dark d-flex flex-column justify-content-between">
        <p class="card-title text-center h5">Transfromacion: Kirby CON UNA SOMBRILLA </p>
            <p class="card-text text-center"> Kirby utiliza el paraguas como espada para atacar. Mientras esta quieto cubre su cabeza.</p> <!--AQUI VA IR LAS DESCRIPCIONES-->
            
            <p class="card-text text-center"> Muy útil como escudo para protegerse de cocos, enemigos y proyectiles que vienen de arriba, también sirve como espada.</p> 
          </div>

          <div class="col-6 imagen-transformacion card-body text-bg-dark text-center">
            <img src="../imgs/KirbySombrilla.jpg" alt="KirbySombrilla">
          </div>
        
          <div class="card-header col-12" ></div>
        `;
        break;
    case 4:
        DivDescripciones.innerHTML = ''; 
        DivDescripciones.innerHTML = `
        <div class="col-6 card-body text-bg-dark d-flex flex-column justify-content-between">
        <p class="card-title text-center h5">Transfromacion: Kirby Chispa</p>
            <p class="card-text text-center"> El cuerpo de Kirby genera electricidad y lanza chispas a todos lados.	</p> <!--AQUI VA IR LAS DESCRIPCIONES-->
           
            <p class="card-text text-center"> Destruye a los enemigos y bloques cercanos.</p> 
          </div>

          <div class="col-6 imagen-transformacion card-body text-bg-dark text-center">
            <img src="../imgs/KirbyChispa.jpg" alt="KirbyChispa">
          </div>
        
          <div class="card-header col-12" ></div>
        `;  
    break;
    
    default:
        DivDescripciones.innerHTML = ''; 
        DivDescripciones.innerHTML = `
        <p>No se que hiciste para que saliera esto</p>
        `;
      break;
  }

 }