'use client'
import { motion } from 'framer-motion'

export default function Steps(props: Props) {
    const items = [
        {
            title: 'Book a Call',
            text: 'Quick 15-minute chat to clarify your needs and choose the right package.',
            time: 'Time commitment: 15 mins',
        },
        {
            title: 'Design & Copy',
            text: 'Provide your content draft, or we help you create it. We prepare everything and present it for final review.',
            time: 'Time commitment: 15 mins',
        },
        {
            title: 'Develop & Go Live',
            text: 'We bring your vision to life and launch your website, ready to conquer the market.',
            time: 'Time commitment: 15 mins',
        },
    ]
    return (
        <div className={props.className}>
            <div className="relative flex flex-col items-start justify-center xl:hidden">
                {items.map((e, i) => (
                    <div
                        key={e.title}
                        className="relative pb-12 ps-14 [&:last-child_>_div.xxx]:hidden"
                    >
                        <div className="xxx absolute left-[18px] top-[10px] h-full w-1 bg-[#747474]"></div>

                        {i === 0 ? (
                            <motion.div
                                key={e.title}
                                className={`absolute left-[18px] top-[10px] h-[80%] w-1 bg-[#27DAB7] ${i === 0 ? '' : 'hidden'}`}
                                initial={'hide'}
                                whileInView={'animate'}
                                transition={{
                                    bounce: 0,
                                    duration: 5,
                                    ease:'linear'
                                }}
                                variants={{
                                    hide: {
                                        height: 0,
                                    },
                                    animate: {
                                        height: '80%',
                                    },
                                }}
                            >
                                <div className="absolute -bottom-1 -left-[7px] h-5 w-5 rounded-full bg-[#27DAB7]">
                                    <div className="h-5 w-5 animate-ping rounded-full bg-[#27DAB7]"></div>
                                </div>
                            </motion.div>
                        ) : null}

                        <div
                            className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full ${i === 0 ? 'bg-[#27DAB7]/40' : 'bg-[#747474]/40'}`}
                        >
                            <div
                                className={`h-5 w-5 rounded-full ${i === 0 ? 'bg-[#27DAB7]' : 'bg-[#747474]'}`}
                            ></div>
                        </div>

                        <h4 className="text-xl font-bold text-[#27DAB7]">
                            Step {i + 1}
                        </h4>
                        <h3 className="mb-4 text-2xl font-bold">{e.title}</h3>
                        <p>{e.text}</p>
                        <p className="font-bold text-[#27DAB7]">{e.time}</p>
                    </div>
                ))}
            </div>

            <div className="relative hidden items-center justify-center xl:flex">
                <div className="absolute left-[18px] top-[54px] h-1 w-full bg-[#747474]"></div>

                {items.map((e, i) => (
                    <div
                        key={e.title}
                        className="relative flex basis-1/3 flex-col items-center text-center [&:last-child_>_div.xxx]:hidden"
                    >
                        {i === 0 ? (
                            <motion.div
                                key={e.title}
                                className={`absolute left-[18px] top-[54px] h-1 w-[120%] bg-[#27DAB7] ${i === 0 ? '' : 'hidden'}`}
                                initial={'hide'}
                                whileInView={'animate'}
                                transition={{
                                    bounce: 0,
                                    duration: 5,
                                    ease:'linear'
                                }}
                                variants={{
                                    hide: {
                                        width: 0,
                                    },
                                    animate: {
                                        width: '120%',
                                    },
                                }}
                            >
                                <div className="absolute -bottom-2 -right-[7px] h-5 w-5 rounded-full bg-[#27DAB7]">
                                    <div className="h-5 w-5 animate-ping rounded-full bg-[#27DAB7]"></div>
                                </div>
                            </motion.div>
                        ) : null}

                        <h4 className="mb-2 text-xl font-bold text-[#27DAB7]">
                            Step {i + 1}
                        </h4>

                        <div
                            className={`mb-8 flex h-10 w-10 items-center justify-center rounded-full ${i === 0 ? 'bg-[#27DAB7]/40' : 'bg-[#747474]/40'}`}
                        >
                            <div
                                className={`h-5 w-5 rounded-full ${i === 0 ? 'bg-[#27DAB7]' : 'bg-[#747474]'}`}
                            ></div>
                        </div>

                        <h3 className="mb-4 text-2xl font-bold">{e.title}</h3>
                        <p className={` ${i === 0 ? 'px-12' : 'px-6'}`}>
                            {e.text}
                        </p>
                        <p className="font-bold text-[#27DAB7]">{e.time}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
