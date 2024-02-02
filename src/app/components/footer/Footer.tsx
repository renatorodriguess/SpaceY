import React from 'react';
import Image from 'next/image';
import logoImg from '../../../../public/images/logo-space-y.svg'
import facebookImg from '../../../../public/images/facebook.svg'
import instagramImg from '../../../../public/images/instagram.svg'
import linkedinImg from '../../../../public/images/linkedin.svg'

const Footer = () => {
  return (
    <div className='hidden lg:flex justify-around bg-background-form'>
      <div><Image className='flex pb-3 cursor-pointer' src={logoImg} alt='Logo Space Y' /></div>
      <div className='flex gap-5 cursor-pointer pb-3 '>
        <Image width={30} src={instagramImg} alt='Instagram Logo' />
        <Image width={30} src={facebookImg} alt='Facebook Logo' />
        <Image width={30} src={linkedinImg} alt='Linkedin Logo' />
      </div>
      <div>
        <ul className='flex gap-14 list-none text-white text-xl pb-3'>
          <li className='hover:text-gray-04'>
            <a href="">Início</a>
          </li>
          <li className='hover:text-gray-04'>
            <a href="">Sobre nós</a>
          </li>
          <li className='hover:text-gray-04'>
            <a href="">Missões</a>
          </li>
          <li className='hover:text-gray-04'>
            <a href="">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer