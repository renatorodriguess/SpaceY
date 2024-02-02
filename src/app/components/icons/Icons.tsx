'use client'

import React from 'react';
import Image from 'next/image';
import img1 from '../../../../public/images/icon-rocket.svg';
import img2 from '../../../../public/images/icon-flag.svg';
import img3 from '../../../../public/images/icon-telescope.svg';
import { motion } from "framer-motion";


const Icons = () => {
    return (
        <motion.div
            whileInView="visible"
            initial="initial"
            viewport={{ once: true }}
            variants={{
                initial: { opacity: 0, y: 10 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 0.3 },
                },
            }}
            className='flex flex-col lg:flex-row gap-28 text-white justify-center text-center items-center lg:justify-around pt-32'>
            <div className='lg:flex flex-col max-w-[216px]'>
                <Image src={img1} alt='Icon Rocket' width={56} height={56} className='bg-no-repeat mx-auto' />
                <h2>Foguetes com a mais alta tecnologia e conforto.</h2>
            </div>
            <div className='flex flex-col max-w-[216px]'>
                <Image src={img2} alt='Icon Flag' width={56} height={56} className='bg-no-repeat mx-auto' />
                <h2>Foguetes com a mais alta tecnologia e conforto.</h2>
            </div>
            <div className='flex flex-col max-w-[216px]'>
                <Image src={img3} alt='Icon Telescope' width={56} height={56} className='bg-no-repeat mx-auto' />
                <h2>Foguetes com a mais alta tecnologia e conforto.</h2>
            </div>
        </motion.div>
    );

}



export default Icons;