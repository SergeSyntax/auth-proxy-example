import { Card, styled } from '@material-ui/core';
import { PROJECT_ITEM_HEIGHT, PROJECT_ITEM_MARGIN_BOTTOM } from './const';

export const WrapperItemProject = styled(Card)`
  display: flex;
  min-height: ${PROJECT_ITEM_HEIGHT};
  margin-bottom: ${PROJECT_ITEM_MARGIN_BOTTOM};
`;
