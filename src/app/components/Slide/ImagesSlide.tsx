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
            <div className='max-w-[300px] mr-[200px]'>
                <Image className='pb-3' src={logoImg} alt='Logo Space Y' />
                <p className='text-white text-5xl font-bold'>O caminho para tornar a humanidade multiplanetária</p>
                <h2 className='text-mars-light hover:text-mars font-medium cursor-pointer text-xl pt-2'>Inscreva-se agora</h2>
            </div>

            <Image className='mr-7 cursor-pointer' src={arrowImg} alt='Arrow Left Logo' />
            <div className='flex max-w-[1000px]'>
                <Marquee
                    direction="right"
                    speed={50}
                    pauseOnClick={true}

                >
                    <div className='flex pl-10 gap-9'>
                        <Image className='rounded-md h-[355px]' src={img1} alt='Gallery 1' />
                        <Image className='rounded-md h-[355px]' src={img2} alt='Gallery 2' />
                        <Image className='rounded-md h-[355px]' src={img3} alt='Gallery 3' />
                    </div>
                </Marquee>
                <Image className='ml-7 -rotate-180 cursor-pointer' src={arrowImg} alt='Arrow Right Logo' />
            </div>
        </div >
    )

}

export default ImagesSlide;