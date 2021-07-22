import { IconButton, ListItemIcon, Menu, MenuItem } from '@material-ui/core';
import React, { Fragment } from 'react';
import { GoKebabVertical, GoPencil, GoX } from 'react-icons/go';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { useDropdown } from 'src/components/common/dropdown.hook';
import { DeleteProject } from '../delete/delete';

interface Props {
  project: ProjectRes;
}

export const MenuItemProject: React.FC<Props> = ({ project }) => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown(null);

  return (
    <Fragment>
      <IconButton style={{ borderRadius: 0, padding: '2rem' }} onClick={openDropdown}>
        <GoKebabVertical />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={dropdown}
        keepMounted
        open={Boolean(dropdown)}
        onClose={closeDropdown}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <GoPencil />
          </ListItemIcon>
          Edit
        </MenuItem>

        <DeleteProject project={project} onClick={closeDropdown} />
      </Menu>
    </Fragment>
  );
};
