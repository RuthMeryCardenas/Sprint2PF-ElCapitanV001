//BOTONES
  //Obteniendo los nodos "button" del HTML
  var bSprint1 = document.getElementById('b1');
  var bSprint2 = document.getElementById('b2');
  var bSprint3 = document.getElementById('b3');
  var lesson1 = document.getElementById('sprint1');
  var quiz1 = document.getElementById('quiz1');
  var lesson2 = document.getElementById('sprint2');
  var quiz2 = document.getElementById('quiz2');
  var lesson3 = document.getElementById('sprint3');
  var quiz3 = document.getElementById('quiz3');
  //Implementando función para calcular resultados del quiz
  function calculateResults() {
    alert(1);
  }
  function show(mostrarLesson,mostrarQuiz) {
		    mostrarLesson.style.display = "block";
        mostrarQuiz.style.display = "block";
  }
  function hide(ocultarLesson,ocultarQuiz) {
		    ocultarLesson.style.display = "none";
        ocultarQuiz.style.display = "none";
  }
  //Implementando las funciones CallBack del evento onclick de cada button
  bSprint1.onclick = function () {
    show(lesson1,quiz1);
    hide(lesson2,quiz2);
    hide(lesson3,quiz3);
  }
  bSprint2.onclick = function () {
    show(lesson2,quiz2);
    hide(lesson1,quiz1);
    hide(lesson3,quiz3);
  }
  bSprint3.onclick = function () {
    show(lesson3,quiz3);
    hide(lesson1,quiz1);
    hide(lesson2,quiz2);
  }
//CARGA DEL FORMULARIO
  //Implementando la función CallBack del evento onload
  window.onload = function () {
    bSprint2.click();
  }
  //Función que muestra el menú del DropDown
  function showMenuDropDown() {
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
//document.getElementById("form-signin").reset();
