'use client'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import backgroundContent from '../../public/backgroundContent1.svg'
import { MenuBarContact } from '@/components/MenuBarContact'
//import {Map} from '@/components/mapLocation'
import { Footer } from '@/components/Footer'
import { Contact } from '@/components/Contact'
import whatsappIcon from '@/assets/midias/whatsapp.svg'



//import { Contact } from 'lucide-react'

export default function Home() {



 
  return (
    <div className='flex flex-col gap-12 lg:gap-16 min-h-screen'>
      <MenuBarContact />
        <section id="contact" className="bg-purple-900 px-8 lg:px-32 py-8 flex flex-col items-center self-stretch rounded-[64px] gap-10 mt-8" style={{ marginBottom: '80px' }}>

        <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl text-center md:text-left md:text-4xl lg:text-5xl font-bold">
        Localizados No <span className="bg-gradient-to-r from-pink-600 to-purple-300 text-transparent bg-clip-text">Coração</span> Da Inovação
        </h1>
        <p className="text-pink-100 font-medium">
        Nossa sede tecnológica é um centro vibrante onde ideias se tornam realidade. A Untitled, mergulhou na vanguarda da tecnologia para transformar visões em soluções digitais extraordinárias.
        </p>
        <a href="/contact" className="border px-8 py-[12px] bg-purple-700 rounded-lg hover:bg-purple-900 mt-4">SAIBA MAIS</a>
        </div>
        </section>
      
      <Footer />   
    </div>
  )
}
