'use client'

import React, { createContext, useContext } from 'react'
import { useFarcasterAuth } from '~/hooks/useFarcasterAuth'

const FarcasterContext = createContext<ReturnType<typeof useFarcasterAuth> | undefined>(undefined)

export const useFarcaster = () => {
  const context = useContext(FarcasterContext)
  if (context === undefined) {
    throw new Error('useFarcaster must be used within a FarcasterProvider')
  }
  return context
}

export const FarcasterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const farcasterAuth = useFarcasterAuth()

  return (
    <FarcasterContext.Provider value={farcasterAuth}>
      {children}
    </FarcasterContext.Provider>
  )
}
