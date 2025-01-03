import { useEffect, MutableRefObject } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/redux/store'
import {
  setCurrentSection,
} from '@/redux/slice/resourcesStateSlice'

export default function useSectionIsVisible(ref: MutableRefObject<HTMLElement>) {

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) dispatch(setCurrentSection(ref.current.id))
      },
      { rootMargin: '-300px' },
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref])

  return null
}
