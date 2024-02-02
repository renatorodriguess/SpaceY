import React from 'react'
import Image from "next/image";
import logoImg from '../../../../public/images/logo-space-y.svg'
import homeMars from '../../../../public/images/home-mars-right.svg'
import Icons from '../icons/Icons'

const Header = () => {
  return (
    <div className='flex flex-col bg-background-stars min-h-screen overflow-x-hidden p-3'>
      <div className='h-20 lg:mx-28 lg:my-10 sm:mx-auto sm:my-0 flex lg:justify-start justify-center items-center'>
        <Image src={logoImg} className='w-40 lg:w-auto h-auto' alt="Logo Space Y" />
      </div>
      <div className='flex flex-col lg:mx-28 max-w-[815px] mx-auto mt-10'>
        <h2 className='text-sun font-medium uppercase tracking-[5px] text-center lg:text-left text-sm lg:text-lg'>Finalmente é possível!</h2>

        <p className='font-extrabold text-white text-4xl lg:text-6xl leading-[82px] lg:text-left text-center pt-2 '>
          Sua jornada para Marte começa aqui<span className='text-mars'>.</span>
        </p>

        <h3 className='text-white text-center font-normal text-xl lg:text-2xl pt-5 pb-10 max-w-[310px] lg:max-w-[815px] lg:text-left mx-auto '>A primeira viagem para Marte estará disponível a partir do dia 12/03/2028. Inscreva-se em nossa lista de espera.</h3>

        <div className="bg-mars hover:bg-orange-700 w-[264px] h-16 border-2 rounded-md cursor-pointer text-center mx-auto lg:mx-0">
          <button className="text-center text-white hover:text-slate-200 h-full font-bold">Inscreva-se Agora!</button>
        </div>
        <Image src={homeMars} alt='Mars Image' width={472} height={600} className='lg:absolute bg-no-repeat relative right-0 mt-16 ml-4 lg:top-3 md:ml-96' />
      </div>
      <Icons />
    </div>

  )
}

export default Header