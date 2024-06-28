import { useEffect, useState } from 'react'

function getStoredValue(key: string, initialValue: string | number | Date | null) {
  const savedJsonValue = localStorage.getItem(key)
  const savedValue = savedJsonValue !== null ? JSON.parse(savedJsonValue) : null
  if (savedValue) return savedValue
  return initialValue
}

export default function useStoreInputValueInLocalStorage(key: string, initialValue: string | number | Date | null) {
  const [storedValue, setValueToStore] = useState(() => {
    return getStoredValue(key, initialValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [storedValue, key])

  return [storedValue, setValueToStore]
}
