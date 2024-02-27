import { useEffect, useState } from 'react'

function getSavedValue(
  key: string,
  initialValue: string | number | Date | null
) {
  const savedJsonValue = localStorage.getItem(key)
  const savedValue = savedJsonValue !== null ? JSON.parse(savedJsonValue) : null
  if(savedValue) return savedValue

  return initialValue
}

export default function useStoreInputValueInLocalStorage(
  key: string,
  initialValue: string | number | Date | null
) {

  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}
