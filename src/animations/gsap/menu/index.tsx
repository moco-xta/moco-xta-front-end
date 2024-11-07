import { default as menuAnimationsConstants } from '@/constants/animations/menuAnimationsConstants.json'

export const menuAnimation = {
  menuOverlayAnimation: {
    selector: menuAnimationsConstants.MENU_OVERLAY.SELECTOR,
    params: {
      clipPath: menuAnimationsConstants.MENU_OVERLAY.PARAMS.CLIP_PATH,
      duration: menuAnimationsConstants.MENU_OVERLAY.PARAMS.DURATION,
      ease: menuAnimationsConstants.MENU_OVERLAY.PARAMS.EASE,
    },
  },
  routeHolderAnimation: {
    selector: menuAnimationsConstants.ROUTE_HOLDER.SELECTOR,
    set: {
      y: menuAnimationsConstants.ROUTE_HOLDER.SET.Y,
    },
    params: {
      y: menuAnimationsConstants.ROUTE_HOLDER.PARAMS.Y,
      dealy: menuAnimationsConstants.ROUTE_HOLDER.PARAMS.DELAY,
      duration: menuAnimationsConstants.ROUTE_HOLDER.PARAMS.DURATION,
      stagger: menuAnimationsConstants.ROUTE_HOLDER.PARAMS.STAGGER,
      ease: menuAnimationsConstants.ROUTE_HOLDER.PARAMS.EASE,
    },
  },
}
