let getUserMedia = async (localVideoRef) => {
    console.log(await navigator.mediaDevices.enumerateDevices());
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });

    if (stream) {
        window.localStream = stream
    };

    localVideoRef.current.srcObject = stream;
}

export default getUserMedia;