function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printResults(results){
	var div = document.createElement('div');
	div.innerHTML = results;
	document.getElementById('results').appendChild(div);
}

function clearResults(){
	document.getElementById('results').innerHTML = '';
}


function putBombs (bomblocation){
	var th = document.createElement('th');
	th.innerHTML = results;
	document.getElementById(bomblocation);
	document.getElementById(bomblocation).innerHTML = 'X';
  }

  function clearBombs (bomblocation){
	document.getElementById(bomblocation).innerHTML = '';
  }
