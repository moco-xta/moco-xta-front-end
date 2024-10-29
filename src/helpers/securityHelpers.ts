import DOMPurify from 'isomorphic-dompurify'

export const sanitizedData = (data: string) => {
  return DOMPurify.sanitize(data)
}
