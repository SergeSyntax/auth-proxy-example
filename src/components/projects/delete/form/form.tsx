import React from 'react';
import { Field, Formik } from 'formik';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { WrapperFormDeleteProject } from './wrapper';
import { LabelFormDeleteProject } from './label';
import { ButtonFormDeleteProject } from './button';
import { ValuesFormDeleteProject } from './values.interface';
import { FieldFormDeleteProject } from './field';
import { useDeleteProject } from './useDeleteProject';

interface Props {
  project: ProjectRes;
  handleClose: () => void;
}

export const FormDeleteProject: React.FC<Props> = ({ project, handleClose }) => {
  const { mutateAsync, isLoading } = useDeleteProject();

  const onSubmit = async () => {
    await mutateAsync(project.id);
    handleClose();
  };
  return (
    <Formik<ValuesFormDeleteProject>
      onSubmit={onSubmit}
      initialValues={{ title: '' }}
      validateOnChange
      validateOnMount
      validate={values => {
        console.log(values);

        const errors: any = {};

        if (values.title !== project.title) errors.title = 'required';

        return errors;
      }}
    >
      {({ isValid, handleChange, handleBlur }) => {
        return (
          <WrapperFormDeleteProject autoComplete="off" noValidate>
            <LabelFormDeleteProject htmlFor="title">
              Please type <strong>{project.title}</strong> to confirm.
            </LabelFormDeleteProject>
            <Field
              size="small"
              id="title"
              autoFocus
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              component={FieldFormDeleteProject}
            />
            <ButtonFormDeleteProject
              color="error"
              inProgress={isLoading}
              disabled={!isValid}
              fullWidth
              text="I understand the consequences, delete this project"
            />
          </WrapperFormDeleteProject>
        );
      }}
    </Formik>
  );
};
