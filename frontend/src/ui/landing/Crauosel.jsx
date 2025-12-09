import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Crauosel = () => {
    return (
        <>

            <Carousel
                opts={{
                    align: "end",
                }}
                className="w-[90vw] h-[60vh] mx-auto mb-30 p-10 "
            >
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <img
                            src="images/landing/LandingImage.jpg"
                            alt="Video conference illustration"
                            className="mt-16 w-[40vw] h-[50vh] drop-shadow-xl rounded-2xl"
                        />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <img
                            src="images/landing/LandingImage2.jpg"
                            alt="Video conference illustration"
                            className="mt-16 w-[40vw] h-[50vh] drop-shadow-xl rounded-2xl"
                        />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <img
                            src="images/landing/LandingImage3.jpg"
                            alt="Video conference illustration"
                            className="mt-16 w-[40vw] h-[50vh] drop-shadow-xl rounded-2xl"
                        />
                    </CarouselItem>
                     <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <img
                            src="images/landing/LandingImage4.jpg"
                            alt="Video conference illustration"
                            className="mt-16 w-[40vw] h-[50vh] drop-shadow-xl rounded-2xl"
                        />
                    </CarouselItem>
                     <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <img
                            src="images/landing/LandingImage5.jpg"
                            alt="Video conference illustration"
                            className="mt-16 w-[40vw] h-[50vh] drop-shadow-xl rounded-2xl"
                        />
                    </CarouselItem>
                     <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <img
                            src="images/landing/LandingImage6.jpg"
                            alt="Video conference illustration"
                            className="mt-16 w-[40vw] h-[50vh] drop-shadow-xl rounded-2xl"
                        />
                    </CarouselItem>
                     <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <img
                            src="images/landing/LandingImage7.jpg"
                            alt="Video conference illustration"
                            className="mt-16 w-[40vw] h-[50vh] drop-shadow-xl rounded-2xl"
                        />
                    </CarouselItem>

                </CarouselContent>
                <CarouselPrevious className="cursor-pointer" />
                <CarouselNext className="cursor-pointer" />
            </Carousel>

        </>
    )
}

export default Crauosel