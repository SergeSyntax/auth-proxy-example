import { IconType } from 'react-icons';
import { AiFillMessage } from 'react-icons/ai';
import { MdHome, MdLayers, MdPeople } from 'react-icons/md';
import { HomeDashboard } from './home';
import { MembersDashboard } from './members';
import { ProjectsDashboard } from './projects';
import { TeamsDashboard } from './teams';

export interface DashboardSubScreen {
  label: string;
  icon: IconType;
  screen: React.FC;
  index: number;
}

export const subScreens: DashboardSubScreen[] = [
  {
    index: 0,
    icon: MdHome,
    label: 'Home',
    screen: HomeDashboard,
  },
  {
    index: 1,
    icon: MdLayers,
    label: 'Projects',
    screen: ProjectsDashboard,
  },
  {
    index: 2,
    icon: MdPeople,
    label: 'Teams',
    screen: TeamsDashboard,
  },
  {
    index: 3,
    icon: AiFillMessage,
    label: 'Members',
    screen: MembersDashboard,
  },
];
