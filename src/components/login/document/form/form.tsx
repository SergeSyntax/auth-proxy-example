import React from 'react';
import { Form, Formik } from 'formik';
import { MdLockOutline, MdMailOutline } from 'react-icons/md';
import PasswordField from 'src/components/common/fields/password';
import { LabeledTextField } from 'src/components/common/fields/text-labled';
import { SubmitWideButton } from 'src/components/common/button/submit-wide-button';
import { schemaLogin } from './schema';
import { ValuesFormLogin } from './values.interface';
import { initialValuesLogin } from './initial-values.constant';

export const LoginDocumentForm: React.FC = () => {
  const onSubmit = (values: ValuesFormLogin): void => {};

  return (
    <Formik<ValuesFormLogin>
      validationSchema={schemaLogin}
      initialValues={initialValuesLogin}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <Form autoComplete="off" noValidate>
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
            <SubmitWideButton text="Sign In" inProgress={false} />
          </Form>
        );
      }}
    </Formik>
  );
};
