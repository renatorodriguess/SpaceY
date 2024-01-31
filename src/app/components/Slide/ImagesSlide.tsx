import React from 'react'
import Image from 'next/image'
import logoImg from '../../../../public/images/logo-space-y.svg'
import img1 from '../../../../public/images/gallery-1.jpg'
import img2 from '../../../../public/images/gallery-2.jpg'
import img3 from '../../../../public/images/gallery-3.jpg'

const ImagesSlide = () => {
    return (
        <div className='flex items-center justify-center mt-[150px] ml-[100px] mb-[157px] mr-[300px]"'>
            <div className='max-w-[350px] mr-[30px]'>
                <Image className='pb-3' src={logoImg} alt=''/>
                <p className='text-white text-5xl font-bold'>O caminho para tornar a humanidade multiplanetária</p>
                <h2 className='text-mars-light font-medium cursor-pointer'>Inscreva-se agora</h2>
            </div>
            <Image className='pb-3' src={img1} alt=''/>
            <Image className='pb-3' src={img2} alt=''/>
            <Image className='pb-3' src={img3} alt=''/>
        </div>
    )

}

export default ImagesSlide;