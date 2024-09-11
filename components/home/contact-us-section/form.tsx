import { ComponentProps } from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"


import { Button } from "@/components/ui/button"
import P from "@/components/common/p"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import ContactUsImg from "@/public/images/contact-us-image.png"

interface Props extends ComponentProps<'div'> {}

export default function Form(props: Props) {
    return (
        <div {...props}>
            <Card className="shadow-xl lg:p-4">
                <CardHeader>
                    <Image className="border border-primary w-24 h-24 object-cover rounded-full mx-auto mb-6" 
                    src={ContactUsImg} alt="WebWunder Contact Us Image" />
                    <CardTitle className="text-3xl">
                        Request a non-binding initial consultation
                    </CardTitle>
                    <CardDescription className="text-xl">Your request is free of charge and will not lead to any unwanted advertising.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input name="name" type="name" placeholder="Full Name" />
                    <Input name="email" type="email" placeholder="Email" />
                    <Input name="domain" type="domain" required placeholder="Domain (optional)" />
                    <Input name="phoneNo" type="phoneNo" placeholder="Phone Number" />
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <div className="items-top flex space-x-2">
                        <Checkbox name="terms" id="terms" />
                        <div className="grid gap-1.5 leading-none">
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                I accept that my details will be stored and processed to handle my request.
                            </label>
                        </div>
                    </div>                    
                    <Button className="px-8 py-7 mb-8 text-lg w-full">
                        Send
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}