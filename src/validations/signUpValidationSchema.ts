import * as Yup from 'yup'

export const signUpValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('FORMS.VALIDATIONS.REQUIRED'),
  lastName: Yup.string().required('FORMS.VALIDATIONS.REQUIRED'),
  email: Yup.string()
    .email('FORMS.VALIDATIONS.MUST_BE_A_VALID_EMAIL')
    .required('FORMS.VALIDATIONS.REQUIRED'),
  password: Yup.string().required('FORMS.VALIDATIONS.REQUIRED'),
  confirmPassword: Yup.string().required('FORMS.VALIDATIONS.REQUIRED'),
})
