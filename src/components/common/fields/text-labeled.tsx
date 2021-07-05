import { Field } from 'formik';
import React, { Fragment } from 'react';
import { IconType } from 'react-icons/lib';
import { Label } from './label';
import { TextField } from './text/material';

export interface InputLabeledProps {
  icon: IconType;
  name: string;
  placeholder: string;
  label?: string;
  type?: string;
  helperText?: string;
}

export const LabeledTextField: React.FC<InputLabeledProps> = ({ icon, name, label, ...rest }) => {
  return (
    <Fragment>
      <Label icon={icon} htmlFor={label ? label : name} name={name} />
      <Field {...rest} name={name} component={TextField} />
    </Fragment>
  );
};
