let burgerButton = document.getElementById("burger-button");
let menu = document.getElementById("menu");

//burgerButton contiene el span con el icono
//burgerButton.addEventListener(‘que evento‘, ‘que deseo hacer‘);
burgerButton.addEventListener("touchstart", function() {
  menu.classList.toggle("active");
})