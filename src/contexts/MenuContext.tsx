'use client'
import { ReactNode, createContext, useState } from 'react'

interface MenuContextType {
  open: boolean
  turn: () => void
}

export const MenuContext = createContext({} as MenuContextType)

export function MenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  function turn() {
    setOpen(!open)
  }

  return (
    <MenuContext.Provider value={{ open, turn }}>
      {children}
    </MenuContext.Provider>
  )
}