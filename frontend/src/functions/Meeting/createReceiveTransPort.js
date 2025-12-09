const createRecvTransport = async (data) => {

  const recvTransport = device.createRecvTransport(data);
    recvTransport.on("connect", ({ dtlsParameters }, callback) => {
      socket.emit("connectTransport", { transportId: id, dtlsParameters });
      callback();
    });

    return recvTransport;
};

module.exports = {createRecvTransport};
