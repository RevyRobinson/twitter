function addTask(){
	//sacar los elementos a poner en el div
	//un div vacio
	var node = document.createElement("DIV");
	//un checkbox
	var input = document.createElement("input");
	var checkbox = input.setAttribute("type","checkbox");
	//el value de la tarea
	var inputValue = document.getElementById("task").value;
  	var text = document.createTextNode(inputValue);
	//tachito de basura
	var tachito = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
	//corazon gay <3
	var kokoro = '<i class="fa fa-heart" aria-hidden="true"></i>';


	//asi se suman al div hijo
	node.appendChild(checkbox);
	node.appendChild(text);
	node.appendChild(kokoro);
	node.appendChild(tachito);
	//y para meterlos a todos al padre
	document.getElementById('task-list').appendChild(div) ;



}
/*
var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);




  var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
*/