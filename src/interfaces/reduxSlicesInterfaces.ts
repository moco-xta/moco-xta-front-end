export interface AppStateSliceInterface {
  menuIsOpen: boolean
  authenticationIsOpen: boolean
  localeSwitcherIsOpen: boolean
  addReviewIsOpen: boolean
}

export interface AuthenticationSliceInterface {
  isAuthenticated: boolean
}

export interface lifeGameInterface {
  grid: number[][]
  columns: number
  rows: number
}
