"use client"
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { MenuBarContact } from '@/components/MenuBarContact';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/Contact';
import whatsappIcon from '@/assets/midias/whatsapp.svg';

export default function ContactPage() {
  return (
    <div className='flex flex-col gap-12 lg:gap-16 min-h-screen'>
      <MenuBarContact />
      
      <div className='lg:flex justify-between gap-8'>
        <div className='lg:w-2/3'>
          <Contact />

          <div className="relative overflow-hidden group mt-8" style={{ marginBottom: '80px' }}>
            <a href='https://wa.me/5516996461932' className='flex relative z-10 gap-2 font-thin text-3xl mt-8 md:mt-12'>
              Converse com nossa equipe no Whatsapp
              <Image src={whatsappIcon} width={30} alt='Whatsapp logo' />
            </a>
            <div className="absolute inset-0 left-0 t-4 w-0 border-b transition-all duration-300 transform group-hover:w-full t-4"></div>
          </div>
        </div>

        <div className='lg:w-1/3 flex flex-col justify-center items-stretch gap-8 md:mt-12'>
          <h1 className='font-bold text-5xl'>Ideias que <span className='text-purple-500'>ganham</span> vida.</h1>
          <h1 className='font-bold text-xl'> Conecte-se <span className='bg-gradient-to-r from-purple-500 to-purple-300 text-transparent bg-clip-text'>conosco</span> e transforme sua visão em <span className='bg-gradient-to-r from-purple-500 to-purple-300 text-transparent bg-clip-text'>software</span> de sucesso.</h1>
          <div className='md:mt-2'>
            <p className='text-purple-500 font-semibold'>
              ISSO É {''}
              <TypeAnimation
                repeat={Infinity}
                sequence={[
                  'INOVAÇÃO', 1000, 
                  'FUTURO', 1000,
                  '#UNTITLED', 1000,
                ]} />
            </p>
          </div>
        </div>
      </div>

      <Footer />   
    </div>
  );
}
