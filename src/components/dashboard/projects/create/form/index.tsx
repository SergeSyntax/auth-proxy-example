import React from 'react';
import { Form, Formik } from 'formik';
import { TiTag } from 'react-icons/ti';
import { DialogActions } from '@material-ui/core';
import { createProjectValidationSchema } from './schema';
import { LabeledTextField } from 'src/components/common/fields/text-labeled';
import { LabeledSelectField } from 'src/components/common/fields/select-labled';
import { TextButton } from 'src/components/common/button/text-button';
import SubmitButton from 'src/components/common/button/submit/submit';
import { SelectOptions } from 'src/components/common/fields/select';
import { useCreateProject } from 'src/hooks/projects/useCreateProject';

interface FormValues {
  title: string;
  accessibility: 'private' | 'public';
}

interface Props {
  handleClose: () => void;
}

const initialValues: FormValues = {
  title: '',
  accessibility: 'public',
};

const values: SelectOptions[] = [
  { key: 'private', value: 'private' },
  { key: 'public', value: 'public' },
];

const CreateProjectForm = ({ handleClose }: Props) => {
  const { mutateAsync, isLoading } = useCreateProject();
  return (
    <Formik<FormValues>
      validationSchema={createProjectValidationSchema}
      initialValues={initialValues}
      onSubmit={async ({ title, accessibility }) => {
        await mutateAsync({ title, accessibility: accessibility == 'private' });
        handleClose();
      }}
    >
      {() => {
        return (
          <Form autoComplete="off" noValidate>
            <LabeledTextField
              icon={TiTag}
              name="title"
              type="text"
              placeholder="i.e. SkyNet Project"
            />
            <LabeledSelectField icon={TiTag} name="accessibility" values={values} />
            <DialogActions>
              <TextButton onClick={handleClose}>cancel</TextButton>
              <SubmitButton inProgress={isLoading} text="create" />
            </DialogActions>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateProjectForm;
