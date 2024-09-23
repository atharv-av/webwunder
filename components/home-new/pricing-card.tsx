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




    return (
        <Card
  className={`flex flex-col justify-between lg:w-[500px] lg:scale-75 rounded-3xl lg:border lg:border-[#D9D9D9] border-2 border-white bg-[#191919] text-white transition-all duration-300 ${
    isCenter ? 'h-[1060px] lg:scale-95 xl:scale-90 lg:border-2 lg:border-white' : 'h-[970px]'
  }`}
>
  <div className="flex flex-col">
    <CardHeader className="space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-start space-y-2">
          <div className={`flex h-fit w-fit rounded-full p-2 ${iconBg}`}>
            <Image src={icon} alt={title} width={25} height={25} />
          </div>
          <p className="font-inter lg:text-2xl text-base font-semibold text-white">{title}</p>
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
        <div className="font-inter lg:text-xl text-lg font-semibold text-white">€{setupFee} Setup Fee</div>
      </div>
      <p className="font-inter lg:text-base text-sm font-normal text-white/50">{description}</p>
      <div className="space-y-2">
        <p className="font-inter lg:text-base text-sm font-bold text-white">What You Get:</p>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="flex h-fit w-fit items-center justify-center rounded-full bg-[#46B277] p-1">
                <Check size={12} className="font-extrabold text-black" />
              </div>
              <span className="font-inter lg:my-0 my-1 lg:text-base text-[13px] font-normal leading-none text-white/50">
                {feature}
              </span>
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
    <button className="w-full py-4 hover:border hover:border-blue-500 hover:scale-95 transition-all border-black border rounded-full bg-transparent font-inter text-base font-normal text-white">
      Cancel Anytime
    </button>
  </CardFooter>
</Card>

    );
};

export default PricingCard;