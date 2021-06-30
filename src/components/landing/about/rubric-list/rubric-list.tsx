import { RubricItem } from './rubric-item';
import { RUBRIC_LIST } from './rubric-list.constant';
import { WrapperRubricList } from './wrapper-rubric-list.style';

export const RubricList: React.FC = () => (
  <WrapperRubricList>
    {RUBRIC_LIST.map((rubric) => (
      <RubricItem key={rubric.title} {...rubric} />
    ))}
  </WrapperRubricList>
);
