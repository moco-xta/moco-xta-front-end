export interface RoutesInterface {
  key: string
  path:
    | '/'
    | '/about'
    | '/blog'
    | '/contact'
    | '/photography'
    | '/projects'
    | '/skills'
  width: {
    [key: string]: string
  }
}
