"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const tags = [
    { tagName: 'Web Design', bgColor: 'bg-[#5D59E1]' },
    { tagName: 'Web Development', bgColor: 'bg-[#27DAB7]' },
    { tagName: 'Social Media', bgColor: 'bg-[#FB421F]' },
    { tagName: 'Graphic Design', bgColor: 'bg-[#FFDC26]' },
    { tagName: 'Branding', bgColor: 'bg-[#FF1EF6]' },
    { tagName: 'Digital Marketing', bgColor: 'bg-[#9DFF50]' },
    { tagName: 'SEO', bgColor: 'bg-[#FF9E0C]' },
    { tagName: 'Slide Decks', bgColor: 'bg-[#FF0000]' },
    { tagName: 'Brochures', bgColor: 'bg-[#2245FF]' },
    { tagName: 'Video Editing', bgColor: 'bg-[#00C8F4]' },
    { tagName: 'Motion Graphics', bgColor: 'bg-[#4F00F8]' },
];

const galleryImages = [
    '/images/home/our-portfolio/our-portfolio-1.png',
    '/images/home/our-portfolio/our-portfolio-2.png',
    '/images/home/our-portfolio/our-portfolio-3.png',
    '/images/home/our-portfolio/our-portfolio-4.png',
    '/images/home/our-portfolio/our-portfolio-5.png',
    '/images/home/our-portfolio/our-portfolio-6.png',
];

const OurPortfolio = () => {
    const [visibleImages, setVisibleImages] = useState<boolean[]>(Array(galleryImages.length).fill(false));
    
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const index = Number(entry.target.getAttribute('data-index'));
                if (entry.isIntersecting) {
                    // Mark this image as visible
                    setVisibleImages(prev => {
                        const newVisibleImages = [...prev];
                        newVisibleImages[index] = true; 
                        return newVisibleImages;
                    });
                } else {
                    // Mark this image as not visible
                    setVisibleImages(prev => {
                        const newVisibleImages = [...prev];
                        newVisibleImages[index] = false; 
                        return newVisibleImages;
                    });
                }
            });
        });

        // Observe each image
        const imageElements = document.querySelectorAll('.gallery-image');
        imageElements.forEach((image) => observer.current?.observe(image));

        return () => {
            if (observer.current) {
                imageElements.forEach((image) => observer.current?.unobserve(image));
            }
        };
    }, []);

    return (
        <div className="flex flex-col  items-center gap-4 bg-black lg:px-0 px-4">
            <Badge data-aos="fade-up" className="mt-20 bg-[#5D59E1] font-archivo text-sm font-normal">
                Our Portfolio
            </Badge>
            <p className="text-center font-archivo lg:text-[45px] text-[25px] lg:w-full w-2/3 leading-none font-bold text-white">
                Websites, Logos, Creatives & More
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:w-3/5">
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className={`${tag.bgColor} rounded-full px-2 py-1 font-inter text-sm font-semibold text-[#020202]`}
                    >
                        {tag.tagName}
                    </div>
                ))}
            </div>
            <div className="mt-8 grid grid-cols-2 lg:gap-5 gap-7 lg:grid-cols-3">
                {galleryImages.map((image, index) => (
                    <motion.div
                        key={index}
                        data-index={index} // Set a data attribute for indexing
                        className="gallery-image"
                        initial={{ opacity: 0, scale: 0.5 }} // Initial state
                        animate={visibleImages[index] ? { opacity: 1, scale: 1, transition: { delay: index * 0.2 } } : { opacity: 0, scale: 0.5 }} // Animate based on visibility with stagger
                        transition={{ duration: 0.5, delay:0.1 }}
                    >
                        <Image
                            
                            src={image}
                            alt="Our Portfolio"
                            width={350}
                            height={350}
                            className="rounded-3xl"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="flex lg:max-w-6xl xl:max-w-6xl px-8 flex-col lg:items-start  items-center gap-2">
                <p className="font-archivo lg:text-[26px] text-lg font-bold text-white lg:text-start  text-center">
                    Built for Entrepreneurs Like You
                </p>
                <div className="lg:flex  mx-auto lg:justify-between">
                    <p className="lg:w-3/4 w-full lg:text-start text-center font-archivo lg:text-base text-sm font-normal text-white/50">
                        Explore our portfolio of websites designed to do more
                        than just look great—they&apos;re strategically crafted
                        to drive success and deliver outstanding performance,
                        all while respecting your valuable time.
                    </p>
                    <div className="flex items-center justify-center lg:my-0 my-5">
                        <Button
                            size={'base'}
                            className="flex  hover:scale-95 transition-all  items-center justify-between bg-white gap-3"
                        >
                            <p className="font-archivo text-[15px] font-medium text-[#24252A]">
                                See More Work
                            </p>
                            <ArrowRight size={15} className="text-[#24252A]" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPortfolio;