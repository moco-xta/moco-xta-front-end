import { default as menuConstants } from '@/constants/animations/shared/menuConstants.json'

export const menuAnimation = {
  scope: menuConstants.SCOPE,
  menuOverlayAnimation: {
    selector: menuConstants.MENU_OVERLAY.SELECTOR,
    params: {
      clipPath: menuConstants.MENU_OVERLAY.PARAMS.CLIP_PATH,
      duration: menuConstants.MENU_OVERLAY.PARAMS.DURATION,
      ease: menuConstants.MENU_OVERLAY.PARAMS.EASE,
    },
  },
  routeHolderAnimation: {
    selector: menuConstants.ROUTE_HOLDER.SELECTOR,
    set: {
      y: menuConstants.ROUTE_HOLDER.SET.Y,
    },
    params: {
      y: menuConstants.ROUTE_HOLDER.PARAMS.Y,
      dealy: menuConstants.ROUTE_HOLDER.PARAMS.DELAY,
      duration: menuConstants.ROUTE_HOLDER.PARAMS.DURATION,
      stagger: menuConstants.ROUTE_HOLDER.PARAMS.STAGGER,
      ease: menuConstants.ROUTE_HOLDER.PARAMS.EASE,
    },
  },
}
