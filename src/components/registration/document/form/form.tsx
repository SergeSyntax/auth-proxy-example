import React from 'react';
import { Form, Formik } from 'formik';
import { MdLockOutline, MdMailOutline, MdPersonOutline } from 'react-icons/md';
import { validationSchemaRegistration } from './schema';
import { initialValuesRegistration } from './initial-values.constant';
import { LabeledTextField } from 'src/components/common/fields/text-labled';
import PasswordField from 'src/components/common/fields/password';
import { SubmitWideButton } from 'src/components/common/button/submit-wide-button';
import { FormValuesRegistration } from './values.interface';

export const FormDocumentRegistration: React.FC = () => {
  const onSubmit = (values: FormValuesRegistration) => {};

  return (
    <Formik<FormValuesRegistration>
      validationSchema={validationSchemaRegistration}
      initialValues={initialValuesRegistration}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <Form autoComplete="off" noValidate>
            <LabeledTextField
              icon={MdPersonOutline}
              name="name"
              type="text"
              placeholder="i.e. Steve Rozmarin"
            />
            <LabeledTextField
              icon={MdMailOutline}
              name="email"
              type="email"
              placeholder="i.e. example@example.com"
            />
            <PasswordField
              icon={MdLockOutline}
              name="password"
              placeholder="i.e. example@!%$5475347"
            />
            <SubmitWideButton inProgress={false} type="submit" text="Agree & Join" />
          </Form>
        );
      }}
    </Formik>
  );
};
