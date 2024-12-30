export type TRoutes =
  | '/'
  | '/about'
  | '/blog'
  | '/contact'
  | '/photography'
  | '/projects'
  | '/resources'
  | '/skills'
  | '/thanks'

export type TRoute = {
  index?: number
  key: string
  path: TRoute
}
