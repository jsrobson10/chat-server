#!/usr/bin/node

// Get some libraries
const net = require("net");
const fs = require("fs");

// Create a server
var server = net.createServer(function(socket)
{
  // Send back a connected message
  socket.write(JSON.stringify({connected: true}));
  console.log("connected");

  socket.on('data', function(data)
  {
    console.log("recieved: "+data);
  });
});

// Listen for data
server.listen(22068, '');
