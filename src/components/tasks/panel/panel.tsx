import {
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  styled
} from '@material-ui/core';
import React from 'react';
import { GoX } from 'react-icons/go';
import { DueDateTask } from '../due-date';
import { HeaderTask } from '../header';
import { TaskRes } from '../task-res.interface';
import { useDeleteTask } from './use-delete-project.hook';

interface Props {
  task: TaskRes;
  handleClose: () => void;
}

const WrapperPanelTask = styled('div')`
  display: flex;
  flex-direction: column;
`;

const ContentPanelTask = styled(CardContent)`
  padding: 2rem 4.4rem;
  margin-bottom: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'content menu';
`;

export const PanelTask: React.FC<Props> = ({ task, handleClose }) => {
  const { mutateAsync } = useDeleteTask();
  return (
    <WrapperPanelTask>
      <HeaderTask task={task} handleClose={handleClose} />
      <ContentPanelTask>
        <div>
          <DueDateTask task={task} />
        </div>
        <div>
          <List
            component="nav"
            subheader={<ListSubheader id="Task Actions">Task Actions</ListSubheader>}
          >
            <ListItem
              button
              onClick={async () => {
                await mutateAsync(task.id);
                handleClose();
              }}
            >
              <ListItemIcon>
                <GoX />
              </ListItemIcon>
              <ListItemText primary="Delete" />
            </ListItem>
          </List>
        </div>
      </ContentPanelTask>
    </WrapperPanelTask>
  );
};
