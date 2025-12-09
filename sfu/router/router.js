const { mediaCodecs } = require("../utils/mediaCodecs.js");

const createRouter = async (worker, rooms, roomId) => {

    try {
        if (rooms[roomId] != null) {
            console.log("This is the if condition of the creatRouter : ");
            return rooms[roomId].router;
        } else {

            const router = await worker.createRouter({ mediaCodecs: mediaCodecs });

            rooms[roomId] = {
                router,
                peers: {},
            }

            return router;
        };
    } catch (error) {

        console.log("THE ERROR IS COMING IN THE CREATE ROUTER FILE : ");
        console.log(error);

    }
};


module.exports = { createRouter };