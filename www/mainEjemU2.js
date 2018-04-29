
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
  datos = datos[0].split(',');  // mandas separar la primera string que es la string entrante por el mqtt
                                // lo mimsom que el renglon anterior pero con el ultimo dato de la recien separada cadena
                                //console.log(datos);           
  console.log(datos);           //  imprime los datos ya convertidos en arreglo


  if(datos[1] == "true" || datos[1] ==  "false"){


  datos[13] = datos[13]/100;
  if (  (datos[3]) >= 300 ) {
      datos[3] = datos[3] - 655.36;
    }

    datos[11] = datos[11]/100;
    if (  (datos[1]) >= 300 ) {
      datos[1] = datos[1] - 655.36;
    }



              //LEDS

        //UNIDAD 1 DIGITALES

    
    
       if (datos[5] == "false"){
      led6.classList.add('on');
    }
    else{
      led6.classList.remove("on");
    }
    
    if (datos[6] == "false"){
      led7.classList.add('on');
    }
    else{
      led7.classList.remove("on");
    }
        if (datos[7] == "false"){
      led8.classList.add('on');
    }
    else{
      led8.classList.remove("on");
    }
    
    if (datos[8] == "false"){
      led9.classList.add('on');
    }
    else{
      led9.classList.remove("on");
    }
        if (datos[9] == "false"){
      led10.classList.add('on');
    }
    else{
      led10.classList.remove("on");
    }

      }









      else{
    datos[3] = datos[3]/100;
  if (  (datos[3]) >= 300 ) {
      datos[3] = datos[3] - 655.36;
    }

    datos[1] = datos[1]/100;
    if (  (datos[1]) >= 300 ) {
      datos[1] = datos[1] - 655.36;
    }



              //LEDS

        //UNIDAD 1 DIGITALES

    
    
       if (datos[15] == "false"){
      led6.classList.add('on');
    }
    else{
      led6.classList.remove("on");
    }
    
    if (datos[16] == "false"){
      led7.classList.add('on');
    }
    else{
      led7.classList.remove("on");
    }
        if (datos[17] == "false"){
      led8.classList.add('on');
    }
    else{
      led8.classList.remove("on");
    }
    
    if (datos[18] == "false"){
      led9.classList.add('on');
    }
    else{
      led9.classList.remove("on");
    }
        if (datos[19] == "false"){
      led10.classList.add('on');
    }
    else{
      led10.classList.remove("on");
    }
      }
  }





