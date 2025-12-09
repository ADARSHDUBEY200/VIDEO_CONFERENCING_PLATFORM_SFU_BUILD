const createTransport = async (router) => {
    try {
        console.log("I am in the createTransPort : ");
        console.log(router);

        const transport = await router.createWebRtcTransport({
            listenIps: [{ ip: "0.0.0.0", announcedIp: null }],
            enableUdp: true,
            enableTcp: true,
            preferUdp: true,
        });


        return transport;
    } catch (error) {

        console.log("THE ERROR IN THE FILE OF THE CREATETRANSPORT : ");
        console.log(error);

    }
};


module.exports = { createTransport };