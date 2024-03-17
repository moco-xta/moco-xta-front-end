import * as Yup from 'yup'

export const addNewReviewValidationSchema = Yup.object().shape({
  name: Yup.string().required('FORMS.VALIDATIONS.REQUIRED'),
  email: Yup.string()
    .email('FORMS.VALIDATIONS.MUST_BE_A_VALID_EMAIL')
    .required('FORMS.VALIDATIONS.REQUIRED'),
  role: Yup.string().required('FORMS.VALIDATIONS.REQUIRED'),
  review: Yup.string().required('FORMS.VALIDATIONS.REQUIRED'),
  rating: Yup.number().min(1, 'FORMS.VALIDATIONS.REQUIRED'),
})
