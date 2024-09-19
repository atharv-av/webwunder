'use client'
import { Button } from '@/components/ui/button'
import AppleSVG from '@/assets/icons/brands/apple.svg'
import GoogleSVG from '@/assets/icons/brands/google.svg'
import DiscordSVG from '@/assets/icons/discord.svg'
import FacebookSVG from '@/assets/icons/facebook.svg'
import GithubSVG from '@/assets/icons/github.svg'
import TwitterSVG from '@/assets/icons/twitter.svg'
import MicrosoftSVG from '@/assets/icons/brands/microsoft.svg'
import { loginSocial } from '@/services/login/actions'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import SpinnerSVG from '@/assets/icons/spinner.svg'
import { useToast } from '@/components/ui/use-toast'

import {
    BsApple,
    BsDiscord,
    BsGithub,
    BsGoogle,
    BsMicrosoft,
} from 'react-icons/bs'
import { FaAmazon, FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import { RiFacebookFill } from 'react-icons/ri'

type Provider =
    | 'google'
    | 'apple'
    | 'azure'
    | 'discord'
    | 'github'
    | 'facebook'
    | 'twitter'
export default function Socials() {
    const { toast } = useToast()
    const router = useRouter()

    const [loadingStates, setLoadingStates] = useState({
        google: false,
        apple: false,
        azure: false,
        discord: false,
        github: false,
        facebook: false,
        twitter: false,
    })

    const handleSocialLogin = async (provider: Provider) => {
        setLoadingStates((prevState) => ({ ...prevState, [provider]: true }))
        try {
            const result = await loginSocial(provider)
            if (result?.error) {
                console.log('ERROR:', result.error)
                throw new Error(result.error.message)
            }
            // Handle successful login, e.g., router.push('/dashboard')
        } catch (error) {
            console.error(error)
            toast({
                title: 'Login Failed',
                description: error + '',
                variant: 'destructive',
            })
        } finally {
            setLoadingStates((prevState) => ({
                ...prevState,
                [provider]: false,
            }))
        }
    }

    const SocialData = [
        {
            icon: <BsGoogle className="rounded-md bg-[#29292F] md:p-3 md:text-5xl p-2 text-4xl" />,
            label: 'Sign in with Google',
            provider: 'google',
        },
        {
            icon: <BsApple className="rounded-md bg-[#29292F] md:p-3 md:text-5xl p-2 text-4xl" />,
            label: 'Sign in with Apple',
            provider: 'apple',
        },
        {
            icon: (
                <BsMicrosoft className="rounded-md bg-[#29292F] md:p-3 md:text-5xl p-2 text-4xl" />
            ),
            label: 'Sign in with Microsoft',
            provider: 'microsoft',
        },
        {
            icon: <FaAmazon className="rounded-md bg-[#29292F] md:p-3 md:text-5xl p-2 text-4xl" />,
            label: 'Sign in with Amazon',
            provider: 'amazon',
        },
        {
            icon: (
                <RiFacebookFill className="rounded-md bg-[#29292F] md:p-3 md:text-5xl p-2 text-4xl" />
            ),
            label: 'Sign in with Facebook',
            provider: 'facebook',
        },
        {
            icon: (
                <FaXTwitter className="rounded-md bg-[#29292F] md:p-3 md:text-5xl p-2 text-4xl" />
            ),
            label: 'Sign in with Twitter',
            provider: 'twitter',
        },
        {
            icon: (
                <BsDiscord className="rounded-md bg-[#29292F] md:p-3 md:text-5xl p-2 text-4xl" />
            ),
            label: 'Sign in with Discord',
            provider: 'discord',
        },
        {
            icon: <BsGithub className="rounded-md bg-[#29292F] md:p-3 md:text-5xl p-2 text-4xl" />,
            label: 'Sign in with GitHub',
            provider: 'github',
        },
    ]

    return (
        <div className="items-center justify-center gap-1 text-white flex">
            {SocialData.map((data, i) => (
                <button
                    key={i}
                    disabled={loadingStates[data.provider as Provider]}
                    onClick={() => handleSocialLogin(data.provider as Provider)}
                    className="mb-4 w-full border-black"
                >
                    <div className="me-2 flex justify-center">
                        {data.icon}
                        {/* <SpinnerSVG
                            className={`ms-2 text-2xl ${loadingStates[data.provider as Provider] ? '' : 'hidden'}`}
                        /> */}
                    </div>
                </button>
            ))}
        </div>
    )
}
