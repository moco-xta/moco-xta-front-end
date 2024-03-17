import * as Yup from 'yup'

export const addNewReviewValidationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Must be a valid email').required('Required'),
  role: Yup.string().required('Required'),
  review: Yup.string().required('Required'),
  rating: Yup.number().min(1, 'Required'),
})
