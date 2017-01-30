module.exports = function(io){
	var clients = [];

	io.on('connection', function (socket){
		//var currentUser;

		console.log("socket.io avariable");
		var result = {
			code:200,
			result:"success"
		}
		socket.emit("NET_AVARIABLE",result);

		socket.on("disconnect", function (){
			//onUserDisconnect();
		});

		onUserDisconnect = function(){
			console.log("user disconnect from socket.io");
			//socket.emit('USER_DISCONNECTED');
		}
	});

	/*
	listOfUsers = function (){
		for( var i = 0; i < clients.length; i++ ){
			console.log("Now "+clients[i].name+" ONLINE");
		}
		console.log('----------------------------------------');
	}
	*/

	/*
	getType = function(val){
	    if (typeof val === 'undefined') return 'undefined';
	    if (typeof val === 'object' && !val) return 'null';
	    return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
	}
	*/
}
