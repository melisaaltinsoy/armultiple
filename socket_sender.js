/*initializeWebSocket();


function initializeWebSocket() {
            
	if ("WebSocket" in window) {
	   
	   // Let us open a web socket
	   var ws = new WebSocket("wss://172.20.10.9:7000/parallel/");
		
	   ws.onopen = function() {
		  
		  // Web Socket is connected, send data using send()
		  alert("Socket Opened");
		  ws.send("Hellooooo");
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
 
 
 //when i click on .... send a message with ws.send("Message to send");
 
 */

$(document).ready(function() {
    $("button.button").on("click",function(){
        var name = $("input.name").val();
        SEND(name);
    });
    
});

function SEND(name) {

    $.ajax({
        type: "GET",
        url: "https://parallelbillboard.altervista.org/",
        data: {
            "SET": name
        },
        success: function (result) {
            window.console.log('Successful');
            alert("we received your....");
        }
    });

}
