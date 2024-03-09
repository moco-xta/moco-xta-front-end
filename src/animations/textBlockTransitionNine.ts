import gsap from 'gsap'

export function displayNextTextBlock(
  isAnimating: boolean,
  setIsAnimating: (value: boolean) => void,
  activeBlock: number,
  setActiveBlock: (value: number) => void,
  blocksNumber: number,
) {
  if (isAnimating) return false
  setIsAnimating(true)

  const timeline = gsap.timeline()

  timeline
    .fromTo(
      '.word_active',
      {
        xPercent: 0,
        yPercent: 0,
        z: 0,
        rotationX: 0,
        opacity: 1,
      },
      {
        duration: 0.4,
        ease: 'power1.in',
        xPercent: () => gsap.utils.random(-50, 50),
        yPercent: () => gsap.utils.random(-10, 10),
        z: () => gsap.utils.random(-700, -400),
        rotationX: () => gsap.utils.random(-60, 60),
        opacity: 0,
        stagger: {
          each: 0.006,
          from: 'random',
        },
      },
    )
    .fromTo(
      '.word',
      {
        xPercent: () => gsap.utils.random(-50, 50),
        yPercent: () => gsap.utils.random(-10, 10),
        z: () => gsap.utils.random(400, 700),
        rotationX: () => gsap.utils.random(-90, 90),
        opacity: 0,
      },
      {
        duration: 1,
        ease: 'expo',
        xPercent: 0,
        yPercent: 0,
        rotationX: 0,
        z: 0,
        opacity: 1,
        stagger: {
          each: 0.006,
          from: 'random',
        },
        onComplete: () => {
          setActiveBlock(activeBlock + 1 < blocksNumber ? activeBlock + 1 : 0)
          setIsAnimating(false)
        },
      },
      '>-=0.7',
    )
}
