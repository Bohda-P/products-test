import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  surname: yup.string().required('Surname is required'),
  address: yup.string().required('Address is required'),
  phone: yup.string().required('Phone is required'),
});
