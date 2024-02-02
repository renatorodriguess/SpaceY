'use client'

import React from 'react';
import Image from 'next/image';
import marsImg from '../../../../public/images/mars.svg';

import { motion } from "framer-motion";

const Section = () => {
    return (
        <div className='hidden lg:flex flex-col justify-center bg-background-section bg-no-repeat bg-cover bg-top-0 bg-left-0'>
            <div className='flex w-full'>
                <div className='flex flex-col md:flex-row items-center justify-center w-full mt-36 md:mt-0 gap-48'>
                    <motion.div
                        whileInView="visible"
                        initial="initial"
                        viewport={{ once: true }}
                        variants={{
                            initial: { opacity: 0, x: "-130%" }, visible: {
                                opacity: 1, x: 0, transition: { duration: 1.7, delay: 0.5 },
                            },
                        }}
                    >
                        <Image src={marsImg} alt='' className='w-[621px] h-[621px] md:w-auto md:h-auto' />
                    </motion.div>

                    <motion.div
                        whileInView="visible"
                        initial="initial"
                        viewport={{ once: true }}
                        variants={{
                            initial: { opacity: 0, x: 60 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: { duration: 1, delay: 0.5 },
                            },
                        }}

                        className='max-w-[603px]'>
                        <h2 className='text-sun font-medium text-xl uppercase tracking-[6px]'>POR QUE MARTE?</h2>
                        <h1 className='text-white text-3xl font-bold pt-7'>Sobre o planeta vermelho</h1>
                        <p className='text-gray-05 pt-8'>A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou menos a metade da distância da Terra do Sol, então ainda tem luz solar decente. Está um pouco frio, mas podemos esquentar. Sua atmosfera é composta principalmente de CO2 com um pouco de nitrogênio e argônio e alguns outros oligoelementos, o que significa que podemos cultivar plantas em Marte apenas comprimindo a atmosfera.</p>
                        <p className='text-gray-05 pt-8'>A gravidade em Marte é cerca de 38% da da Terra, então você seria capaz de levantar coisas pesadas e dar voltas. Além disso, o dia está notavelmente próximo ao da Terra.</p>
                    </motion.div>
                </div>
            </div>
            
        </div>

    )
}

export default Section
