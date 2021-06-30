import { TextFieldMaterial } from './text.style';
import { FieldProps, getIn } from 'formik';

export const TextField: React.FC<FieldProps<string>> = (props) => {
  const { field, form, ...rest } = props;
  const { name } = field;
  const isError = getIn(form.errors, name) && getIn(form.touched, name);
  const getErrorMessage = getIn(form.errors, name);

  return (
    <TextFieldMaterial
      {...field}
      {...rest}
      variant="outlined"
      helperText={isError ? getErrorMessage : ' '}
      error={isError}
      id={name}
      size="medium"
      fullWidth
    />
  );
};
