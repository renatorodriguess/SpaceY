import React from 'react'
import Image from "next/image";
import logoImg from '../../../../public/images/logo-space-y.svg'
import homeMars from '../../../../public/images/home-mars-right.svg'
import Icons from '../icons/Icons'

const Header = () => {
  return (
    <div className='flex flex-col bg-background h-screen overflow-x-hidden'>
      <div className=' h-20 m-6 lg:mx-28 lg:my-10 '>
        <Image src={logoImg} alt="Logo Space Y" width={201} height={41} />
      </div>

      <div className='flex flex-col mx-28 max-w-[815px] '>
        <h2 className='text-sun font-medium uppercase tracking-[0.3125rem] text-lg '>Finalmente é possível!</h2>

        <p className='font-extrabold text-white text-6xl leading-[82px] pt-2'>Sua jornada para Marte começa aqui<span className='text-mars'>.</span> </p>

        <h3 className='text-white font-normal text-2xl pt-5 pb-5'>A primeira viagem para Marte estará disponivél apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera.</h3>

        <div className="bg-mars hover:bg-orange-700 w-[264px] h-16 border-none rounded-md cursor-pointer text-center">
          <button className="text-center text-white hover:text-slate-200 h-full font-bold">Inscreva-se Agora!</button>
        </div>
        <Image src={homeMars} alt='' width={472} height={600} className='absolute bg-no-repeat right-0 top-3' />
      </div>
      
      <Icons />
    </div>
  )
}

export default Header