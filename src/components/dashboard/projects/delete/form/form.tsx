import React, { useState } from 'react';
import { TextField } from 'src/components/common/fields/text/material';
import { Field, Form, Formik } from 'formik';
import { styled } from '@material-ui/core';
import SubmitButton from 'src/components/common/button/submit/submit';
import { css } from '@emotion/react';

interface Props {
  projectId: string;
  projectTitle: string;
}

interface FormValues {
  title: string;
}

const WrapperFormDeleteProject = styled(Form)`
  background: #f6f8fa;
  padding: ${({ theme }) => theme.spacing(2)};
`;

const LabelFormDeleteProject = styled('label')`
  display: block;
  margin-bottom: 1rem;
  font-size: 1.6rem;
`;

const ButtonFormDeleteProject = styled(SubmitButton)`
  ${({ theme }) => css`
    && {
      transition: all 0.2s;
      color: #fff;
      font-size: 1.4rem;
      &,
      &:hover {
        background: ${theme.palette.error.main};
      }

      &:disabled {
        background: ${theme.palette.grey[300]};
      }
    }
  `}
`;

const FieldFormDeleteProject = styled(TextField)`
  .MuiFormHelperText-root {
    display: none;
  }
`;

export const FormDeleteProject: React.FC<Props> = ({ projectId, projectTitle }) => {
  console.log(projectId, projectTitle);

  return (
    <Formik<FormValues> onSubmit={console.log} initialValues={{ title: '' }}>
      {({ values }) => {
        return (
          <WrapperFormDeleteProject autoComplete="off" noValidate>
            <LabelFormDeleteProject htmlFor="project-title">
              Please type <strong>{projectTitle}</strong> to confirm.
            </LabelFormDeleteProject>
            <Field
              size="small"
              id="project-title"
              autoFocus
              name="title"
              component={FieldFormDeleteProject}
            />
            <ButtonFormDeleteProject
              color="error"
              inProgress={false}
              disabled={values.title !== projectTitle}
              fullWidth
              text="I understand the consequences, delete this project"
            />
          </WrapperFormDeleteProject>
        );
      }}
    </Formik>
  );
};
