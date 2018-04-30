
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
  var digitalData = [];
  var realData = [];

  datos = Array(message.payloadString);
  datos = datos[0].split(',');                                    // mandas separar la primera string que es la string entrante por el mqtt
  // lo mimsom que el renglon anterior pero con el ultimo dato de la recien separada cadena
  //console.log(datos);           
  //  imprime los datos ya convertidos en arreglo
  for(var i = 0; i < datos.length; i++){
    if(datos[i] == "true" || datos[i] == "false"){
      digitalData.push(datos[i]);
      // console.log("Algo");
    }
    else {
      realData.push(datos[i]);
      // console.log("Otro algo");
    }
  }

  datos = []; // Dejo en blanco el arreglo
  // Agrego los datos reales al arreglo
  for(var i = 0; i < realData.length; i++){
    datos.push(realData[i]);
  }

  // Agrego los digitales
  for(var i = 0; i < digitalData.length; i++){
    datos.push(digitalData[i]);
  }
  console.log(datos);


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

    if (datos[10] == "false"){
      led1.classList.add('on');
    }else{
      led1.classList.remove("on");
    }
    
    if (datos[11] == "false"){
      led2.classList.add('on');
    }
    else{
      led2.classList.remove("on");
    }
        if (datos[12] == "false"){
      led3.classList.add('on');
    }
    else{
      led3.classList.remove("on");
    }
    
    if (datos[13] == "false"){
      led4.classList.add('on');
    }
    else{
      led4.classList.remove("on");
    }
        if (datos[14] == "false"){
      led5.classList.add('on');
    }
    else{
      led5.classList.remove("on");
    }
    }


