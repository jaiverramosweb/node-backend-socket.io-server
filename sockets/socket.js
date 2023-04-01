const { io } = require("../index");

io.on("connection", (client) => {
  console.log("Cliente conectado");

  client.on("mensaje", (payload) => {
    console.log("mensaje!!", payload.nombre);

    io.emit("mensaje", { admin: "Nuevo mensaje" });
  });

  client.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});
