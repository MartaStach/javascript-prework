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


function putX (exlocation){
	var div = document.createElement('div');
	div.innerHTML = '<i class="fa-solid fa-x"></i>';
	document.getElementById(exlocation).appendChild(div);
  }

  function clearBombs (bomblocation){
	document.getElementById(bomblocation).innerHTML = '';
  }

  function putBomb (bomblocation){
	var div = document.createElement('div');
	div.innerHTML = '<i class="fa-solid fa-bomb"></i>';
	document.getElementById(bomblocation).appendChild(div);
  }
  
  function clearX (exlocation){
	document.getElementById(exlocation).innerHTML = '';
  }

  function printSaperResults(results){
	var div = document.createElement('div');
	div.innerHTML = (results);
	document.getElementById('saper-results').appendChild(div);
}