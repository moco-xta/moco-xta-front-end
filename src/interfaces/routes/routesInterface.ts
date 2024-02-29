export interface RoutesInterface {
  index?: number
  display_in_nav_bar: boolean
  key: string
  path:
    | '/'
    | '/about'
    | '/add_review'
    | '/blog'
    | '/contact'
    | '/photography'
    | '/projects'
    | '/reviews'
    | '/skills'
  width?: {
    [key: string]: string
  }
}
