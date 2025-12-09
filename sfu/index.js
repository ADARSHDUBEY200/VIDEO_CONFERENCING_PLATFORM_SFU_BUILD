const express = require("express");
const http = require("http");
const { connectToSocket } = require("./sockets/socketManager.js");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
connectToSocket(server);


app.use(express.json());


app.use(cors({
    origin: [`${process.env.FRONTEND_URL}`],
    methods: ["GET", "POST", "PUT", "DELETE"],
    // allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));


server.listen(8080, (req, res) => {
    console.log("The Server is Listening : ");
})