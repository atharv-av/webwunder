"use client"

import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';

interface TestimonialProps {
    image: string
    title: string
    description: string
}

const Testimonial: React.FC<TestimonialProps> = ({ image, title, description }) => (
    <div className="keen-slider__slide">
      <div className='h-[400px] rounded-xl overflow-hidden w-[calc(100vw-40px)] md:w-full bg-white border-2 '>
        <Image className='h-64' src={image} alt={title} width={1000} height={1000} />
        <div className='p-2'>

        <h1 className='font-bold text-xl'>{title}</h1>
        <p>{description}</p>
        </div>
      </div>
    </div>
);

const Why_mobCrousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0); // Track the active slide
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,

            slides: {
                perView: 0.5,
                spacing: -150,
            },
            slideChanged(s) {
                setCurrentSlide(s.track.details.rel); // Update active slide index
            },
        },
        []
    );

    const [items] = useState([
        {
            cardWidth: 'lg:w-[700pxw-full',
            image: '/images/home/why-webwunder/why-webwunder-1.png',
            smallImage: "/images/home/why-webwunder/why-webwunder-1-small.png",
            imgWidth: 700,
            title: 'Boost Revenue with Strategic, Conversion-Optimized Solutions',
            description:
                'Turn visitors into loyal customers with designs that drive lasting success.',
        },
        {
            cardWidth: 'lg:w-[350pxw-full',
            image: '/images/home/why-webwunder/why-webwunder-2.png',
            imgWidth: 350,
            title: 'Purpose-Driven Design',
            description:
                'Our strategic designs empower your brand to command premium pricing and boost profitability.',
        },
        {
            cardWidth: 'lg:w-[350pxw-full',
            image: '/images/home/why-webwunder/why-webwunder-3.png',
            imgWidth: 350,
            title: 'All-Inclusive Services for Design, SEO, and Continuous Optimization',
            description:
                "From design to SEO, content creation, and AI-driven updates, we take care of everything—so you don't have to.",
        },
        {
            cardWidth: 'lg:w-[350pxw-full',
            image: '/images/home/why-webwunder/why-webwunder-4.png',
            imgWidth: 350,
            title: 'Cost-Effective Solution That Streamlines Lead Generation',
            description:
                'Streamline your customer journey, attract qualified leads, and save valuable time with efficient communication.',
        },
        {
            cardWidth: 'lg:w-[350pxw-fit',
            image: '/images/home/why-webwunder/why-webwunder-5.png',
            imgWidth: 350,
            title: 'Tailored Marketing Support to Enhance Brand Visibility and Growth',
            description:
                'Comprehensive support, covering everything from branding to social media, guarantees your business stands out and grows.',
        },
    ]);

    return (
        <section  style={{
            backgroundImage:
                'url("/images/home/why-webwunder/why-webwunder-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }} className=" text-black py-24 min-h-[500px]  lg:pl-32">

<div className="flex flex-col items-center gap-4 text-center">
                <Badge data-aos="fade-up" className="w-fit bg-[#5D59E1] font-archivo text-sm font-normal text-white">
                    Designed to Dominate
                </Badge>
                <div className="flex flex-col items-center leading-none animated-text">
                    {/* Split text into individual words */}
                    <p className="font-archivo text-[32px] font-bold text-zinc-400 md:text-[45px]">
                        <span className="word">Why</span> <span className="word">WebWunder?</span> <br />
                        <span className="word">We</span> <span className="word">Make</span> <span className="word">it</span> <span className="word">Clear.</span>
                    </p>
                </div>
                <p className="font-archivo text-sm font-normal text-black/50 md:text-base">
                    Your business deserves more than just a website—it deserves
                    a game-changer.
                </p>

                {/* Buttons */}
                <div className="my-4 flex items-center justify-center gap-2 lg:my-2 lg:gap-3">
                    <button className="flex  hover:scale-95 transition-all  w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2">
                        <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                            Explore Plans
                        </p>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white lg:h-8 lg:w-8">
                            <ArrowRight
                                size={18}
                                fontWeight={100}
                                className="text-[#24252A]"
                            />
                        </div>
                    </button>
                    <button className="flex border  hover:scale-95 transition-all  w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#ffffff] p-2">
                            <Link
                                href="#"
                                className="flex flex-row items-center justify-between gap-4"
                            >
                                <p className="ml-2 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">
                                    Book a call
                                </p>
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#000000] lg:h-8 lg:w-8">
                                <ArrowRight
                                    size={18}
                                    fontWeight={100}
                                    className="text-[#ffffff]"
                                />
                            </div>
                            </Link>
                        </button>
                </div>
            </div>


            <div className="mx-auto px-4 sm:px-6 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center">
                    {/* <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold mb-4">Join Us! Why?<br />Clear and Simple.</h2>
                        <div className="my-4 flex items-start justify-start gap-2 lg:my-2 lg:gap-3">

                            <button className="flex hover:scale-95 transition-all w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2">
                                <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                                Explore Plans
                                </p>
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fefffe] lg:h-8 lg:w-8">
                                    <ArrowRight
                                        size={18}
                                        fontWeight={100}
                                        className="text-[#24252A]"
                                    />
                                </div>
                            </button>

                            <button className="flex w-fit  hover:scale-95 transition-all  flex-row items-center justify-between gap-6 rounded-full bg-[#ffffff] p-2">
                                <Link
                                    href="#"
                                    className="flex flex-row items-center justify-between gap-4"
                                >
                                    <p className="ml-2 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">
                                        Book a call
                                    </p>
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#000000] lg:h-8 lg:w-8">
                                        <ArrowRight
                                            size={18}
                                            fontWeight={100}
                                            className="text-[#ffffff]"
                                        />
                                    </div>
                                </Link>
                            </button>
                        </div>
                        <div className="flex space-x-4 mt-12">
                            <button
                                className="bg-[#8080f2] rounded-full p-3"
                                onClick={() => instanceRef.current?.prev()} // Move to previous slide
                            >
                                <ArrowRight className="rotate-180" size={24} />
                            </button>
                            <button
                                className="bg-[#8080f2] rounded-full p-3"
                                onClick={() => instanceRef.current?.next()} // Move to next slide
                            >
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div> */}
                    <div  className="lg:col-span-1 flex flex-col items-center justify-center overflow-hidden">
                        <div ref={sliderRef} className="keen-slider">
                            {[...items].map((testimonial, index) => (
                                <Testimonial key={index} {...testimonial} />
                            ))}
                        </div>
                        <div  className='mt-8 w-96 h-4 flex justify-between'>
                            {/* Pagination discs */}
                            {[...Array(items.length)].map((_, idx) => (
                                <div
                                    key={idx}
                                    
                                    className={`h-1 w-16 rounded-full ${idx === currentSlide ? 'bg-[#5D59E1]' : 'bg-zinc-400'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why_mobCrousel;
