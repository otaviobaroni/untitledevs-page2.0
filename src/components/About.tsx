import { Map } from '@/components/mapLocation';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link as ScrollLink, Events } from 'react-scroll';

interface AboutProps {
  ref: React.RefObject<HTMLDivElement>;
}

export function About({ ref }: AboutProps) {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const opacity = Math.min(1, Math.max(0, currentScrollY / 400));

      if (controls) {
        controls.start({ opacity: opacity, y: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
  
  {/* const controls = useAnimation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      setScrollDirection(currentPosition > scrollPosition ? 'down' : 'up');
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    const triggerPosition = 300;
    const opacity = Math.min(1, Math.max(0, (triggerPosition - scrollPosition) / triggerPosition));


    if (scrollDirection === 'down' && scrollPosition > triggerPosition) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0  });
    }
  }, [scrollPosition, scrollDirection, controls]);

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []); */}

  const open = true;

  return (
    <motion.section
      id="about"
      className="flex flex-col mb-20"
      ref={ref}
      animate={controls}
      initial={{ opacity: 0.1, y: 40 }}
      transition={{ duration: 0.9}}
      style={{ zIndex: open ? -1 : 0 }}
      //initial={{ opacity: 0.1, y: 10 }}
      //animate={controls}
      //transition={{ duration: 0.8 }}*/}
    >
      <div className="flex flex-col justify-center items-center gap-8">
      <ScrollLink to="about" smooth duration={500}>
        <span className="text-purple-700 font-bold tracking-[8px] text-center mt-4">QUEM SOMOS ?</span>
      </ScrollLink>
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
      

      <motion.section
      id="about"
      className="flex flex-col mb-20"
      //animate={controls}
      //transition={{ duration: 0.8 }}
      >
      <div id="contact" className="bg-gradient-to-r from-violet-900 via-white-90 to-zinc-950 px-8 lg:px-32 py-8 flex flex-col lg:flex-row lg:mx-8 lg:mt-8 justify-between items-center self-stretch rounded-[64px] gap-10 mt-12" style={{ marginBottom: '80px'}}>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-8">
          <Map open={open}/>
        </div>
        <div className="flex w-full flex-col justify-center items-center gap-2">
          <h1 className="text-3xl text-center md:flex-grow md:text-4xl lg:text-5xl font-bold">Estamos no <span className="bg-gradient-to-r from-violet-500 to-purple-200 text-transparent bg-clip-text">coração</span> da inovação </h1>
          <p className="text-pink-100 font-medium text-center md:flex-grow">Nossa sede tecnológica esta localizada em um centro vibrante onde ideias se tornam realidade. A Untitled, mergulhou na vanguarda da tecnologia para transformar visões em soluções digitais extraordinárias.</p>
          <a href="/contact" className="text-center border px-8 py-[12px] bg-purple-700 rounded-lg hover:bg-purple-900 m-auto lg:m-0">SAIBA MAIS</a>
        </div>
      </div>
      </motion.section>
    </motion.section>
   )
}