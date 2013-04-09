//server side
var io=require('socket.io').listen(3000);
io.sockets.on('connection',function(socket){
	socket.on('send',function(data){
		io.sockets.emit('receive',data);
	});
	});


//client side
<script src="localhost:3000/socket.io/socket.io.js"></script>
socket=io.connect("localhost:3000");
socket.emit("msg",{data:"st"});
socket.on("msg",function(data){
	if data.data=="st":do something;
	});
