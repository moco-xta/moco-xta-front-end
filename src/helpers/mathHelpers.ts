import type { TRandomRange } from '@/types/maths/types'

export const getRandomInt = ({ min, max, decimal = 1 }: TRandomRange) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return (Math.floor(Math.random() * (max - min + 1)) + min) * decimal
}

export const randomPositiveOrNegative = () => {
  return Math.random() < 0.5 ? -1 : 1
}

export function isEven(number: number) {
  return number % 2 == 0
}

export function getPercentage(part: number, total: number) {
  if (total === 0) {
    throw new Error('Total cannot be zero.')
  }
  return (part / total) * 100
}
