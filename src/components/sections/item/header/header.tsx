import { CardActionArea, ListItemIcon, Menu, MenuItem, styled } from '@material-ui/core';
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { GoKebabHorizontal, GoX } from 'react-icons/go';
import { IconButton } from 'src/components/common/button/icon/icon';
import { useDropdown } from 'src/components/common/dropdown.hook';
import { SectionRes } from '../../section-res.interface';
import { useDeleteSection } from '../../use-delete-section.hook';
import { FormHeaderSection } from './form';

interface Props {
  section: SectionRes;
}

const WrapperHeaderItemSection = styled('div')`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 0;
`;

const TitleHeaderItemSection = styled(CardActionArea)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  height: 3.7rem;
`;

export const HeaderItemSection: React.FC<Props> = ({ section }) => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown(null);
  const [showForm, setShowForm] = useState(false);
  const { mutateAsync } = useDeleteSection();
  return (
    <WrapperHeaderItemSection>
      {showForm ? (
        <FormHeaderSection handleClose={() => setShowForm(false)} section={section} />
      ) : (
        <TitleHeaderItemSection onClick={() => setShowForm(true)}>
          {section.title}
        </TitleHeaderItemSection>
      )}

      <IconButton
        size="small"
        style={{
          fontSize: '1.6rem',
          marginLeft: '1rem',
          alignSelf: 'self-start',
          marginTop: '.4rem'
        }}
        icon={GoKebabHorizontal}
        onClick={openDropdown}
      />

      <Menu
        anchorEl={dropdown}
        keepMounted
        open={Boolean(dropdown)}
        onClose={closeDropdown}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <MenuItem
          onClick={async () => {
            await mutateAsync(section.id);
            closeDropdown();
          }}
        >
          <ListItemIcon>
            <GoX />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </WrapperHeaderItemSection>
  );
};
