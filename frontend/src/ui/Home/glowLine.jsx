import GlowLine from '@/components/ui/GlowLine.jsx'
import React from 'react'


const Glow = () => {
    return (
        
        <div className="relative w-full h-[0.5px] bg-gray-900">
            
            <GlowLine
                orientation="horizontal"
                position="50%"
                color="blue"
            />
        </div>
    )
}

export default Glow