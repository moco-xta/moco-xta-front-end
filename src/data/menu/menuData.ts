export const menuData = {
  animations: {
    menuOverlay: {
      selector: '#menu_overlay',
      params: {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1.25,
        ease: 'power4.inOut',
      },
    },
    routeWrapper: {
      selector: '.routes_wrapper',
      set: {
        y: 75,
      },
      params: {
        y: 0,
        delay: -0.75,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.inOut',
      },
    },
  },
}
