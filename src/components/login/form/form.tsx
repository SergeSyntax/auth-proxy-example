import React from 'react';
import { Form, Formik } from 'formik';
import { MdLockOutline, MdMailOutline } from 'react-icons/md';
import PasswordField from 'src/components/common/fields/password';
import { LabeledTextField } from 'src/components/common/fields/text-labeled';
import { SubmitWideButton } from 'src/components/common/button/submit-wide-button';
import { schemaLogin } from './schema';
import { initialValuesLogin } from './initial-values.constant';
import { ValuesLogin } from './values.interface';
import { useLogin } from './use-login.hook';

export const FormLogin: React.FC = () => {
  const { mutate, isLoading, isError, error } = useLogin();

  const onSubmit = (values: ValuesLogin): void => mutate(values);
  return (
    <Formik<ValuesLogin>
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
            <SubmitWideButton text="Sign In" inProgress={isLoading} />
          </Form>
        );
      }}
    </Formik>
  );
};
