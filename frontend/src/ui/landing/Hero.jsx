"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import Crauosel from '@/ui/landing/Crauosel';
import NetworkVisualization from '@/components/ui/Network';
import NexusOrbSup from '@/components/ui/orbiting_circles';
import Glow from '../Home/glowLine';



const Hero = () => {

    const [IsDropDown, setIsDropDown] = useState(false);
    console.log("IsDropDown or Not : ", IsDropDown);
    return (
        <>
        <Glow/>
            <div className="min-h-screen w-screen  bg-gradient-to-r from-[#080820] via-[#141A33] to-[#2A4F9E]  flex flex-col items-center text-center">


                <section className="mt-20 max-w-3xl mb-10">
                    <h1 className="text-5xl font-extrabold text-purple-800">
                        Connect. Collaborate. Create.
                    </h1>

                    <p className="mt-4 text-lg text-purple-600">
                        Experience seamless HD video conferencing built for teams, creators, and communities.
                    </p>

                    <div className="mt-8 flex gap-20 justify-center">
                        <div className='realtive'>
                            <Button onClick={(e) => setIsDropDown(!IsDropDown)} variant="outline" className="border-purple-700 text-white rounded-xl px-11 py-6 cursor-pointer font-bold bg-purple-500 transition">
                                Start Meeting
                            </Button>

                            {
                                IsDropDown ? <div className='absolute w-[200px] h-[200px] bg-purple-200 z-30 top-[85px] rounded-2xl right-[225px]'>

                                </div> : <></>
                            }


                        </div>
                        <div className='flex gap-2 items-center justify-center w-[30vw] '>
                            <input type="text" placeholder='Enter join link to join' className='outline-none border border-black px-6 py-3 w-full rounded-2xl' />
                            <Button variant="outline" className="border-purple-700 text-purple-700 rounded-xl px-6 py-4 cursor-pointer">
                                Join
                            </Button>
                        </div>
                    </div>
                </section>

                <div className='flex justify-between gap-20'>
                    <NetworkVisualization />
                    {/* <NexusOrbSup/> */}
                </div>

                <Crauosel />


            </div>

            <Glow/>

        </>
    )
}

export default Hero