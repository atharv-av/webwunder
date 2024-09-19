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
        <div className="flex flex-col items-center gap-4 bg-black">
            <Badge className="mt-20 bg-[#5D59E1] font-archivo text-sm font-normal">
                Reviews
            </Badge>
            <p className="font-archivo text-[45px] font-bold text-white">
                What Our Clients Says
            </p>
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="slow"
                />
            </div>
            <div className="flex w-4/5 flex-col items-start gap-2">
                <p className="font-archivo text-[26px] font-bold text-white">
                    Tell us your WebWunder experience
                </p>
                <div className="flex justify-between">
                    <p className="font-archivo w-3/5 text-base font-normal text-white/50">
                        Show how WebWunder took your business to the next level
                        – your Google review helps others achieve the
                        same success. Thank you for your support!
                    </p>
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
    )
}

export default Reviews
