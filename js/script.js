function addTask(){

//crear div que necesito con clase col-xs-offset-2 col-xs-8
var div = document.createElement('div');
div.setAttribute('class','text-task caja-lista col-xs-offset-1 col-xs-10');
//crear input con typo checkbox
var checkbox = document.createElement('input');
checkbox.setAttribute('type','checkbox');
checkbox.setAttribute('onclick','checkTask()');
checkbox.setAttribute('id','check-box');
//crear div y el nodo de texto a utilizar
var p = document.createElement('div');
p.setAttribute('id','caja-de-texto');
//sacar el value de texto y transformarlo en nodo de texto
var inputValue = document.getElementById("task").value;
var tarea = document.createTextNode(inputValue);
//crear i con class="fa fa-trash-o" aria-hidden="true"
var tachito = document.createElement('i');
tachito.setAttribute('class', 'fa fa-trash-o');
tachito.setAttribute('aria-hidden', 'true');
tachito.setAttribute('id', 'tachito');
tachito.setAttribute('onclick','eraseTask()');


//meter los hijos dentro de sus padres
p.appendChild(tarea);
div.appendChild(checkbox);
div.appendChild(p);
div.appendChild(tachito);

//meter el div entero dentro del html
document.getElementById('contenedor-respuestas').appendChild(div);



}
function checkTask() {
	var checkbox = document.getElementById('checkbox');
	if (document.getElementById("check-box").checked = true){
		document.getElementById('caja-de-texto').classList.toggle('check') ;
	}
}

function eraseTask(){
	//selecciona al padre de el mismo y lo borra
	document.getElementById('tachito').parentNode.setAttribute('class','erased');
}




