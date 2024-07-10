import { IconType } from 'react-icons/lib'

export interface EscapeKeyInterface {
  handleAction?: () => void
}

export interface KeysWithIconsInterface {
  Icon: IconType
  code: string
}
