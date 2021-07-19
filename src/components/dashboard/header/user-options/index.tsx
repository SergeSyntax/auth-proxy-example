import { ListItemIcon, Menu, MenuItem } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useDropdown } from 'src/components/common/dropdown.hook';
import { ButtonUserOptions } from './button';
import { MenuUserOptions } from './menu.style';
import { useProfile } from './use-profile';

export const UserOptions: React.FC = () => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown(null);
  const { data } = useProfile();

  return (
    <Fragment>
      {data?.email ? (
        <ButtonUserOptions onClick={openDropdown} name={data?.name} email={data?.email} />
      ) : null}
      <MenuUserOptions
        id="simple-menu"
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
          onClick={e => {
            location.replace('/api/logout');
          }}
        >
          <ListItemIcon>
            <FiLogOut />
          </ListItemIcon>
          Logout
        </MenuItem>
      </MenuUserOptions>
    </Fragment>
  );
};
