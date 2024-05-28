const mqtt = require('mqtt');

// Connect to the HiveMQ Cloud MQTT Broker
const client = mqtt.connect('mqtts://xxxxxxxxxxxxxxxxxxx.s2.eu.hivemq.cloud:8883', {
  username: 'raoakif',
  password: 'Pakistan@1'
});

// Subscribe to a topic
client.on('connect', () => {
    console.log('Connected to the MQTT Broker');
  
    // Simulate heat sensor data
    setInterval(() => {
      const temperature = (Math.random() * 30).toFixed(2);
      const message = JSON.stringify({ sensorId: 'heatSensor1', temperature: temperature });
      client.publish('sensor/heat', message);
      console.log('Published:', message);
    }, 5000); // Change data every 5 seconds
  });
  
  client.on('error', (error) => {
    console.log('Connection failed:', error);
  });
