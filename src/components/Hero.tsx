import Image from 'next/image'
import moonIlustration from '../assets/mon.png'
import { TypeAnimation } from 'react-type-animation'

import { useEffect, useState } from 'react';
import { Link as ScrollLink, Events } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';


interface HeroProps {
  ref: React.RefObject<HTMLDivElement>;
}

export function Hero({ ref }: HeroProps) {
  const controls = useAnimation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Ajuste os valores conforme necessário para atender às suas necessidades
    const triggerPosition = 300;
    const opacity = Math.min(1, Math.max(0, (triggerPosition - scrollPosition) / triggerPosition));

    controls.start({ opacity: opacity });
  }, [scrollPosition, controls]);

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <motion.section className="flex w-full flex-col justify-center items-start gap-4" style={{ zIndex: open ? -1 : 0 }}>
    <div className="flex items-start justify-start self-stretch py-16 gap-4 relative w-full lg:w-2/3">
      <div className="flex flex-col justify-center items-center gap-4">
          <motion.h1
            className="lg:text-5xl text-3xl font-bold bg-gradient-to-r from-violet-500 via-white-70 to-purple-300 bg-clip-text text-transparent leading-tight lg:leading-tight lg:text-center"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
              <TypeAnimation 
                repeat={Infinity}
                sequence={[
                  'Construindo o Amanhã', 1000, 
                  'Codificando o Agora', 1000, 
                ]}
              />
          </motion.h1>
          <motion.p
          className="lg:text-center text-xl break-words"
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          Onde a inovação encontra a excelência. Nossa missão é impulsionar o seu sucesso através da tecnologia, oferecendo soluções sob medida para todas as suas necessidades de TI.
          </motion.p>
          <motion.a
            href="#services"
            className="px-8 py-[12px] bg-purple-700 rounded-lg hover:bg-purple-400 m-auto lg:m-0 lg:text-center"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            NOSSOS SERVIÇOS
          </motion.a>
        </div> 
      </div>
      <div className='lg:w-1/3 ml-auto absolute top-20 right-0 z-[-20]'>
        <Image src={moonIlustration} alt='Ilustração' className="flex-row" />
      </div>
    </motion.section>
    
  )
}
