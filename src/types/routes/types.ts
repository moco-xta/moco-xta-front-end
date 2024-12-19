type TRoute =
  | '/'
  | '/about'
  | '/blog'
  | '/contact'
  | '/photography'
  | '/projects'
  | '/resources'
  | '/skills'
  | '/thanks'

export type TRoutes = {
  index?: number
  key: string
  path: TRoute
}
