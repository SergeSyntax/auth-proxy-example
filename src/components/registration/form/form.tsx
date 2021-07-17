import React from 'react';
import { Form, Formik } from 'formik';
import { MdLockOutline, MdMailOutline, MdPersonOutline } from 'react-icons/md';
import { validationSchemaRegistration } from './schema';
import { initialValuesRegistration } from './initial-values.constant';
import { LabeledTextField } from 'src/components/common/fields/text-labeled';
import PasswordField from 'src/components/common/fields/password';
import { SubmitWideButton } from 'src/components/common/button/submit-wide-button';
import { useRegistration } from './use-registration';
import { RegistrationPayload } from './registration-payload.interface';

export const FormDocumentRegistration: React.FC = () => {
  const { mutate, isLoading } = useRegistration();
  const onSubmit = (values: RegistrationPayload) => mutate(values);

  return (
    <Formik<RegistrationPayload>
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
            <SubmitWideButton inProgress={isLoading} type="submit" text="Agree 	&amp; Join" />
          </Form>
        );
      }}
    </Formik>
  );
};
