import { Field } from 'formik';
import React, { Fragment, useState } from 'react';
import { PasswordLabel } from './label';
import { TextField } from '../text/material';
import { IconType } from 'react-icons/lib';

export interface PasswordFieldProps {
  icon: IconType;
  name: string;
  placeholder: string;
  label?: string;
  helperText?: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ icon, name, label, ...rest }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <Fragment>
      <PasswordLabel
        icon={icon}
        htmlFor={label ? label : name}
        name={name}
        isHidden={isHidden}
        setIsHidden={() => setIsHidden(prevValue => !prevValue)}
      />
      <Field {...rest} name={name} type={isHidden ? 'password' : 'text'} component={TextField} />
    </Fragment>
  );
};

export default PasswordField;
