var serverOn=false;
var socket;
$("#submitUrl").click(function(){
	console.log("clicked");
	getServer();
});
function getServer(){
	var url=$("#socketUrl").val();
	console.log(url);
	$.getScript(url+"socket.io/socket.io.js",function(){
		serverOn=true;
		socket=io.connect(url);
	});
}
if (serverOn){
	console.log("IO: ",io);
	console.log("socket:",socket);
	// Make a connection to the socket.io server
	// This also fires the "connection" event, but it doesn't matter
	// When getting a "receive" event from the server
	socket.on('receive', function(data) {
	// update the DOM with received data
	//document.getElementById('replace').innerHTML = data.secretstuff;
	  playMusic(data.secretstuff);
	});
}


