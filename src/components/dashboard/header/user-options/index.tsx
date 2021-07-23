import { ListItemIcon, MenuItem } from '@material-ui/core';
import React, { Fragment } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useDropdown } from 'src/components/common/dropdown.hook';
import { ButtonUserOptions } from './button';
import { formatUserInfo } from './format-user-info';
import { MenuUserOptions } from './menu.style';
import { useProfile } from './use-profile';

export const UserOptions: React.FC = () => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown(null);
  const { data, isLoading } = useProfile();

  return (
    <Fragment>
      <ButtonUserOptions
        onClick={openDropdown}
        letter={isLoading ? null : formatUserInfo(data).letter}
      />
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
          onClick={() => {
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
