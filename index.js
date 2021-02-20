const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors')
const PORT = 5000;

// http://ec2-54-149-117-186.us-west-2.compute.amazonaws.com:5002/rooms/109/
// http://ec2-54-188-70-61.us-west-2.compute.amazonaws.com:5008/

app.use('/rooms/:id', express.static(__dirname + '/public'));

app.get('/rooms/:id/getPhotosByRoomId', (req, res) => {
  axios.get(`http://ec2-18-191-199-80.us-east-2.compute.amazonaws.com:5005/rooms/${req.params.id}/getPhotosByRoomId`)
  .then((photos) => {
    res.send(photos.data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err);
  });
});

app.get('/users/:id', (req, res) => {
  axios.get(`http://ec2-34-210-111-179.us-west-2.compute.amazonaws.com:5007/users/${req.params.id}`)
  .then((users) => {
    res.send(users.data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err);
  });
});

app.get('/rooms/:id/availableDates', (req, res) => {
  axios.get(`http://ec2-54-149-117-186.us-west-2.compute.amazonaws.com:5001/rooms/${req.params.id}/availableDates`)
  .then((dates) => {
    res.send(dates.data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err);
  });
});

app.get('/rooms/:id/minNightlyRate', (req, res) => {
  axios.get(`http://ec2-54-149-117-186.us-west-2.compute.amazonaws.com:5001/rooms/${req.params.id}/minNightlyRate`)
  .then((rate) => {
    res.send(rate.data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err);
  });
});


app.listen(PORT, () => {
  console.log(`proxy server started at port ${PORT}`);
});