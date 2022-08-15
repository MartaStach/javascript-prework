function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printResults(results){
	var div = document.createElement('div');
	div.innerHTML = results;
	document.getElementById('results').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function clearResults(){
	document.getElementById('results').innerHTML = '';
}