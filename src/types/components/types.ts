// HEADER

export type THeader = {
  isMain?: boolean
}

// LOGO MOCO

export type TLogoMoco = {
  isMain?: boolean
}

// LAZY FACTORY

export type TLazyFactory = {
  (): Promise<{ default: React.ComponentType<any> }>
}
