import React from 'react';
import { Form, Formik } from 'formik';
import { MdMailOutline } from 'react-icons/md';
import ActionWrapperFormPasswordRecovery from './action-wrapper.style';
import Link from 'next/link';
import { ValuesPasswordRecovery } from './values.interface';
import { SchemaPasswordRecovery } from './schema';
import { CancelButtonPasswordRecovery } from './cancel-button.style';
import { ApproveButtonPasswordRecovery } from './approve-button.style';
import { LabeledTextField } from 'src/components/common/fields/text-labeled';

const FormPasswordRecovery: React.FC = () => {
  return (
    <Formik<ValuesPasswordRecovery>
      validationSchema={SchemaPasswordRecovery}
      initialValues={{ email: '' }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form autoComplete="off" noValidate>
            <LabeledTextField
              icon={MdMailOutline}
              name="email"
              type="email"
              placeholder="i.e. example@example.com"
            />
            <ActionWrapperFormPasswordRecovery>
              <Link passHref href="/login">
                <CancelButtonPasswordRecovery variant="outlined" color="primary">
                  back
                </CancelButtonPasswordRecovery>
              </Link>

              <ApproveButtonPasswordRecovery
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                type="submit"
              >
                send recovery code
              </ApproveButtonPasswordRecovery>
            </ActionWrapperFormPasswordRecovery>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormPasswordRecovery;
