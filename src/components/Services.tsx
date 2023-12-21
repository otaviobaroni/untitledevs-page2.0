import { useEffect } from 'react';
import { Link as ScrollLink, Events } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import { Cards } from './Cards';

interface ServicesProps {
  ref: React.RefObject<HTMLDivElement>;
}

export function Services({ ref }: ServicesProps) {
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
  

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0.1, y: 20 }}
      transition={{ duration: 0.9}}
      className="flex flex-col justify-center items-center gap-8 mb-8"
      style={{ zIndex: open ? -1 : 0 }}
    >
      <ScrollLink to="services" smooth duration={500}>
        <span className="text-purple-700 font-bold tracking-[8px]">SERVIÇOS</span>
      </ScrollLink>
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Na <span className="text-purple-700 ">Untitled</span>, estamos empenhados em fornecer soluções tecnológicas de{' '}
        <span className="text-purple-700 ">classe mundial</span>.
      </h1>
      <div id="services">
      <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-500 py-20 text-center">
        Descubra mais sobre o que oferecemos, explore nossos serviços.
      </p>
        <Cards />
      </div>
    </motion.div>
  );
}
