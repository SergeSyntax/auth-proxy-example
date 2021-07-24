import { ListItemIcon, MenuItem } from '@material-ui/core';
import React from 'react';
import { GoX } from 'react-icons/go';
import { useDeleteSection } from './use-delete-section.hook';

interface Props {
  closeDropdown: () => void;
  sectionId: string;
}

export const DeleteSection: React.FC<Props> = ({ closeDropdown, sectionId }) => {
  const { mutateAsync } = useDeleteSection();

  return (
    <MenuItem
      onClick={async () => {
        await mutateAsync(sectionId);
        closeDropdown();
      }}
    >
      <ListItemIcon>
        <GoX />
      </ListItemIcon>
      Delete
    </MenuItem>
  );
};
