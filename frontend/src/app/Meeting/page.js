"use client";
import { createWebRtcTransPort } from "@/functions/Meeting/createWebRtcTransPort";
import { getMediaOfUser } from "@/functions/Meeting/getMediaOfUser";
import { routerCapabilities } from "@/functions/Meeting/routerCapabilities";
import VideoComponent from "@/ui/meeting/VideoComponent.jsx";
import {createReceiveTransPort} from "@/functions/Meeting/createReceiveTransPort.js"
import { Mic, Camera, Monitor, Phone, Settings, MessageCircleCode, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react"
import { io } from "socket.io-client"

export default function MeetingUI() {


  const searchParams = useSearchParams();
  const id = searchParams.get('roomId');
  console.log("THE ROOM ID IS : ");
  console.log(id);
  

  const socketRef = useRef();
  const localVideoRef = useRef();
  const [videos, setVideos] = useState([]);
  const [isOpenPanel, setIsOpenPanel] = useState(false);
  const deviceRef = useRef(null);


  let roomId = id;

  useEffect(() => {
    const startInitials = () => {
      getMediaOfUser(localVideoRef)
        .then(() => {
          socketRef.current = io("http://localhost:8080");

          socketRef.current.on("connect", () => {
            console.log("Socket calling is done");
            console.log(socketRef.current.id);
            socketRef.current.emit("join-room", { roomId });
            socketRef.current.on("getRtpCapabilities", handleRtpCapabilities);
            socketRef.current.emit("createTransport", { roomId });
            socketRef.current.on("transPortConfigData", handleTransPortConfig);
            socketRef.current.on("newProducer", handleNewProducer);
            socketRef.current.on("consumerData", handleConsumerData);

            console.log("Socket calling is done : ");
          })
        })
    };

    startInitials();


  }, []);



  const handleRtpCapabilities = async (data) => {
    console.log("I am handling the rtpCapabilities : ");
    console.log(data);

    const retunredDevice = await routerCapabilities(data);
    deviceRef.current = retunredDevice;
    
  };



  const handleTransPortConfig = async (data) => {
    const { id, iceParameters, iceCandidates, dtlsParameters } = data;
    console.log("THE TRANSPORT DATA IS : ");
    console.log(data)
    console.log(id);
    console.log(iceParameters);
    console.log(iceCandidates);
    console.log(dtlsParameters);
    const sendTransport = await createWebRtcTransPort(deviceRef, data, socketRef, roomId);

    console.log("THE SEND TRANSPORT IS : ");
    console.log(sendTransport);

    sendTransport.produce({
      track: window.localStream.getVideoTracks()[0]
    });


    sendTransport.produce({
      track: window.localStream.getAudioTracks()[0]
    })
  };




  const handleNewProducer = async (data) => {
    const { producerId , peerId } = data;
    console.log("The producer come from the server is : ");
    console.log(producerId);
    console.log(peerId);
    socketRef.current.emit("consume", { roomId, producerId, rtpCapabilities: deviceRef.current.rtpCapabilities });
  };



  const handleConsumerData = async (data) => {
    socketRef.current.emit("createReceiveTransPort", { roomId });
    socketRef.current.on("ReceivetransPortConfigData", handleReceiveData);
    handleReceiveData(receiveData);

  };



  const handleReceiveData = async (receiveData) => {
    const recvTransport = await createReceiveTransPort(receiveData);
    const consumer = await recvTransport.consume({ id, producerId, kind, rtpParameters });

    const stream = new MediaStream();
    stream.addTrack(consumer.track);

    setVideos((prevVideos) => {
      return [ ...prevVideos, stream ];
    })


  }



  return (
    <div className="h-screen bg-[#e9f0ff] flex items-center justify-center p-4 relative">

      <VideoComponent reference={localVideoRef} />

      <div className="absolute bottom-5 flex gap-6">

        <button className="p-3 cursor-pointer rounded-full bg-blue-400 hover:bg-blue-500 text-white shadow-lg">
          <Mic size={22} />
        </button>

        <button className="p-3 cursor-pointer rounded-full bg-blue-300 hover:bg-blue-400 text-white shadow-lg">
          <Camera size={22} />
        </button>

        <button className="p-3 cursor-pointer rounded-full bg-blue-300 hover:bg-blue-400 text-white shadow-lg">
          <Monitor size={22} />
        </button>

        <button className="p-3 cursor-pointer rounded-full bg-orange-400 hover:bg-orange-500 text-white shadow-lg">
          <Phone size={22} />
        </button>

        <button className="p-3 cursor-pointer rounded-full bg-blue-300 hover:bg-blue-400 text-white shadow-lg">
          <Settings size={22} />
        </button>

        <button className="p-3 cursor-pointer rounded-full bg-blue-300 hover:bg-blue-400 text-white shadow-lg" onClick={() => setIsOpenPanel(!isOpenPanel)}>
          <MessageCircleCode />
        </button>
      </div>


      <div className={`absolute h-[95vh] w-[25vw] rounded-2xl bg-gray-200 bottom-4 right-3 ${videos.length != 0 ? "visible" : "invisible"}`}>

        {videos.length != 0 ? (
          <>
            <div className="video-participants">
              {
                videos.map((video) => (
                  <div className="h-[50ch] w-[40vw]">
                    <video
                      ref={ref => {
                        if (ref && video) {
                          ref.srcObject = video;
                        }
                      }}
                      autoPlay
                    />
                  </div>
                ))
              }
            </div>
          </>
        ) : (<>
        </>
        )}


      </div>


      <div className={`w-[30%] h-[95%] flex flex-col gap-4 absolute bg-gray-200 rounded-3xl m-2 p-2  transition-all duration-500 ease-in-out ${isOpenPanel ? "right-[15px]" : "right-[-500px]"}`}>


        <div className="flex-1 bg-[#f7faff] rounded-2xl shadow-md border border-gray-200 p-4">
          <h2 className="font-medium text-gray-700 mb-2">Participants</h2>

          <div className="w-full h-[85%] bg-white rounded-lg border border-gray-100 shadow-inner"></div>
        </div>


        <div className="flex-[1.2] bg-[#f7faff] rounded-2xl shadow-md border border-gray-200 p-4 flex flex-col">
          <h2 className="font-medium text-gray-700">Chat</h2>


          <div className="flex-1 flex items-center justify-center text-gray-500">
            No chat messages
          </div>


          <div className="flex items-center gap-2 mt-3">
            <input
              type="text"
              placeholder="Write your chat"
              className="flex-1 rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-300 outline-none"
            />
            <button className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full shadow-md">
              <Send />
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}
