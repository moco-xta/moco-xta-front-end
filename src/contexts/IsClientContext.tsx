'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import Loading from '../app/[locale]/loading'

const IsClientContext = createContext(false)

export const IsClientContextProvider = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => setIsClient(true), [])

  return (
    <>
      {!isClient ? (
        <Loading />
      ) : (
        <IsClientContext.Provider value={isClient}>{children}</IsClientContext.Provider>
      )}
    </>
  )
}

export function useIsClient() {
  return useContext(IsClientContext)
}
