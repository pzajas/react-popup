import * as Yup from 'yup'

export const userSchema = Yup.object().shape({
  username: Yup.string().required('Nieprawidłowa nazwa.'),
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'Nieprawidłowy email')
    .required('Proszę podać poprawny adres email.'),
})
