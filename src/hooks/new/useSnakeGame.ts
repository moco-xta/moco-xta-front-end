import { useEffect, useState } from 'react'

export default function useSnakeGame() {
  const [key, setKey] = useState<string>('')
  const [updated, setUpdated] = useState<boolean>(true)

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      setKey(event.key)
      setUpdated(!updated)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return { key, updated }
}
