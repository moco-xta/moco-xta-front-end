import { createContext, useContext, useState } from 'react'

import type { TPageContext, TPageProvider } from '@/types/contexts/types'

export const PageContext = createContext<TPageContext>(null!)

export const PageProvider = ({ defaultPosition, children }: TPageProvider) => {
  const [currentPosition, setCurrentPosition] = useState<string>(defaultPosition)
  const [isScrolling, setIsScrolling] = useState<boolean>(false)

  const handleSetCurrentPosition = (newPosition: string) => {
    setCurrentPosition(newPosition)
  }

  const handleSetIsScrolling = (newState: boolean) => {
    setIsScrolling(newState)
  }

  return (
    <PageContext.Provider
      value={{
        currentPosition: currentPosition,
        handleSetCurrentPosition: handleSetCurrentPosition,
        isScrolling: isScrolling,
        handleSetIsScrolling: handleSetIsScrolling,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}

export const usePageContext = () => useContext(PageContext)
