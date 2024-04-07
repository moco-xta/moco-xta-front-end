import * as Yup from 'yup'

export const addNewReviewValidationSchema = Yup.object().shape({
  review: Yup.string().required('FORMS.VALIDATIONS.REQUIRED'),
  role: Yup.string().required('FORMS.VALIDATIONS.REQUIRED'),
  rating: Yup.number().min(1, 'FORMS.VALIDATIONS.REQUIRED'),
})
