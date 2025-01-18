// MENU BUTTON

export type TMenuButton = {
  state: 'open' | 'close'
}

// SIDEBAR NAVIGATION MENU SCROLL TO TOP

export type TSdmScrollToTop = {
  elementId: string
}

// LOCALE SWITCHER

export type TLocaleSwitcher = {
  defaultValue: string
  label: string
  children: React.ReactNode
}
