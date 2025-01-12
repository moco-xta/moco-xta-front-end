export const skillLogoData = {
  animations: {
    selector: '#main_logo_moco',
    params: {
      y: '50px',
      opacity: '0',
      delay: 0,
      duration: 2,
      ease: 'power2.out',
    },
  },
  hoverModelAnimationData: {
    duration: 0.2,
    ease: 'power3.out',
    rotation: {
      factor: 0.004,
      initial: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    scale: {
      factor: 1.1,
      initial: 1,
    },
  },
}
