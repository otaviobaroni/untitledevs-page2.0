'use client'

import Image from "next/image";
import Logo1 from '../assets/logo-mobile.svg'
import Logo2 from '../assets/logo-mobile2.svg'
import {MenuIcon, X} from 'lucide-react'
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "@/contexts/MenuContext";

export function MenuBar () {
  const {open, turn} = useContext(MenuContext)

  useEffect(() => {
 
  }, [open])
  return (
    <>
    <div className="hidden md:flex w-full flex-row items-center justify-between">
      <a href="/">
        <Image alt="Logo da Untitled Devs" src={Logo2} className="w-[343px] h-[50px] block" />
      </a>
      <nav className="flex flex-row items-center justify-between gap-4">

        <a href="#services" className="hover:text-purple-500"><span>SERVIÇOS</span></a>
        <span className="pointer-events-none">|</span>
        <a href="#about" className="hover:text-purple-500"><span>QUEM SOMOS</span></a>
        <span className="pointer-events-none">|</span>
        <a href="/contact" className="hover:text-purple-500"><span>CONTATO</span></a>
      </nav>
    </div>
    <div className="flex md:hidden justify-between items-center top-0 ">
      <a href="/">
        <Image className="w-[221px] h-8 block lg:hidden" priority={true} alt="Logo da Untitled Devs" src={Logo2} />
      </a>
      <button onClick={()=> {turn()}}><MenuIcon size={32}/></button>
    </div>

    <div className={open?'absolute top-0 left-0 w-full h-full bg-[rgba(14,14,14,0.6)] flex':'hidden'} >
      <nav className="flex flex-col items-center justify-center text-3xl gap-16 w-full p-16 h-max bg-zinc-800 mt-4">
        <button onClick={()=> {turn()}} className="hover:text-gray-300"><X size={32}/></button>
         <a href="#about" onClick={()=> {turn()}} className="hover:text-purple-500 focus:outline-none"><span>SOBRE NÓS</span></a>
        <a href="#services" onClick={()=> {turn()}} className="hover:text-purple-500 focus:outline-none"><span>SERVIÇOS</span></a>
        <a href="/contact" onClick={()=> {turn()}} className="hover:text-purple-500 focus:outline-none"><span>CONTATO</span></a>
      </nav>
    </div>
    </>
  )
}