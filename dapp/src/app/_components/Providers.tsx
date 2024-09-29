'use client'

import { SessionProvider } from 'next-auth/react'
import { FarcasterProvider } from './FarcasterProvider'
import { ClientProviders } from './client-providers'

export function Providers({ children, initialState }: { children: React.ReactNode; initialState: any }) {
  return (
    <SessionProvider>
      <FarcasterProvider>
        <ClientProviders initialState={initialState}>
          {children}
        </ClientProviders>
      </FarcasterProvider>
    </SessionProvider>
  )
}
