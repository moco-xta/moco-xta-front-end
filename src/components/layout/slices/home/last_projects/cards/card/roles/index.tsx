import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

import './index.scss'

const getRandomChar = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return chars[Math.floor(Math.random() * chars.length)]
}

export default function LastProjectsRoles({ index, roles }: { index: number; roles: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null)
  const intervalsRef = useRef<NodeJS.Timeout[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const characters = Array.from(roles)

    container.innerHTML = characters
      .map(
        (char) =>
          `<span class="char" data-original="${
            char === ' ' ? '\u00A0' : char
          }">${char === ' ' ? '&nbsp;' : char}</span>`,
      )
      .join('')

    const charSpans = Array.from(container.querySelectorAll<HTMLElement>('.char'))

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 80%',
      },
    })

    charSpans.forEach((span, i) => {
      let count = 0

      tl.from(
        span,
        {
          opacity: 0,
          duration: 0.05,
        },
        i * 0.05,
      )

      tl.call(
        () => {
          const interval = setInterval(() => {
            if (count < 10) {
              span.textContent = getRandomChar()
              count++
            } else {
              clearInterval(interval)
              span.textContent =
                span.dataset.original === ' ' ? '&nbsp;' : span.dataset.original || ''
            }
          }, 100)
          intervalsRef.current.push(interval)
        },
        undefined,
        i * 0.05,
      )
    })

    return () => {
      intervalsRef.current.forEach((interval) => clearInterval(interval))
      tl.kill()
      gsap.killTweensOf(charSpans)
    }
  }, [roles])

  return (
    <p
      ref={containerRef}
      id={`last-projects-roles-${index}`}
      className="last-project-roles"
    >
      {roles}
    </p>
  )
}