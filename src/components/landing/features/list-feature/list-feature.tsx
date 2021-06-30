import { ItemListFeature } from './item-list-feature';
import { WrapperListFeature } from './wrapper-list-feature.style';
import { LIST_FEATURE } from './list-feature.constant';

export const ListFeature: React.FC = () => (
  <WrapperListFeature maxWidth="lg">
    {LIST_FEATURE.map((feature) => (
      <ItemListFeature key={feature.title} {...feature} />
    ))}
  </WrapperListFeature>
);
