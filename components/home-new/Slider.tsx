import React, { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface TestimonialProps {
    icon: string;
    content: string;
    title: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ icon, content, title }) => (
    <div className="keen-slider__slide">
        <div className='p-2'>

        <div className="h-fit min-h-56 p-4 rounded-xl flex flex-col justify-between overflow-hidden w-full  bg-[#191919] ">
            <div>
                <Image src={icon} alt={title} width={25} height={25} />
                <h3 className="mt-2 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{content}</p>
            </div>
        </div>
        </div>
    </div>
);
const JoinUsSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1); // Default to 1 slide

    const updateSlidesPerView = () => {
        if (window.innerWidth < 640) { // Tailwind's 'sm' breakpoint
            setSlidesPerView(1); // 1 slide for small screens
        } 
        else if (window.innerWidth < 1024) { // Tailwind's 'lg' breakpoint
            setSlidesPerView(2); // 2 slides for medium/large screens
        } 
        else if (window.innerWidth < 1440) { // Tailwind's 'xl' breakpoint
            setSlidesPerView(3); // 3 slides for large screens
        } 
        else {
            setSlidesPerView(3); // 4 slides for extra-large screens and above
        }
    };
    

    useEffect(() => {
        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            mode: 'free-snap',
            slides: {
                perView: slidesPerView,
            },
            slideChanged(s) {
                setCurrentSlide(s.track.details.rel);
            },
        },
        []
    );

    const items = [
        {
            id: 1,
            icon: '/images/home/join-us/join-us-icon-1.png',
            title: 'No More Negotiations, No Surprises',
            content: 'We keep it simple—what you see in your plan is what you pay. No hidden fees, no upsells, just consistent, top-tier service. Cancel anytime.',
        },
        {
            id: 2,
            icon: '/images/home/join-us/join-us-icon-6.png',
            title: 'Excellence In Custom Web Design',
            content: 'Get a custom, powerhouse website with minimal effort—no templates, ensuring 100% unique designs and functionality.',
        },
        {
            id: 3,
            icon: '/images/home/join-us/join-us-icon-3.png',
            title: 'Effortless Updates, Anytime, Anywhere',
            content: "Need changes? Email us from any device, and we'll handle the rest. Our streamlined process makes updates seamless and stress-free."
        },{
            id: 4,
            icon: '/images/home/join-us/join-us-icon-4.png',
            title: 'Built by Entrepreneurs, for Entrepreneurs',
            content: 'We understand the hustle. With WebWunder, get a powerhouse website in under an hour. We’ve perfected the process—100+ projects perfected.',
        },
        {
            id: 5,
            icon: '/images/home/join-us/join-us-icon-1.png',
            title: 'Free Updates and Design Refreshes',
            content: "Stay ahead with continuous updates, a free design refresh every 36 months, and transform your existing site with WebWunder."
        },
        {
            id: 6,
            icon: '/images/home/join-us/join-us-icon-6.png',
            title: 'Results-Driven Web Designs',
            content: "Our websites are designed to perform, attract, and convert, driving real growth."
        }
    ];

    return (
        <section className="bg-black text-white py-12 lg:pl-32">
            <div className="mx-auto px-4 sm:px-6 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold mb-4">Join Us! Why?<br />Clear and Simple.</h2>
                        <div className="my-4 flex items-start justify-start gap-2 lg:my-2 lg:gap-3">
                            <button className="flex hover:scale-95 transition-all w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2">
                                <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">Explore Plans</p>
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fefffe] lg:h-8 lg:w-8">
                                    <ArrowRight size={18} fontWeight={100} className="text-[#24252A]" />
                                </div>
                            </button>
                            <button className="flex w-fit hover:scale-95 transition-all flex-row items-center justify-between gap-6 rounded-full bg-[#ffffff] p-2">
                                <Link href="#" className="flex flex-row items-center justify-between gap-4">
                                    <p className="ml-2 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">Book a call</p>
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#000000] lg:h-8 lg:w-8">
                                        <ArrowRight size={18} fontWeight={100} className="text-[#ffffff]" />
                                    </div>
                                </Link>
                            </button>
                        </div>
                        <div className="flex space-x-4 mt-12">
                            <button className="bg-[#8080f2] rounded-full p-3" onClick={() => instanceRef.current?.prev()}>
                                <ArrowRight className="rotate-180" size={24} />
                            </button>
                            <button className="bg-[#8080f2] rounded-full p-3" onClick={() => instanceRef.current?.next()}>
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-2 md:col-span-1 flex flex-col items-center overflow-hidden">
                        <div ref={sliderRef} className="keen-slider cursor-grab">
                            {[...items].map((testimonial) => (
                                <Testimonial key={testimonial.id} {...testimonial} />
                            ))}
                        </div>
                        <div className='mt-8 w-96 h-4 flex justify-between'>
                            {/* Pagination discs */}
                            {[...Array(items.length)].map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1 w-16 mx-2 rounded-full  ${idx === currentSlide ? 'bg-[#5D59E1]' : 'bg-zinc-400'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinUsSection;
