import dynamic from 'next/dynamic'
// import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';


interface CardProps {
  icon: keyof typeof dynamicIconImports
  title: string
  content: string
}

export function Card({ icon, title, content, ...props }: CardProps) {
  const LucideIcon = dynamic(dynamicIconImports[icon])

  return (
    <div className="w-[310px] h-[208px] m-auto lg:w-1/3 p-8 flex flex-col justify-center items-start self-stretch gap-4  border border-[#2A0E61] rounded-[32px]">
      <LucideIcon {...props} color='#7e22ce' size={42}/>
      <h1 className="font-bold tracking-[8px] uppercase text-white w-full">{title}</h1>
      <p className="font-light w-full h-16">{content}</p>
    </div>
  )
}