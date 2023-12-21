'use client'


import {Map} from '@/components/mapLocation'

export function About() {
   return (
    <section id="about" className='flex flex-col mb-20'>
      <div className="flex flex-col justify-center items-center gap-8">
        <span className="text-purple-700 font-bold tracking-[8px] text-center mt-4">QUEM SOMOS ?</span>
        <div className="flex flex-row justify-center items-center">
          <p className="lg:text-7xl font-bold text-center gap-4 mr-4">
            A <span className="text-purple-700 ">Untitled</span> é uma desenvolvedora de software movida por transformar ideias em soluções digitais excepcionais.
          </p>
          <div className="flex items-center justify-center">
            <video
              loop
              muted
              autoPlay
              playsInline
              preload="false"
              className="rounded-3xl max-h-[80%]"
              src="/untitled-prev.mp4"
            />
          </div>
        </div>
        <p className="text-center font-thin text-sm p-4 md:text-center lg:text-xl">
          Nossa jornada começou em 2023 no meio educacional, que foi fruto da visão compartilhada de criar um espaço onde a criatividade e a expertise se 
          unem para moldar o futuro da tecnologia. Trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades, 
          abraçando desafios complexos e entregando soluções sob medida que impulsionam o crescimento e a eficiência.
        </p>
      </div>
      <div id="contact" className="bg-gradient-to-r from-violet-900 via-white-90 to-zinc-950 px-8 lg:px-32 py-8 flex flex-col lg:flex-row lg:mx-8 lg:mt-8 justify-between items-center self-stretch rounded-[64px] gap-10 mt-12" style={{ marginBottom: '80px'}}>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-8">
          <Map/>
        </div>
        <div className="flex w-full flex-col justify-center items-start gap-2">
          <h1 className="text-3xl text-center md:flex-grow md:text-left md:text-4xl lg:text-5xl font-bold">Estamos No <span className="bg-gradient-to-r from-pink-400 to-purple-200 text-transparent bg-clip-text">Coração</span> Da Inovação </h1>
          <p className="text-pink-100 font-medium md:text-center md:flex-grow">Nossa sede tecnológica esta localizada em um centro vibrante onde ideias se tornam realidade. A Untitled, mergulhou na vanguarda da tecnologia para transformar visões em soluções digitais extraordinárias.</p>
          <a href="/contact" className="border px-8 py-[12px] bg-purple-700 rounded-lg hover:bg-purple-900 m-auto lg:m-0">SAIBA MAIS</a>
        </div>
      </div>
    </section>
   )
}