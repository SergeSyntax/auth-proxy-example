import { ListItemIcon, Menu, MenuItem } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import useDropdown from 'src/components/hooks/dropdown.hook';
import { ButtonUserOptions } from './button';
import { MenuUserOptions } from './menu.style';

export const UserOptions: React.FC = () => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown(null);

  return (
    <Fragment>
      <ButtonUserOptions
        onClick={openDropdown}
        name="Sergway Khodyachikh"
        email="ramdom_email@gmail.com"
      />
      <MenuUserOptions
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
        <MenuItem>
          <ListItemIcon>
            <FiLogOut />
          </ListItemIcon>
          Logout
        </MenuItem>
      </MenuUserOptions>
    </Fragment>
  );
};
