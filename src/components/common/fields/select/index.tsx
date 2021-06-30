import { FieldProps, getIn } from 'formik';
import { FormControl, MenuItem } from '@material-ui/core';
import { Select as SelectMUI } from '@material-ui/core';
import { FormHelperText } from './form-helper-text.style';
import _ from 'lodash';

export interface SelectOptions {
  key: string;
  value: string;
}

interface PropsSelectField extends FieldProps {
  values: SelectOptions[];
}

export const SelectField: React.FC<PropsSelectField> = props => {
  const { field, form, ...rest } = props;
  const { name } = field;
  const isError = getIn(form.errors, name) && getIn(form.touched, name);
  const getErrorMessage = getIn(form.errors, name);

  return (
    <FormControl fullWidth error={isError}>
      {/* <InputLabel id="demo-simple-select-error-label">{name}</InputLabel> */}
      <SelectMUI {...field} {...rest} variant="outlined" fullWidth id={name}>
        {props.values.map(({ key, value }) => (
          <MenuItem key={key} value={value}>
            {_.capitalize(key)}
          </MenuItem>
        ))}
      </SelectMUI>
      <FormHelperText>{isError ? getErrorMessage : ' '}</FormHelperText>
    </FormControl>
  );
};
