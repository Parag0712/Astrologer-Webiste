import React from 'react'
import TypeWriter from 'typewriter-effect';
import Button from '../Button';
import HeroImg from '../../assets/heroImg.png'
import { motion } from 'framer-motion';

function Hero() {
    return (
        <div className='pt-[8rem] lg:pt-[9rem] pb-6  bg-hero text-white px-5  lg:px-20 font-poppins flex flex-col lg:flex-row gap-5'>
            <div className="left flex-col flex justify-center  lg:w-[60%]">
                <h1 className='text-4xl lg:text-5xl leading-[3rem] lg:leading-[4rem] font-semibold text-center lg:text-left'>
                    <span>Accurate Solutions to Problems</span>
                    <div className='flex flex-col gap-3 lg:flex-row justify-center lg:justify-normal'>
                        <span>Get -</span>
                        <span>
                            <TypeWriter
                                options={{
                                    strings: [
                                        'Love Problems',
                                        'Business Problems',
                                        'Vastu Problems',
                                        'Health Problems',
                                        'Relationship Problems ',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 60,
                                    deleteSpeed: 40,
                                    cursor: '|',
                                    cursorClassName: 'text-Purple',
                                }} />
                        </span>
                    </div>
                </h1>

                {/* Content */}
                <p className='text-lg lg:text-xl leading-[1.50rem] text-center lg:text-left pt-3'>
                    Meet Vasel, who has been an astrologer in Chennai, India for 25 years. He has successfully resolved thousands of people's problems through his expertise in astrology. Vasel has provided solutions to the challenges that arise in people's lives and has guided them along the way.
                </p>
                {/* flex items-center gap-5 lg:gap-10 flex-col lg:flex-row */}
                <div className='flex flex-col lg:flex-row gap-3 mt-5 mb-6  items-center' >
                    <Button
                        title={"Book Your Consultation"}
                        className={"bg-white text-black border-1 border-black"}
                    />
                    <Button
                        title={"Make Your HoroScope"}
                    />
                </div>
            </div>
            <div className="right w-[100%] lg:w-[45%] lg:mt-0">

                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                >
                    <img
                        src={HeroImg}
                        alt=""
                        className=""
                    />
                </motion.div>
            </div>
        </div>
    )


}

export default Hero