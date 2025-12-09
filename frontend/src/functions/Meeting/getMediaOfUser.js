const getMediaOfUser = async (localVideoRef)=>{
    const stream = await navigator.mediaDevices.getUserMedia({audio : true , video : true});

    if(stream){
        window.localStream = stream;
        localVideoRef.current.srcObject = stream;
    }
} 

module.exports = {getMediaOfUser};