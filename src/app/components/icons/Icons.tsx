import React from 'react';
import Image from 'next/image';
import img1 from '../../../../public/images/icon-rocket.svg';
import img2 from '../../../../public/images/icon-flag.svg';
import img3 from '../../../../public/images/icon-telescope.svg';


const Icons = () => {
    return (
       <div className='flex text-white items-center justify-around pt-36'>
         <div className='flex flex-col max-w-[216px]'>
             <Image src={img1} alt='' width={56} height={56} className='bg-no-repeat'/>
                <h2>Foguetes com a mais alta tecnologia e conforto.</h2>
         </div>
         <div className='flex flex-col max-w-[216px]'>
             <Image src={img2} alt='' width={56} height={56} className='bg-no-repeat'/>
                <h2>Foguetes com a mais alta tecnologia e conforto.</h2>
         </div>
         <div className='flex flex-col max-w-[216px]'>
             <Image src={img3} alt='' width={56} height={56} className='bg-no-repeat'/>
                <h2>Foguetes com a mais alta tecnologia e conforto.</h2>
         </div>
       </div>
    )
}

export default Icons;