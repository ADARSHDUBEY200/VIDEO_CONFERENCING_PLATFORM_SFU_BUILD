const { Server } = require("socket.io");
const { createWorker } = require("../worker/worker");
const { createRouter } = require("../router/router");
const { createTransport } = require("../transPort/createTransPort");

const connectToSocket = async (server) => {
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
            allowedHeaders: ["*"],
            credentials: true
        }
    });

    let rooms = {};

    const worker = await createWorker();


    io.on("connection", async (socket) => {
        

        socket.on("join-room", async (data) => {
            try {
                const { roomId } = data;
                console.log("The socketId is this : ", socket.id);
                const router = await createRouter(worker, rooms, roomId);

                rooms[roomId].peers[socket.id] = { transports: [] }

                console.log("The rtpCapbilities are : ");
                console.log(router.rtpCapabilities);

                socket.emit("getRtpCapabilities", { rtp: router.rtpCapabilities });
            } catch (error) {

                console.log("The error is coming in the join-room : ");
                console.log(error);
            }

        });

        socket.on("createTransport", async (data) => {

            try {

                console.log("I am in the createTransport : ");

                const { roomId } = data;
                const router = rooms[roomId].router;

                console.log(createTransport);


                const transport = await createTransport(router);
                rooms[roomId].peers[socket.id].transports.push(transport);

                console.log(transport);
                console.log(rooms);

                const configs = {

                    id: transport.id,
                    iceParameters: transport.iceParameters,
                    iceCandidates: transport.iceCandidates,
                    dtlsParameters: transport.dtlsParameters
                }

                socket.emit("transPortConfigData", configs);
            } catch (error) {

                console.log("THE ERROR IS COMING IN THE CREATETRANSPORT : ");
                console.log(error);

            }
        });


        socket.on("connectTransport", async (data) => {

            try {

                const { transportId, dtlsParameters, roomId } = data;

                const transport = rooms[roomId].peers[socket.id].transports.find(t => t.id === transportId);

                await transport.connect({ dtlsParameters });


            } catch (error) {

                console.log("THE ERROR IS COMING IN THE CONNECTTRANSPORT  : ");
                console.log(error);

            }
        });


        socket.on("produce", async ({ transportId, kind, rtpParameters, roomId }, callback) => {

            try {
                console.log("I am in the producer : ");

                const transport = rooms[roomId].peers[socket.id].transports.find(t => t.id === transportId);

                const producer = await transport.produce({ kind, rtpParameters });
                console.log("THE PRODUCER IS : ");
                console.log(producer);

                callback({ id: producer.id });

                socket.broadcast.to(roomId).emit("newProducer", {
                    producerId: producer.id,
                    peerId: socket.id
                });
            } catch (error) {

                console.log("THE ERROR IS COMING IN THE PRODUCE : ");
                console.log(error);

            }

        });



        socket.on("consume", async ({ roomId, producerId, rtpCapabilities }) => {

            try {
                const router = rooms[roomId].router;

                if (!router.canConsume({ producerId, rtpCapabilities })) {
                    return callback({ error: "Cannot consume" });
                }

                const transport = rooms[roomId].peers[socket.id].transports.find(t => t.id === transportId);

                const consumer = await transport.consume({
                    producerId,
                    rtpCapabilities,
                    paused: false
                });

                socket.emit("consumerData", { id: consumer.id, producerId, kind: consumer.kind, rtpParameters: consumer.rtpParameters });

            } catch (error) {

                console.log("THE ERROR IS COMING IN THE CONSUME : ");
                console.log(error);

            }

        });

        socket.on("ReceiveTransport", async (data) => {

            try {
                const { roomId } = data;
                const router = rooms[roomId].router

                const transport = await createTransport(router);

                rooms[roomId].peers[socket.id].transports.push(transport);

                const configs = {
                    id: transport.id,
                    iceParameters: transport.iceParameters,
                    iceCandidates: transport.iceCandidates,
                    dtlsParameters: transport.dtlsParameters
                }

                socket.emit("ReceivetransPortConfigData", configs);
            } catch (error) {

                console.log("THE ERROR IS COMING IN THE RECEIVE TRANSPORT : ");
                comsole.log(error);

            }
        });



    });

}


module.exports = { connectToSocket };