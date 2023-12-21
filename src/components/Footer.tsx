import Image from 'next/image'
import instagramIcon from '../assets/midias/instagram.svg'
import linkedinIcon from '../assets/midias/linkedin.svg'
import whatsappIcon from '../assets/midias/whatsapp.svg'

export function Footer() {
  return (
    <footer className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-between m-auto gap-2">
        <div className='w-full h-full flex flex-row items-center justify-center flex-wrap gap-4'>
          <a target="_blank" href='https://www.instagram.com/untitledevs/'>
            <Image src={instagramIcon} width={35} alt='Instagram logo' />
          </a>
          
          <a target="_blank" href='https://br.linkedin.com/company/untitled-devs'>
            <Image src={linkedinIcon} width={35} alt='Linkedin logo' />
          </a>
    
          <a target="_blank" href='https://wa.me/5516996461932'>
            <Image src={whatsappIcon} width={35} alt='Whatsapp logo' />
          </a>
        </div>
    
        <div className="hidden lg:flex">
          {/* Empty div to maintain spacing */}
        </div>
        {/* Move Carreiras outside the div containing social media icons */}
        <div>
          <a href='/carrer' className="mt-4 lg:mt-0 text-gray-400 inline-flex hover:text-gray-200">
            Carreiras Untitled
          </a>
        </div>

        <div>
          <p className="flex text-end text-xs lg:text-sm text-gray-400 mt-4 lg:mt-0">
            Todos os direitos reservados © 2023 - UntitledDevs
          </p>
        </div>
      </div>
    </footer>
  );
}
