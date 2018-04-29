
  // Create a client instance
  var client = new Messaging.Client("m14.cloudmqtt.com", 36202,"Prueba");
  //Example client = new Paho.MQTT.Client("m11.cloudmqtt.com", 32903, "web_" + parseInt(Math.random() * 100, 10));


  var options = {
    useSSL: true,
    userName: "Prueba",
    password: "33839727",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);

  // called when the client connects
  function onConnect() {
    var ledConexion = document.getElementById('led-conexion');
    ledConexion.classList.add('onConection');
    console.log("onConnect");
    client.subscribe("TopicPrueba");
    console.log("Subscribe");
  }

  function doFail(e){
    var ledConexion = document.getElementById('led-conexion');
    ledConexion.classList.remove('onConection');
    console.log(e);
    
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }
  // called when a message arrives
client.onMessageArrived = function (message) {
  var led1 = document.getElementById('led1');
  var led2 = document.getElementById('led2');

  
  datos = Array(message.payloadString);
  datos = datos[0].split(',');                                    // mandas separar la primera string que es la string entrante por el mqtt
 								                                  // lo mimsom que el renglon anterior pero con el ultimo dato de la recien separada cadena
     															  //console.log(datos);           
  console.log(datos);                                             //  imprime los datos ya convertidos en arreglo
if(datos[0] == "true" || datos[0] ==  "false"){

 datos[10] = datos[10]/100;

 datos[12] = datos[12]/100;
            }


            else{
            	datos[0] = datos[0]/100;

 				datos[2] = datos[2]/100;
            }
  }





