import React from 'react'
import { Badge } from '../ui/badge'
import { InfiniteMovingCards } from '../ui/infinite-moving-review-cards'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

const testimonials = [
    {
        content:
            "We've found great value in TeamWave's customization and automation features. Being able to tailor the platform to our unique needs and create custom boosted our productivity.",
        writer: 'Johnny Depp',
        rating: 5,
    },
    {
        content:
            "We've found great value in TeamWave's customization and automation features. Being able to tailor the platform to our unique needs and create custom boosted our productivity.",
        writer: 'Nicole Kidman',
        rating: 5,
    },
    {
        content:
            "We've found great value in TeamWave's customization and automation features. Being able to tailor the platform to our unique needs and create custom boosted our productivity.",
        writer: 'Amy Adams',
        rating: 5,
    },
]

const Reviews = () => {
    return (
        <div className="flex flex-col items-center gap-4 bg-black lg:px-0 px-4">
            <Badge className="mt-10 bg-[#5D59E1] font-archivo text-sm font-normal lg:mt-20">
                Reviews
            </Badge>
            <p className="font-archivo text-[25px] font-bold text-white lg:text-[45px]">
                What Our Clients Says
            </p>
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="slow"
                />
            </div>
            <div className="flex flex-col items-center gap-2 lg:w-4/5 lg:items-start">
                <p className="font-archivo text-lg font-bold text-white lg:text-[26px]">
                    Tell us your WebWunder experience
                </p>
                <div className="lg:flex lg:justify-between">
                    <p className="text-center font-archivo text-sm font-normal text-white/50 lg:w-3/5 lg:text-start lg:text-base">
                        Show how WebWunder took your business to the next level
                        – your Google review helps others achieve the same
                        success. Thank you for your support!
                    </p>
                    <div className="flex items-center justify-center lg:my-0 my-5">
                        <Button
                            size={'base'}
                            className="flex items-center justify-between gap-3 bg-[#FFDC26]"
                        >
                            <p className="font-archivo text-[15px] font-medium text-[#24252A]">
                                Write a Review
                            </p>
                            <ArrowRight size={15} className="text-[#24252A]" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
