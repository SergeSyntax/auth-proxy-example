import { Breadcrumbs, Chip, CircularProgress, emphasize, styled } from '@material-ui/core';
import Link from 'next/link';
import React, { createElement, Fragment, useState } from 'react';
import { AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai';
import { GoHome } from 'react-icons/go';
import { MdExpandMore } from 'react-icons/md';
import { useDropdown } from 'src/components/common/dropdown.hook';

const BreadcrumbsBoard = styled(Breadcrumbs)`
  color: #fff;
`;

const ChipBoard = styled(Chip)`
  && {
    background: rgba(0%, 0%, 50%, 0.1);
    height: 2rem;
    font-weight: bold;
    color: inherit;
    font-size: 1.3rem;
    padding-left: 0.3rem;
    margin-bottom: 0.4rem;
    :hover,
    :focus {
      background: rgba(0%, 0%, 50%, 0.2);
    }

    .MuiChip-avatar,
    .MuiChip-deleteIcon {
      color: inherit;
      display: inline;
      width: 1.4rem;
      height: 1.4rem;
    }

    .MuiChip-deleteIcon {
      width: 1.8rem;
      height: 1.8rem;
      &:hover {
        color: inherit;
      }
    }

    &:active {
      box-shadow: ${({ theme }) => theme.shadows[1]};
      background: ${emphasize('rgba(0%,0%,50%,.2)', 0.12)};
    }
  }
`;

const ProgressBoard = styled(CircularProgress)`
  margin-left: 1rem;
`;

interface Props {
  projectId: string;
}

export const LocationBoard: React.FC<Props> = ({ projectId }) => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown(null);
  const loadingProject = false;
  return (
    <Fragment>
      <BreadcrumbsBoard>
        <Link passHref href="/dashboard">
          <ChipBoard label="Dashboard" avatar={createElement(GoHome)} />
        </Link>

        <Link passHref href="/dashboard/projects">
          <ChipBoard label="Projects" avatar={createElement(AiOutlineFolder)} />
        </Link>
        {loadingProject ? (
          <ProgressBoard color="inherit" size={15} />
        ) : (
          <ChipBoard
            onClick={openDropdown as any}
            label={'genesis'}
            avatar={createElement(AiOutlineFolderOpen)}
            deleteIcon={createElement(MdExpandMore)}
            onDelete={openDropdown}
          />
        )}
      </BreadcrumbsBoard>
      {/* <ProjectListMenu projectId={projectId} anchorEl={anchorEl} closeMenu={closeMenu} /> */}
    </Fragment>
  );
};
