const express = require("express");
const app = express();

require("dotenv").config();

// Server socket
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server);

// Mensajes de sockets
require("./sockets/socket");

// Path public
const path = require("path");
const pathPublic = path.resolve(__dirname, "public");
app.use(express.static(pathPublic));

// Poner a funcionar el servidor
server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);

  console.log("Servidor corriendo en el puerto!!", process.env.PORT);
});
