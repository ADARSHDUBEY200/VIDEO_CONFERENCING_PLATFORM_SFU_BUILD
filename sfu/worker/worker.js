const mediaSoup = require("mediasoup");

let worker;

const createWorker = async () => {

    try {
        worker = await mediaSoup.createWorker({
            rtcMinPort: 20000,
            rtcMaxPort: 21000
        });

        console.log(`The id of the worker is ${worker.pid}`);


        worker.on("died", () => {
            console.log("meadiaSoup worker is died ");
            console.log("The Id of the worker is : ", worker.pid);
            setTimeout(() => {
                process.exit(1);
            }, 2000)
        });


        return worker;
    } catch (error) {

        console.log("THE ERROR IS COMING IN THE CREATE WORKER FILE : ");
        console.log(error);

    }


}

module.exports = { createWorker };









