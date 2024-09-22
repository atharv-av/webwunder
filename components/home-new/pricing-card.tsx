import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { gsap } from 'gsap';

export interface PricingCardProps {
    icon: string;
    iconBg: string;
    title: string;
    description: string;
    price: number;
    setupFee: number;
    features: string[];
    ctaText?: string;
    onSignUp?: () => void;
    isCenter?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
    icon,
    iconBg,
    title,
    description,
    price,
    setupFee,
    features,
    ctaText,
    onSignUp,
    isCenter = false,
}) => {
    const cardRef = useRef<HTMLDivElement | null>(null); // Reference for the card

    useEffect(() => {
        // Register GSAP plugins
        gsap.registerPlugin();

        const elements = cardRef.current?.children; // Get all child elements of the card

        if (elements) {
            // Set initial state for animation
            gsap.set(elements, { opacity: 0, y: -30 });

            // Animate each element into view with stagger
            gsap.to(elements, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.4, // Stagger animation by 0.1 seconds for each element
                ease: 'power2.out',
            });
        }
    }, []);

    return (
        <Card ref={cardRef} className={`flex flex-col justify-between rounded-3xl lg:border lg:border-[#D9D9D9] border-2 border-white bg-[#191919] text-white ${isCenter ? 'h-[1060px] lg:border-2 lg:border-white' : 'h-full'}`}>
            <div className="flex flex-col">
                <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col items-start space-y-2">
                            <div className={`flex h-fit w-fit rounded-full p-2 ${iconBg}`}>
                                <Image src={icon} alt={title} width={25} height={25} />
                            </div>
                            <p className="font-inter lg:text-2xl text-base font-semibold text-white">
                                {title}
                            </p>
                        </div>
                        {ctaText && (
                            <Badge className="rounded-full bg-[#5D59E1] px-2 font-archivo text-sm font-normal text-white">
                                {ctaText}
                            </Badge>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                    <div className="leading-none">
                        <div className="font-inter lg:text-[70px] text-[45px] font-semibold text-white">
                            €{price}
                            <span className="font-inter text-base font-normal text-white">/month</span>
                        </div>
                        <div className="font-inter lg:text-xl text-lg font-semibold text-white">
                            €{setupFee} Setup Fee
                        </div>
                    </div>
                    <p className="font-inter lg:text-base text-sm font-normal text-white/50">
                        {description}
                    </p>
                    <div className="space-y-2">
                        <p className="font-inter lg:text-base text-sm font-bold text-white">What You Get:</p>
                        <div className="space-y-2">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <div className="flex h-fit w-fit items-center justify-center rounded-full bg-[#46B277] p-1">
                                        <Check size={12} className="font-extrabold text-black" />
                                    </div>
                                    <span className="font-inter lg:my-0 my-1 lg:text-base text-[13px] font-normal leading-none text-white/50">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </div>
            <CardFooter className="flex flex-col gap-2 text-white space-y-2">
                <button
                    className="w-full hover:scale-95 py-4 duration-200 transition-all rounded-full bg-[#5D59E1] font-inter text-base font-semibold text-white"
                    onClick={onSignUp}
                >
                    Sign Me Up!
                </button>
                <button
                    className="w-full text-white py-4 hover:border hover:border-blue-500 hover:scale-95 transition-all border-black border rounded-full bg-transparent font-inter text-base font-normal"
                >
                    Cancel Anytime
                </button>
            </CardFooter>
        </Card>
    );
};

export default PricingCard;