// PAGE CONTEXT

export type TPageContext = {
  currentPosition: string
  handleSetCurrentPosition: (newPosition: string) => void
  isScrolling: boolean
  handleSetIsScrolling: (newState: boolean) => void
}

export type TPageProvider = {
  defaultPosition: string
  children: JSX.Element
}
