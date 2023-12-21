'use client'

import Image from "next/image";
import Logo1 from '../assets/logo-mobile.svg'
import Logo2 from '../assets/logo-mobile2.svg'
import {MenuIcon, X} from 'lucide-react'
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "@/contexts/MenuContext";
import Link from 'next/link';

export function MenuBarCarrer() {
  const {open, turn} = useContext(MenuContext)

  useEffect(() => {
    console.log(open)
  }, [open])
  return (
    <>
    <div className="hidden md:flex w-full flex-row items-center justify-between">
      <a href="/">
        <Image alt="Logo da Untitled Devs" src={Logo2} className="w-[343px] h-[50px] block" />
      </a>
      <nav className="flex flex-row items-center justify-between gap-4">
        <Link href="/#services" className="hover:text-purple-500"><span>SERVIÇOS</span></Link>
        <span className="pointer-events-none">|</span>
        <Link href="/#about" className="hover:text-purple-500"><span>SOBRE NÓS</span></Link>
      </nav>
    </div>
    <div className="flex flex-row md:hidden items-center justify-between gap-4 ">
      <Image className="w-[221px] h-8 block lg:hidden" alt="Logo da Untitled Devs" src={Logo2} />
      <button onClick={()=> {turn()}}><MenuIcon size={32}/></button>
    </div>

    <div className={open?'absolute top-0 left-0 w-full h-full bg-[rgba(14,14,14,0.6)] flex':'hidden'}>
      <nav className="flex flex-col items-center justify-center text-3xl gap-16 w-full p-16 h-max bg-zinc-800">
        <button onClick={()=> {turn()}} className="hover:text-gray-300"><X size={32}/></button>
         <Link href="/#about" onClick={()=> {turn()}} className="hover:text-purple-500"><span>SOBRE NÓS</span></Link>
        <Link href="/#services" onClick={()=> {turn()}} className="hover:text-purple-500"><span>SERVIÇOS</span></Link>
        <Link href="contact/page.tsx" onClick={()=> {turn()}} className="hover:text-purple-500"><span>CONTATO</span></Link>
      </nav>
    </div>
    </>
  )
}