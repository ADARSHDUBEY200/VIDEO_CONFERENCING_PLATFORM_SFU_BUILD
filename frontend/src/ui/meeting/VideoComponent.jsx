import React from 'react'

const VideoComponent = ({reference}) => {
    return (
        <div className="w-full max-w-[1500px] h-full bg-white rounded-3xl shadow-xl p-6 flex gap-4">
            <div className="w-full h-[95%] bg-[#f7faff] rounded-3xl border border-blue-100 shadow-inner object-cover relative">
                <video ref={reference} autoPlay className="absolute inset-0 w-full h-full object-cover rounded-3xl" />
            </div>

        </div>
    )
}

export default VideoComponent