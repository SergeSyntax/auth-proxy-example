import {
  Button,
  Card,
  CardContent,
  ClickAwayListener,
  Collapse,
  Fade,
  styled
} from '@material-ui/core';
import React, { useState } from 'react';
import { FormCreateSection } from './form';
import { WrapperCreateSection } from './wrapper';

interface Props {
  projectId: string;
}

const ButtonCreateSection = styled(Button)`
  && {
    background: hsla(0, 0%, 100%, 0.14);
    color: #fff;
  }
`;

const ContainerCreateSection = styled(Card)`
  /* position: absolute;
  top: 0;
  width: 100%; */
  background: #ebecf0;
`;

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
