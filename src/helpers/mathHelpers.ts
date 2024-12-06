interface RandomRangeInterface {
  min: number
  max: number
  decimal?: number
}

export const getRandomInt = ({ min, max, decimal = 1 }: RandomRangeInterface) => {
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
