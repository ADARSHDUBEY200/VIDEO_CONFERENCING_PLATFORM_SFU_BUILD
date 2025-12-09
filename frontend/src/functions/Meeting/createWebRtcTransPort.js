

const createWebRtcTransPort = async (deviceRef , data, socketRef, roomId) => {
    const { id, iceParameters, iceCandidates, dtlsParameters } = data;
    const sendTransport = await deviceRef.current.createSendTransport({
        id,
        iceParameters,
        iceCandidates,
        dtlsParameters
    });


    sendTransport.on("connect", ({dtlsParameters}, callback) => {

        console.log("The connect Event is called in the sendTransPort : ");
        socketRef.current.emit("connectTransport", { transportId: id, dtlsParameters, roomId });
        callback();

    });

    sendTransport.on("produce", ({ kind, rtpParameters }, callback) => {
        console.log("The produce event is called in the sendTransPort : ");
        socketRef.current.emit("produce", { transportId: id, kind, rtpParameters , roomId}, ({ id: producerId }) => callback({ id: producerId }));
    });


    return sendTransport;

};

module.exports = { createWebRtcTransPort };
