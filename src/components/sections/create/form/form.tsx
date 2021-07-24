import React from 'react';
import { Formik } from 'formik';
import { TiTag } from 'react-icons/ti';
import { createSectionValidationSchema } from './schema';
import { useCreateSection } from './use-create-section.hook';
import { ValuesSection } from './values.interface';
import { styled } from '@material-ui/core';
import { SubmitButton } from 'src/components/common/button/submit';
import { SmallTextFieldset } from 'src/components/common/fields/fieldset/small-text';
import { IconButton } from 'src/components/common/button/icon/icon';
import { GoX } from 'react-icons/go';
import { LineFormCreateSections } from './line';
import { WrapperFormCreateSection } from './wrapper';

interface Props {
  handleClose: () => void;
  projectId: string;
}

const SmallSubmitButton = styled(SubmitButton)`
  && {
    min-height: 4rem;
    margin-top: 0;
  }
`;

const DismissIconButton = styled(IconButton)`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
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
      {() => {
        return (
          <WrapperFormCreateSection autoComplete="off" noValidate>
            <SmallTextFieldset icon={TiTag} name="title" type="text" placeholder="i.e. Todo" />
            <LineFormCreateSections>
              <SmallSubmitButton type="submit" inProgress={isLoading} text="create" />
              <DismissIconButton type="submit" icon={GoX} size="small" onClick={handleClose} />
            </LineFormCreateSections>
          </WrapperFormCreateSection>
        );
      }}
    </Formik>
  );
};
