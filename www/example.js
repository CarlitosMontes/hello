"strict"
var connect = require ('mqtt master/lib/connect')
commist.register('subscribe', require('mqtt master/bin/sub'))
var mqtt = require('mqtt master/lib/connect')
var client = mqtt.connect('broker.hivemq.com')
 


client.subscribe('TopicPrueba')

client.on('message', function (topic, message) {
  console.log(message.toString())
})
console.log('MQTT.js version:', require('mqtt master/package.json').version)

client.end()
 




 