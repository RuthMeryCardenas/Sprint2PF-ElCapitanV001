//BOTONES
  //Obteniendo los nodos "button" del HTML
  var bSprint1 = document.getElementById('button1');
  var bSprint2 = document.getElementById('button2');
  var bSprint3 = document.getElementById('button3');
  var dSubmit = document.getElementById('button4');
  //Obteniendo los nodos "div" del HTML
  var dSP1Lessons = document.getElementById('SP1lessons');
  var dSP1Quiz = document.getElementById('SP1quiz');
  var dSP2Lessons = document.getElementById('SP2lessons');
  var dSP2Quiz = document.getElementById('SP2quiz');
  var dSP3Lessons = document.getElementById('SP3lessons');
  var dSP3Quiz = document.getElementById('SP3quiz');
  var dResults = document.getElementById('results');
  //Implementando función que mostrará el menú del dropdown
  function showMenu() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
  	if (!event.target.matches('.dropbtn')) {
  		var dropdowns = document.getElementsByClassName("dropdown-content");
  		var i;
  		for (i = 0; i < dropdowns.length; i++) {
  			var openDropdown = dropdowns[i];
  			if (openDropdown.classList.contains('show')) {
  				openDropdown.classList.remove('show');
  			}
  		}
  	}
  }
  //Implementando funcion show --> muestra el Sprint seleccioado
  function show(toShow) {
    //Escribe aqui tu codigo
  }
  //Implementando funcion hide --> oculta el Sprint no seleccioado
  function hide(toHide) {
    //Escribe aqui tu codigo
  }
  //Implementando función para calcular los resultados del Quiz
  dSubmit.onclick = function (){
    //Escribe aqui tu codigo
  }
  //Implementando las funciones CallBack del evento onclick de cada button
  bSprint1.onclick = function () {
    //Escribe aqui tu codigo
  }
  bSprint2.onclick = function () {
    //Escribe aqui tu codigo
  }
  bSprint3.onclick = function () {
    //Escribe aqui tu codigo
  }
//CARGA DEL FORMULARIO
  //Implementando la función CallBack del evento onload
  window.onload = function () {
    //Escribe aqui tu codigo
  }
