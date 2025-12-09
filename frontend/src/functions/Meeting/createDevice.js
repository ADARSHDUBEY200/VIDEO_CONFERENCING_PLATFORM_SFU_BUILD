import mediaSoupClient from "mediasoup-client";


export const createDevice = async (data)=>{
    console.log("THE DATA IS : ");
    console.log(data);
    
    const device = new mediaSoupClient.Device();
    await device.load({ routerRtpCapabilities: data});
    
    return device;
};



