import * as Yup from 'yup'

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('FORMS.VALIDATIONS.MUST_BE_A_VALID_EMAIL')
    .required('FORMS.VALIDATIONS.REQUIRED'),
  password: Yup.string().required('FORMS.VALIDATIONS.REQUIRED')
})
