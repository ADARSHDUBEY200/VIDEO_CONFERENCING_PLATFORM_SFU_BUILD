"use client"

import React, { useEffect, useRef, useState } from 'react'
import getUserMedia from '@/functions/Lobby/getUserMedia';
import { useRouter } from 'next/navigation';

const main = () => {
    const localVideoRef = useRef();
    const navigate = useRouter();
    const [meetingId , setMeetingId] = useState("");

    useEffect(()=>{
        getUserMedia(localVideoRef);
    },[]);

    const handleJoinNow = async () =>{
        navigate.push(`/Meeting?roomId=${meetingId}`);
    }

    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-white to-gray-200 flex flex-col items-center justify-center px-4">

           
            <h1 className="text-5xl font-bold text-purple-300 mb-10">
                Welcome To The Lobby!
            </h1>

           
            <div className="h-[65vh] w-full max-w-6xl bg-gradient-to-b from-indigo-400 to-purple-300 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/5 
      shadow-[0_0_40px_rgba(0,0,0,0.8)]">

                <div className="flex gap-10 items-center ">

                  
                    <div className="w-[60%] h-[400px] bg-white rounded-3xl shadow-inner 
          shadow-[0_0_25px_rgba(171,71,255,0.35)] border border-[#5a1fa5]/40 relative hover:" >
            <video ref={localVideoRef} autoPlay className="absolute inset-0 w-full h-full object-cover rounded-3xl"></video>
                    </div>

    
                    <div className="flex flex-col gap-6 w-[30vw]">

                        <input
                        onChange={(e) => setMeetingId(e.target.value)}
                        value={meetingId}
                            placeholder="Enter Meeting ID"
                            className="w-full px-5 py-4 bg-white text-black rounded-xl 
              border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-md"
                        />

                        <input
                            placeholder="Enter Username"
                            className="w-full  px-5 py-4 bg-white text-black rounded-xl 
              border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-md"
                        />

                        
                        <button onClick={handleJoinNow} className="w-full  py-4 font-semibold text-white rounded-xl 
            bg-gradient-to-r from-[#c084fc] to-[#9333ea] shadow-lg hover:opacity-90 cursor-pointer">
                            Join Now
                        </button>

                        <button className="w-full py-4 font-semibold text-white rounded-xl 
            bg-gradient-to-r from-[#c084fc] to-[#9333ea] shadow-lg hover:opacity-90 cursor-pointer">
                            Create Room
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default main