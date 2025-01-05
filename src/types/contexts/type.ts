export type TPageContext = {
  currentPosition: string
  setCurrentPosition: (newPosition: string) => void
  isScrolling: boolean
  setIsScrolling: (newState: boolean) => void
}

export type TPageProvider = {
  defaultPosition: string
  children: JSX.Element
}
