import React from 'react';
import { Form, Formik } from 'formik';
import { TiTag } from 'react-icons/ti';
import { createSectionValidationSchema } from './schema';
import { useCreateSection } from './use-create-section.hook';
import { ValuesSection } from './values.interface';
import { styled } from '@material-ui/core';
import { SubmitButton } from 'src/components/common/button/submit';
import { SmallTextFieldset } from 'src/components/common/fields/fieldset/small-text';

interface Props {
  handleClose: () => void;
  projectId: string;
}

const ActionsFormCreateSections = styled('div')`
  display: flex;
`;

const WrapperFormCreateSection = styled(Form)`
  padding: 1rem 2rem;
`;
const SmallSubmitButton = styled(SubmitButton)`
  && {
    min-height: 4rem;
    margin-top: 0;
  }
`;

export const FormCreateSection = ({ handleClose, projectId }: Props) => {
  const { mutateAsync, isLoading } = useCreateSection();
  return (
    <Formik<ValuesSection>
      validationSchema={createSectionValidationSchema}
      initialValues={{ title: '', projectId }}
      onSubmit={async values => {
        console.log(values);
        await mutateAsync(values);
        handleClose();
      }}
    >
      {({ handleSubmit }) => {
        return (
          <WrapperFormCreateSection autoComplete="off" noValidate>
            <SmallTextFieldset icon={TiTag} name="title" type="text" placeholder="i.e. Todo" />
            <ActionsFormCreateSections>
              {/* <SmallTextButton onClick={handleClose}>cancel</SmallTextButton> */}
              <SmallSubmitButton type="submit" inProgress={isLoading} text="create" />
            </ActionsFormCreateSections>
          </WrapperFormCreateSection>
        );
      }}
    </Formik>
  );
};
