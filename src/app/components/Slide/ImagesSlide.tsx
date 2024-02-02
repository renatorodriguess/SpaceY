import React from 'react';
import Image from 'next/image';
import logoImg from '../../../../public/images/logo-space-y.svg';
import img1 from '../../../../public/images/gallery-1.jpg';
import img2 from '../../../../public/images/gallery-2.jpg';
import img3 from '../../../../public/images/gallery-3.jpg';
import arrowImg from '../../../../public/images/arrow-gallery.svg';
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";


const ImagesSlide = () => {
    return (
        <div className='hidden sm:flex items-center justify-center mt-[150px] ml-[100px] mb-[157px] mr-[300px]"'>
            <motion.div
                whileInView="visible" initial="initial" viewport={{ once: true }} variants={{ initial: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { duration: 1, delay: .1 }, }, }}
                className='max-w-[300px] mr-[200px]'>
                <Image className='pb-3' src={logoImg} alt='' />
                <p className='text-white text-5xl font-bold'>O caminho para tornar a humanidade multiplanetária</p>
                <motion.h2
                    whileInView="visible"
                    initial="initial"
                    viewport={{ once: true }}
                    variants={{
                        initial: { opacity: 0, y: 100 },
                        visible: {
                            opacity: 1,
                            y: -1,
                            transition: { duration: 1, delay: .1 },
                        },
                    }}
                    className='text-mars-light hover:text-mars font-medium cursor-pointer text-xl pt-2'>Inscreva-se agora</motion.h2>
            </motion.div>

            <Image className='mr-7 cursor-pointer' src={arrowImg} alt='' />
            <div className='flex max-w-[1000px]'>
                <Marquee
                    direction="right"
                    speed={50}
                    pauseOnClick={true}

                >
                    <div className='flex pl-10 gap-9'>
                        <Image className='rounded-md h-[355px]' src={img1} alt='' />
                        <Image className='rounded-md h-[355px]' src={img2} alt='' />
                        <Image className='rounded-md h-[355px]' src={img3} alt='' />
                    </div>
                </Marquee>
                <Image className='ml-7 -rotate-180 cursor-pointer' src={arrowImg} alt='' />
            </div>
        </div >
    )

}

export default ImagesSlide;