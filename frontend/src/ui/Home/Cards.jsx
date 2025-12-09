import React from 'react'
import Glow from './glowLine'

const Cards = () => {
    return (
        <>
            <section className="py-20 bg-gradient-to-r from-[#0A0A1C] via-[#141A33] to-[#2A4F9E]
 md:px-20">
                <h3 className="text-6xl font-bold text-center mb-12 text-indigo-500">Features</h3>


                <div className='flex gap-30 justify-center'>

                    <div className="h-[60vh] w-[25vw] shadow-lg shadow-blue-400 hover:shadow-2xl rounded-2xl hover:scale-102 hover:border-2 border-blue-500 transition-transform ease-in-out bg-gray-50 flex flex-col items-center gap-4 cursor-pointer">
                        <img src='/images/Home/HDVideoImage.webp' alt="image" className='h-[40vh] w-[25vw] rounded-tr-2xl rounded-tl-2xl' />
                        <div>This is the DIV</div>
                    </div>

                    <div className="h-[60vh] w-[25vw] shadow-lg shadow-blue-400 hover:shadow-2xl rounded-2xl  hover:scale-102 hover:border-2 border-blue-500 transition-transform ease-in-out bg-gray-50 flex flex-col items-center gap-4 cursor-pointer">
                        <img src='/images/Home/authenticationImage.jpg' alt="image" className='h-[40vh] w-[25vw] rounded-tr-2xl rounded-tl-2xl' />
                        <div>This is the DIV</div>
                    </div>

                    <div className="h-[60vh] w-[25vw] shadow-lg shadow-blue-400 hover:shadow-2xl rounded-2xl hover:scale-102 hover:border-2 border-blue-500 transition-transform ease-in-out bg-gray-50 flex flex-col items-center gap-4 cursor-pointer">
                        <img src='/images/Home/HDVideoImage.webp' alt="image" className='h-[40vh] w-[25vw] rounded-tr-2xl rounded-tl-2xl' />
                        <div>This is the DIV</div>
                    </div>

                </div>


            </section>

            <Glow />
        </>
    )
}

export default Cards