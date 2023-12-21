import { MenuBarCarrer } from '@/components/MenuBarCarrer';
import { Footer } from '@/components/Footer';

export default function Carrer() {
  return (
    <div className='flex flex-col gap-12 lg:gap-16 h-screen'>
      <MenuBarCarrer />
      <div className="flex flex-col justify-center items-center gap-2 flex-grow lg:text-center">
        <h1 className='text-2xl text-center'>As oportunidades para fazer parte do nosso time estarão disponíveis</h1>
        <h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold">
          em <span className="bg-gradient-to-r from-purple-500 to-violet-500 text-transparent bg-clip-text">breve</span>...🚀
        </h1>  
      </div>
      <div className="footer" style={{ marginBottom: '50px' }}>
        <Footer />  
      </div>
    </div>
  );
}
