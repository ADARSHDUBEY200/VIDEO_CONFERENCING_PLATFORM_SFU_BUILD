const {createDevice} = require("./createDevice.js");

const routerCapabilities = async (data) =>{

    const {rtp} = data;
    console.log("THIS IS THE RTP : ");
    console.log(rtp);

    const device = await createDevice(rtp);
    return device ;

}

module.exports = {routerCapabilities};