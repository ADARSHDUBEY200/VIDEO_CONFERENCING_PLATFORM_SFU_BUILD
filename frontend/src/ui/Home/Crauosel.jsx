import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Glow from './glowLine'



const Crauosel = () => {
    return (
        <>
            <div className=' h-[70vh] bg-gradient-to-r from-[#0A0A1C] via-[#141A33] to-[#2A4F9E] p-4'>
                <div className="w-screen text-center font-bold text-4xl text-indigo-600">This are the extra Features</div>
            </div>
            <Glow />
        </>


    )
}

export default Crauosel