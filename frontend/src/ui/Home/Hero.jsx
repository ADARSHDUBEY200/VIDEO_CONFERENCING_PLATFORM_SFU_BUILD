import React from 'react'
import TypingText from "@/components/ui/shadcn-io/typing-text/index.jsx";
import Link from "next/link"
import ThreeDCard from '@/components/ui/3D_Card';
import Glow from '@/ui/Home/glowLine.jsx';


const Hero = () => {
    return (
        <>

            <Glow />

            <section className="flex h-[75vh] w-screen p-10  bg-gradient-to-r from-[#0A0A1C] via-[#141A33] to-[#2A4F9E] items-center">
                <div className="w-[55vw] h-[40vh] content-center p-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <TypingText
                            text={["Connect instantly with real-time communication.", "Fast, secure, reliable video conferencing platform.", "Build stronger connections through video."]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            cursorClassName='bg-purple-500 h-[2rem]'
                            className="text-4xl font-bold"
                            textColors={['#3b82f6', '#8b5cf6', '#06b6d4']}
                            variableSpeed={{ min: 50, max: 120 }}
                        />
                    </h2>
                    <p className="text-gray-600 mb-6 p-4">
                        Collaborate effortlessly with crystal-clear video calls across any device.

                        Experience smooth, reliable meetings designed for modern hybrid teams.

                        Stay connected with secure, real-time communication wherever you are.

                        Host productive meetings with powerful tools built for teamwork.
                    </p>
                    <div className="flex w-[60%] gap-6 items-center justify-center mt-15">

                        <Link href="/landing"><button className="px-10 py-4 bg-indigo-600 border-2 border-indigo-600 text-white rounded-3xl shadow-lg hover:bg-white hover:text-indigo-600 transition font-bold cursor-pointer">
                            Join Now
                        </button></Link>

                        <Link href="/landing"><button className="px-10 py-4 bg-white border-2 border-indigo-600 text-indigo-600 rounded-3xl shadow-lg hover:bg-indigo-600 hover:text-white transition font-bold cursor-pointer">
                            Create Meet
                        </button></Link>
                    </div>
                </div>
                <div className="w-[40vw] h-[85%] rounded-2xl cursor-pointer">
                    <ThreeDCard className="w-full h-full rounded-2xl shadow-lg shadow-indigo-500 hover:shadow-2xl hover:shadow-indigo-600 ">
                        <img
                            src="/images/Home/Video.png"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </ThreeDCard>
                </div>



            </section>
            <Glow />

        </>
    )
}

export default Hero