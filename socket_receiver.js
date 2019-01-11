initializeWebSocket();

function initializeWebSocket() {
            
	if ("WebSocket" in window) {
	   
	   // Let us open a web socket
	   var ws = new WebSocket("ws://localhost:7000/parallel/");
		
	   ws.onopen = function() {
		  
		  // Web Socket is connected, send data using send()
		  alert("Socket Opened");
	   };
		
	   ws.onmessage = function (evt) { 
		  var received_msg = evt.data;
		  alert(received_msg);
		  //do your stuff here
	   };
		
	   ws.onclose = function() { 		  
		  // websocket is closed.
		  alert("Connection is closed..."); 
	   };
	} else {	  
	   // The browser doesn't support WebSocket
	   alert("WebSocket NOT supported by your Browser!");
	}
 }
 
