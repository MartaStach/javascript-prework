
function printMessage(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printResults(results){
	const div = document.createElement('div');
	div.innerHTML = results;
	document.getElementById('results').appendChild(div);
}

function clearResults(){
	document.getElementById('results').innerHTML = '';
}
