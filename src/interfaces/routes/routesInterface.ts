export interface RoutesInterface {
  key: string
  path:
    | '/'
    | '/about'
    | '/add_review'
    | '/blog'
    | '/contact'
    | '/photography'
    | '/projects'
    | '/skills'
  display_in_nav_bar: boolean
  width?: {
    [key: string]: string
  }
}
