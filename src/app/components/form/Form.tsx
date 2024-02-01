import React from 'react'
import Image from 'next/image'
import ticketImg from '../../../../public/images/icon-ticket.svg'
import rocketImg from '../../../../public/images/rocket.svg'

const Form = () => {
    return (
        <div className='pt-14 flex flex-col justify-around bg-background-form bg-cover bg-no-repeat w-full'>
            <div className='flex w-full justify-around'>
                <div className='bg-[#0E0D40] rounded-2xl ml-28 max-h-[750px] px-10 py-13 pt-15 pb-14'>
                    <Image className='mt-5' src={ticketImg} width={56} height={56} alt='' />
                    <h2 className='text-white text-2xl pt-4'>Garanta sua vaga para a primeira viagem</h2>
                    <h3 className='text-gray-05 max-w-[308px]'>Preencha os campos abaixo para entrar na lista de espera</h3>

                    <form className='flex flex-col' action="">
                        <label className='text-white py-6'>Nome</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Nome"
                            className="w-[426px] h-14 border border-solid bg-[#0E0D40] pl-2 rounded-md text-white"
                            required
                        />
                        <label className='text-white py-6'>E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="E-mail"
                            className="w-[426px] h-14 border border-solid bg-[#0E0D40] pl-2 rounded-md text-white"
                            required
                        />
                        <label className='text-white py-6'>Telefone</label>
                        <input
                            type="tel"
                            id="numero"
                            placeholder="(11) 1234-5678"
                            className="w-[426px] h-14 border border-solid bg-[#0E0D40] pl-2 rounded-md text-white"
                            required
                        />
                        <div className='flex px-6 pt-6 pb-8'>
                            <input className='w-6 h-6 border border-solid border-gray-05 checked:bg-mars mr-4 appearance-none flex' type="checkbox" />
                            <h2 className='text-white text-md'>Concordo em receber comunicações</h2>
                        </div>

                        <button className=" text-white hover:text-slate-200  font-bold bg-mars hover:bg-orange-700 w-[426px] h-16 border-none rounded-md cursor-pointer text-center">Garantir minha vaga</button>

                    </form>
                </div>
                <Image className='transform -translate-y-32 -translate-x-24' src={rocketImg} width={600} height={600} alt='' />
                <div>
                </div>
            </div>
        </div>
    )
}

export default Form