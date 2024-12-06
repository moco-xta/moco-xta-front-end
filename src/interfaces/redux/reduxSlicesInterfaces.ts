export interface AppStateSliceInterface {
  menuIsOpen: boolean
  authenticationIsOpen: boolean
  localeSwitcherIsOpen: boolean
  addReviewIsOpen: boolean
}

export interface AuthenticationSliceInterface {
  isAuthenticated: boolean
}

export interface CursorStateSliceInterface {
  state: 'default' | 'mind_bending'
  position: {
    x: number
    y: number
  }
}
