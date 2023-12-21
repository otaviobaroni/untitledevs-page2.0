'use client'
import { ReactNode, createContext, useState } from 'react'

interface ModalContextType {
  open: boolean
  turn: () => void
}

export const ModalContext = createContext({} as ModalContextType)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  function turn() {
    setOpen(!open)
  }

  return (
    <ModalContext.Provider value={{ open, turn }}>
      {children}
    </ModalContext.Provider>
  )
}