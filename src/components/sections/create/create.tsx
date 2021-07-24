import { ClickAwayListener, Collapse, Fade } from '@material-ui/core';
import React, { useState } from 'react';
import { ButtonCreateSection } from './button';
import { ContainerCreateSection } from './container';
import { FormCreateSection } from './form';
import { WrapperCreateSection } from './wrapper';

interface Props {
  projectId: string;
}

export const CreateSection: React.FC<Props> = ({ projectId }) => {
  const [openCreateSection, setOpenCreateSection] = useState(false);
  return (
    <WrapperCreateSection>
      <Fade timeout={{ enter: 10, exit: 200 }} mountOnEnter unmountOnExit in={!openCreateSection}>
        <ButtonCreateSection
          onClick={e => {
            setOpenCreateSection(true);
            e.stopPropagation();
          }}
          variant="contained"
          fullWidth
        >
          Create Section
        </ButtonCreateSection>
      </Fade>

      <ClickAwayListener
        onClickAway={e => {
          if (openCreateSection) setOpenCreateSection(false);
          e.stopPropagation();
        }}
      >
        <Collapse
          timeout={{ enter: 210, exit: 10 }}
          in={openCreateSection}
          mountOnEnter
          unmountOnExit
        >
          <ContainerCreateSection elevation={4}>
            <FormCreateSection
              projectId={projectId}
              handleClose={() => setOpenCreateSection(false)}
            />
          </ContainerCreateSection>
        </Collapse>
      </ClickAwayListener>
    </WrapperCreateSection>
  );
};
