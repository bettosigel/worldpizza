// Menu responsive
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

    //click abrir
    btnMenuOpen.addEventListener("click", function (){
       menuResponsive.classList.add("active");
    });

    //click cerrar
    btnMenuClose.addEventListener("click", function (){
       menuResponsive.classList.remove("active");
    });

    //cerrar menu con elementos de enlace
    enlaces.addEventListener("click", function (){
    menuResponsive.style.transitionDelay = "0.5s";
    menuResponsive.classList.remove("active");
    });

// Slider de productos
var contenedor = document.querySelector('.slider'),
    btnIzquierdo = document.getElementById("btn-izquierda"),
    btnDerecho = document.getElementById("btn-derecha");

// Evento para el boton derecho
btnDerecho.addEventListener("click", function(){
   contenedor.scrollLeft += contenedor.offsetWidth;
});

// Evento para el boton izquiero
btnIzquierdo.addEventListener("click", function () {
  contenedor.scrollLeft -= contenedor.offsetWidth;
});

// Validación de formulario
var formulario = document.getElementById("formulario");
function validar(e){
   var inputNombre = document.getElementById("nombre"),
       inputEmail = document.getElementById("email"),
       inputComents = document.getElementById("comentarios"),
       alertSuccess = document.getElementById("alertSuccess"),
       alertError = document.getElementById("alertError");

   if (inputNombre.value == 0 || inputEmail.value == 0 || inputComents.value == 0){
      e.preventDefault();
      alertError.classList.remove("hide");
      alertError.classList.add("show");
      setTimeout(function(){
         alertError.classList.remove("show");
         alertError.classList.add("hide");
      }, 2000);
   }else{
      e.preventDefault();
      alertSuccess.classList.remove("hide");
      alertSuccess.classList.add("show");
      setTimeout(function () {
         alertSuccess.classList.remove("show");
         alertSuccess.classList.add("hide");
      }, 2000);
      inputNombre.value = "";
      inputEmail.value = "";
      inputComents.value = "";
   }
}

// Evento del formulario
formulario.addEventListener("submit", validar);

// Boton de scroll top
var btnTop = document.getElementById("btn-top"),
    logo = document.getElementById("logo");

// Detectar el scroll en la pagina web
window.addEventListener("scroll", function (){
   var scroll = document.documentElement.scrollTop,
       fullSize = document.documentElement.offsetHeight,
       sizeVP = document.documentElement.clientHeight;
   
   if (scroll > 100){
      btnTop.classList.add("show");
   }else{
      btnTop.classList.remove("show");
   }

   // Modificar elemento cuando llegue a final de pagina
   if (fullSize == (scroll + sizeVP)){
      btnTop.classList.add("scrollFinal");
   }else{
      btnTop.classList.remove("scrollFinal");
   }
});

// Detectamos el evento click en el boton
btnTop.addEventListener("click", function (){
   window.scrollTo(0,0);
});

// Detectar el evento click en el logo
logo.addEventListener("click", function () {
  window.scrollTo(0, 0);
});