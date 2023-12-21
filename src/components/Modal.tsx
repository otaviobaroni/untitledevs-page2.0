'use client'

import { ModalContext } from "@/contexts/ModalContext"
import { useContext } from "react"

export function Modal() {
  const { open, turn } = useContext(ModalContext)
  return (
    <div id="modal-sucess" className={open?'absolute top-0 left-0 w-full h-full bg-[rgba(14,14,14,0.6)] flex':'hidden'}>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex m-auto flex-col justify-center items-center px-8 py-4 bg-gray-400 rounded-2xl gap-4">
          <h1 className="uppercase text-pink-400 font-bold tracking-[8px] text-2xl md:text-4xl">Email Enviado!</h1>
          <p className="font-medium">Estaremos entrando em contato, logo logo!</p>
          <button className="uppercase flex justify-center items-center px-8 py-2 rounded-lg bg-gray-50 text-pink-400 font-semibold text-xs hover:bg-pink-100" onClick={() => turn()}>Fechar</button>
        </div>
      </div>
    </div>
  )
}