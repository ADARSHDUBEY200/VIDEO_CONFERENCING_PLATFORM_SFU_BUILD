import ThreeDCarousel from '@/components/ui/3d_crauosel'
import React from 'react'
import Glow from './glowLine'


const Benefits = () => {
    return (
        <>
            <div className="flex items-center justify-center bg-gradient-to-r from-[#0A0A1C] via-[#141A33] to-[#2A4F9E]">
                <div className="h-[70vh] w-[80vw] flex items-center justify-center bg-[#00205a] rounded-2xl p-4 mb-10 mt-10">
                    <div className="h-[80%] w-[80%] bg-red-100">

                    </div>
                    <ThreeDCarousel rotationSpeed={50} perspective={1000000} autoRotate={true}/>
                </div>
            </div>
            <Glow/>
        </>

    )
}

export default Benefits