import { MenuItem } from '@material-ui/core';
import React, { Fragment } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { RiMailSendLine } from 'react-icons/ri';
import { CreateButton } from './button';
import CreateProject from '../../projects/create';
import { CreateMenu } from './menu.style';
import { useDropdown } from 'src/components/common/dropdown.hook';

export const Create: React.FC = () => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown(null);

  return (
    <Fragment>
      <CreateButton onClick={openDropdown} />

      <CreateMenu
        id="simple-menu"
        anchorEl={dropdown}
        keepMounted
        open={Boolean(dropdown)}
        onClose={closeDropdown}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <CreateProject onClick={closeDropdown} />
        <MenuItem>
          <AiOutlineUsergroupAdd />
          New Team
        </MenuItem>
        <MenuItem>
          <RiMailSendLine />
          New Chat
        </MenuItem>
      </CreateMenu>
    </Fragment>
  );
};
