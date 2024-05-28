// const mqtt = require('mqtt');

// // Connect to the HiveMQ Cloud MQTT Broker
// const client = mqtt.connect('mqtts://3c8edf52799e4d87a49aae2da7296b7d.s2.eu.hivemq.cloud:8883', {
//   username: 'raoakif',
//   password: 'Pakistan@1'
// });

// // Subscribe to a topic
// client.on('connect', () => {
//     console.log('Connected to the MQTT Broker');
  
//     // Simulate heat sensor data
//     setInterval(() => {
//       const temperature = (Math.random() * 30).toFixed(2);
//       const message = JSON.stringify({ sensorId: 'heatSensor1', temperature: temperature });
//       client.publish('sensor/heat', message);
//       console.log('Published:', message);
//     }, 5000); // Change data every 5 seconds
//   });
  
//   client.on('error', (error) => {
//     console.log('Connection failed:', error);
//   });

const https = require('https');
const fs = require('fs');
const url = 'https://api.elevenlabs.io/v1/voices/Hq8YC3Y0tcH0kg2v8QyY/samples/Lgy1L0wT3uPKJdPel3RR/audio';
const apiKey = '92f8c147aec617b3deaa4f32ced5b645';

const options = {
  headers: {
    'xi-api-key': apiKey,
  },
};

https.get(url, options, (response) => {
  if (response.statusCode === 200) {
    const fileStream = fs.createWriteStream('audio.mp3'); // Change the file name and extension as needed

    response.pipe(fileStream);

    fileStream.on('finish', () => {
      console.log('Audio file downloaded successfully.');
    });

    fileStream.on('error', (error) => {
      console.error('Error:', error);
    });
  } else {
    console.error('Error:', response.statusCode);
  }
}).on('error', (error) => {
  console.error('Error:', error);
});
